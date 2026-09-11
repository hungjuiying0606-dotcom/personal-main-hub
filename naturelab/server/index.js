const lessons = new Set(['g3-1-1', 'g3-1-2', 'g3-1-3', 'g3-1-4', 'g3-1-workbook', 'g3-2-1', 'g3-2-2', 'g3-2-3', 'g3-2-4', 'g3-3-1', 'g3-3-2', 'g3-3-3', 'g3-3-4', 'g3-4-1', '1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3', '3-4', '4-1', '4-2', '4-3', '4-4', '4-5', '5-1', '5-2', '5-3', '5-4', '5-5', '6-1', '6-2', '6-3', '6-4', '6-5'])

lessons.add('g3-4-2')
lessons.add('g3-4-3')
lessons.add('g3-4-4')
lessons.add('g3-1-exam-1112-25')

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
})

const normalizeCode = (value) => String(value || '').trim().toUpperCase()
const hashPin = async (value) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(value || '')))
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function ensureSchema(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS classes (
      class_code TEXT PRIMARY KEY,
      teacher_pin_hash TEXT NOT NULL,
      created_at TEXT NOT NULL
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS class_progress (
      class_code TEXT NOT NULL,
      student_name TEXT NOT NULL,
      lesson_id TEXT NOT NULL,
      lesson_title TEXT NOT NULL,
      score INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL,
      attempts INTEGER NOT NULL DEFAULT 1,
      updated_at TEXT NOT NULL,
      PRIMARY KEY (class_code, student_name, lesson_id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS class_assignments (
      class_code TEXT PRIMARY KEY,
      lesson_id TEXT NOT NULL,
      title TEXT NOT NULL,
      instruction TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )`),
    db.prepare('CREATE INDEX IF NOT EXISTS class_progress_code_idx ON class_progress (class_code, updated_at DESC)'),
  ])
}

async function handleProgress(request, env, url) {
  if (!env.DB) return json({ error: '雲端學習紀錄尚未啟用。' }, 503)
  await ensureSchema(env.DB)

  if (url.pathname === '/api/progress/health' && request.method === 'GET') return json({ ready: true })

  if (url.pathname === '/api/assignments' && request.method === 'GET') {
    const classCode = normalizeCode(url.searchParams.get('classCode'))
    if (!/^[A-Z0-9-]{3,12}$/.test(classCode)) return json({ error: '班級代碼格式不正確。' }, 400)
    const assignment = await env.DB.prepare(`SELECT class_code, lesson_id, title, instruction, updated_at
      FROM class_assignments WHERE class_code = ?`).bind(classCode).first()
    return json({ assignment: assignment ? {
      classCode: assignment.class_code,
      lessonId: assignment.lesson_id,
      title: assignment.title,
      instruction: assignment.instruction,
      updatedAt: assignment.updated_at,
    } : null })
  }

  if (url.pathname === '/api/assignments' && request.method === 'POST') {
    let body
    try { body = await request.json() } catch { return json({ error: '請提供有效的派課資料。' }, 400) }
    const classCode = normalizeCode(body.classCode)
    const teacherPin = String(body.teacherPin || '').trim()
    const lessonId = String(body.lessonId || '')
    const title = String(body.title || '').trim().slice(0, 80)
    const instruction = String(body.instruction || '').trim().slice(0, 240)
    if (!/^[A-Z0-9-]{3,12}$/.test(classCode)) return json({ error: '班級代碼格式不正確。' }, 400)
    if (!/^[A-Za-z0-9]{4,12}$/.test(teacherPin)) return json({ error: '教師 PIN 請使用 4–12 碼英數字。' }, 400)
    if (!lessons.has(lessonId)) return json({ error: '這個教材尚未開放派課。' }, 400)
    if (!title || !instruction) return json({ error: '請填寫任務名稱與學生提醒。' }, 400)
    const pinHash = await hashPin(teacherPin)
    const existingClass = await env.DB.prepare('SELECT teacher_pin_hash FROM classes WHERE class_code = ?').bind(classCode).first()
    if (existingClass && existingClass.teacher_pin_hash !== pinHash) return json({ error: '教師 PIN 不正確。' }, 403)
    if (!existingClass) await env.DB.prepare('INSERT INTO classes (class_code, teacher_pin_hash, created_at) VALUES (?, ?, ?)').bind(classCode, pinHash, new Date().toISOString()).run()
    const now = new Date().toISOString()
    await env.DB.prepare(`INSERT INTO class_assignments (class_code, lesson_id, title, instruction, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(class_code) DO UPDATE SET lesson_id = excluded.lesson_id, title = excluded.title,
      instruction = excluded.instruction, updated_at = excluded.updated_at`).bind(classCode, lessonId, title, instruction, now, now).run()
    return json({ assignment: { classCode, lessonId, title, instruction, updatedAt: now } })
  }

  if (url.pathname === '/api/classes' && request.method === 'POST') {
    let body
    try { body = await request.json() } catch { return json({ error: '資料格式不正確。' }, 400) }
    const classCode = normalizeCode(body.classCode)
    const teacherPin = String(body.teacherPin || '').trim()
    if (!/^[A-Z0-9-]{3,12}$/.test(classCode)) return json({ error: '班級代碼格式不正確。' }, 400)
    if (!/^[A-Za-z0-9]{4,12}$/.test(teacherPin)) return json({ error: '教師查閱碼請使用 4–12 碼英數字。' }, 400)
    const pinHash = await hashPin(teacherPin)
    const existing = await env.DB.prepare('SELECT teacher_pin_hash FROM classes WHERE class_code = ?').bind(classCode).first()
    if (existing && existing.teacher_pin_hash !== pinHash) return json({ error: '教師查閱碼不正確。' }, 403)
    if (!existing) await env.DB.prepare('INSERT INTO classes (class_code, teacher_pin_hash, created_at) VALUES (?, ?, ?)').bind(classCode, pinHash, new Date().toISOString()).run()
    return json({ ready: true, created: !existing })
  }

  if (request.method === 'GET') {
    const classCode = normalizeCode(url.searchParams.get('classCode'))
    const teacherPin = String(url.searchParams.get('teacherPin') || '').trim()
    if (!/^[A-Z0-9-]{3,12}$/.test(classCode)) return json({ error: '請輸入 3–12 碼班級代碼。' }, 400)
    const classroom = await env.DB.prepare('SELECT teacher_pin_hash FROM classes WHERE class_code = ?').bind(classCode).first()
    if (!classroom) return json({ error: '找不到這個班級，請先建立班級。' }, 404)
    if (classroom.teacher_pin_hash !== await hashPin(teacherPin)) return json({ error: '教師查閱碼不正確。' }, 403)
    const result = await env.DB.prepare(`SELECT student_name, lesson_id, lesson_title, score, status, attempts, updated_at
      FROM class_progress WHERE class_code = ? ORDER BY student_name, lesson_id`).bind(classCode).all()
    return json({ classCode, records: result.results.map((row) => ({
      id: `${classCode}-${row.student_name}-${row.lesson_id}`,
      name: row.student_name,
      lessonId: row.lesson_id,
      lesson: row.lesson_title,
      score: row.score,
      status: row.status,
      attempts: row.attempts,
      updatedAt: row.updated_at,
      source: '雲端',
    })) })
  }

  if (request.method === 'POST') {
    let body
    try { body = await request.json() } catch { return json({ error: '資料格式不正確。' }, 400) }
    const classCode = normalizeCode(body.classCode)
    const name = String(body.name || '').trim()
    const lessonId = String(body.lessonId || '')
    const status = body.status === '已完成' ? '已完成' : '需要協助'
    const score = status === '已完成' ? 100 : 0
    const attempts = Math.min(999, Math.max(1, Number(body.attempts) || 1))
    if (!/^[A-Z0-9-]{3,12}$/.test(classCode)) return json({ error: '班級代碼格式不正確。' }, 400)
    if (!name || name.length > 30) return json({ error: '學生姓名格式不正確。' }, 400)
    if (!lessons.has(lessonId)) return json({ error: '單元代碼不正確。' }, 400)
    const classroom = await env.DB.prepare('SELECT class_code FROM classes WHERE class_code = ?').bind(classCode).first()
    if (!classroom) return json({ error: '班級尚未建立，請先請老師建立班級代碼。' }, 404)
    const lessonTitle = String(body.lesson || lessonId).slice(0, 60)
    const updatedAt = new Date().toISOString()
    await env.DB.prepare(`INSERT INTO class_progress
      (class_code, student_name, lesson_id, lesson_title, score, status, attempts, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(class_code, student_name, lesson_id) DO UPDATE SET
        lesson_title = excluded.lesson_title,
        score = MAX(class_progress.score, excluded.score),
        status = CASE WHEN class_progress.status = '已完成' OR excluded.status = '已完成' THEN '已完成' ELSE excluded.status END,
        attempts = MAX(class_progress.attempts, excluded.attempts),
        updated_at = excluded.updated_at`).bind(classCode, name, lessonId, lessonTitle, score, status, attempts, updatedAt).run()
    return json({ saved: true, updatedAt })
  }

  return json({ error: '不支援的操作。' }, 405)
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname.startsWith('/api/progress') || url.pathname === '/api/classes' || url.pathname === '/api/assignments') return handleProgress(request, env, url)
    let response = await env.ASSETS.fetch(request)
    if (response.status === 404 && request.method === 'GET' && !url.pathname.includes('.')) {
      url.pathname = '/index.html'
      response = await env.ASSETS.fetch(new Request(url, request))
    }
    return response
  },
}

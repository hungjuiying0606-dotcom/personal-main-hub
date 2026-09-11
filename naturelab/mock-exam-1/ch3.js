/* ============ 第 3 章　第 22～25 題 · 聲波傳播、微粒與原子 ============
   對應題號：115一模 自然科 Q22, Q23, Q24, Q25
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#059669';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 800}" fill="${o.c || '#172033'}">${SV.text(s)}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 8}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#dce3ee'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 3,
    title: '第 22～25 題 · 聲波傳播、微粒與原子',
    color: C,
    sections: ['聲音傳播與介質', '環境微粒與濃度', '原子結構與微觀', '波動與示波器波形'],
    slides: [

      /* ---------- Slide 1: Q22 ---------- */
      {
        sec: '聲音傳播與介質', secName: '聲音傳播與介質',
        title: '【第 22 題】聲波水中入空氣變慢 · 能量發散振幅減小',
        points: [
          '聲速大小順序：<b>固體 ＞ 液體 ＞ 氣體</b>（水約 1500 m/s，空氣約 340 m/s）。',
          '水中的低頻噪音向上传入空氣時，<b>波速變慢</b>、頻率不變。',
          '聲音向遠處傳播時，能量逐漸擴散被介質吸收，<b>振幅隨之減小</b>。',
          '低頻噪音為可聽見之聲波（\\(20\\sim 20000\\text{ Hz}\\)），非超聲波。'
        ],
        formula: { label: '聲速與介質關係', tex: 'v_{\\text{固體}} > v_{\\text{液體 (水約 1500 m/s)}} > v_{\\text{氣體 (空氣約 340 m/s)}}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q22"></div>
            <div class="ictrl"><label>切換聲波傳播情境：<span class="ival" id="med_txt">水中傳至空氣 (聲速變慢)</span></label>
            <input type="range" id="q22_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q22_s').value;
            h.querySelector('#med_txt').textContent = mode === 0 ? '水中傳至空氣 (聲速變慢)' : '聽覺頻率範圍對照';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            if (mode === 0) {
              // 空氣層
              s += `<rect x="20" y="25" width="220" height="75" fill="#f1f5f9"/>`;
              s += TX(30, 45, '空氣 (聲速 v ≈ 340 m/s)', { fs: 12, c: '#475569' });
              // 水面界面
              s += `<line x1="20" y1="100" x2="240" y2="100" stroke="${BLU}" stroke-width="2"/>`;
              s += TX(130, 96, '海平面界面', { fs: 11, c: BLU, anchor: 'middle' });
              // 海水層
              s += `<rect x="20" y="100" width="220" height="100" fill="rgba(37,99,235,0.12)"/>`;
              s += TX(30, 190, '海水 (聲速 v ≈ 1500 m/s)', { fs: 12, c: BLU });
              // 潛艦聲源
              s += `<ellipse cx="80" cy="150" rx="35" ry="12" fill="#334155"/>`;
              s += TX(80, 154, '潛艦聲源', { fs: 10, c: '#fff', anchor: 'middle' });
              // 向上傳播的聲波箭頭
              s += `<path d="M80,135 L80,50" stroke="${RED}" stroke-width="2.5" marker-end="url(#arr)"/>`;
              s += TX(95, 75, '折射向上傳入空氣', { fs: 11, c: RED });

              // 右側考點剖析
              s += BOX(250, 25, 175, 180, { fill: '#fff', stroke: GRN, sw: 2 });
              s += TX(260, 50, '【潛艦低頻聲分析】', { fs: 13, c: GRN });
              s += TX(260, 75, '• 可向上傳到空氣中 ✔', { fs: 11, c: '#334155' });
              s += TX(260, 98, '• 進入空氣速率變慢 ✔', { fs: 11, c: RED });
              s += TX(260, 120, '• 遠處振幅變小 (能量衰減)', { fs: 11, c: '#334155' });
              s += TX(260, 145, '• 非超聲波 (低頻噪音)', { fs: 11, c: '#64748b' });
              s += TX(260, 175, '正確選項：(C)', { fs: 14, c: GRN });
            } else {
              // 頻率範圍對照
              s += TX(30, 45, '人類聽覺與聲波頻率分類：', { fs: 13, c: '#1e293b' });
              s += BOX(30, 60, 380, 40, { fill: '#e2e8f0', stroke: '#94a3b8' });
              s += BOX(130, 60, 160, 40, { fill: 'rgba(5,150,105,0.2)', stroke: GRN, sw: 2 });
              s += TX(80, 85, '次聲波 (<20Hz)', { fs: 11, c: '#64748b', anchor: 'middle' });
              s += TX(210, 85, '人耳可聽 (20~20000Hz)', { fs: 12, c: GRN, anchor: 'middle' });
              s += TX(340, 85, '超聲波 (>20000Hz)', { fs: 11, c: '#64748b', anchor: 'middle' });
              s += BOX(30, 115, 380, 85, { fill: '#fff', stroke: BLU, sw: 1.5 });
              s += TX(45, 140, '• 超聲波定義：振動頻率大於 20000 Hz 的聲波。', { fs: 12, c: '#334155' });
              s += TX(45, 165, '• 潛艦葉片旋轉產生的是「低頻噪音」，屬於人耳可聽範圍。', { fs: 12, c: RED });
              s += TX(45, 188, '• 聲波傳播必然伴隨能量擴散，振幅隨距離增加而減小。', { fs: 12, c: '#64748b' });
            }
            h.querySelector('#fig_q22').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q22_s').oninput = draw; draw();
        },
        caption: '聲波在水中的傳播速率高於空氣，故由水中傳至空氣時聲速變慢；遠處振幅衰減。',
        example: {
          q: '【115會考模擬 Q22】潛艦低速航行時，螺旋槳葉片旋轉會產生低頻噪音，能在海水中傳得很遠被偵測到。關於此低頻噪音，下列說明何者正確？<br>(A) 不會向上傳到空氣中<br>(B) 是人耳聽不到的超聲波<br>(C) 可向上傳到空氣中但速率變慢<br>(D) 在海水中傳到遠處時仍有相同振幅',
          steps: [
            '聲波可在固體、液體與氣體中傳播，聲波在海水中傳播可部分折射向上進入空氣中。',
            '聲波傳播速率一般為：液體（水約 1500 m/s）大於氣體（空氣約 340 m/s），故入空氣速率變慢。',
            '超聲波頻率高於 20000 Hz，本題為「低頻噪音」，人耳能夠聽聞。',
            '聲波向外擴散時能量減弱，傳到遠處時振幅必定縮小。'
          ],
          ans: '正解：(C)'
        }
      },

      /* ---------- Slide 2: Q23 ---------- */
      {
        sec: '環境微粒與濃度', secName: '環境微粒與濃度',
        title: '【第 23 題】PM2.5 質量上限計算：M ＝ C × V',
        points: [
          '\\(\\text{PM}_{2.5}\\)：粒徑小於或等於 \\(2.5\\ \\mu\\text{m}\\) 之細懸浮微粒。',
          '法規標準：\\(24\\text{ hr}\\) 累計濃度上限 \\(35\\ \\mu\\text{g/m}^3\\)。',
          '教室空間容積：\\(V = 160\\text{ m}^3\\)。',
          '質量 ＝ 體積 \\(\\times\\) 濃度 \\(= 160\\text{ m}^3 \\times 35\\ \\mu\\text{g/m}^3 = 35 \\times 160\\ \\mu\\text{g}\\)。'
        ],
        formula: { label: '體積濃度質量關係', tex: '\\text{總質量 } M (\\mu\\text{g}) = \\text{濃度 } C (\\mu\\text{g/m}^3) \\times \\text{空間體積 } V (\\text{m}^3)' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q23"></div>
            <div class="ictrl"><label>教室體積 \\(V\\)：<span class="ival" id="vol_val">160</span> \\(\\text{m}^3\\)</label>
            <input type="range" id="q23_s" min="80" max="240" step="20" value="160"></div></div>`;
          const draw = () => {
            const v = +h.querySelector('#q23_s').value;
            h.querySelector('#vol_val').textContent = v;
            const totalMass = 35 * v;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 教室 3D 空間示意圖
            const scaleW = 100 + (v - 80) * 0.4;
            s += BOX(30, 45, scaleW, 90, { fill: 'rgba(37,99,235,0.1)', stroke: BLU, sw: 2 });
            s += TX(30 + scaleW / 2, 95, `空間 ${v} m³`, { fs: 13, c: BLU, anchor: 'middle' });
            // 懸浮微粒點陣示意
            for (let i = 0; i < 20; i++) {
              const px = 35 + (i * 19) % (scaleW - 10);
              const py = 55 + (i * 13) % 70;
              s += `<circle cx="${px}" cy="${py}" r="2" fill="${AMB}"/>`;
            }
            // 右側計算看板
            s += BOX(240, 25, 180, 180, { fill: '#fff', stroke: GRN, sw: 2 });
            s += TX(255, 52, '【濃度與質量計算】', { fs: 13, c: GRN });
            s += TX(255, 78, '限值 C ＝ 35 µg/m³', { fs: 12, c: '#334155' });
            s += TX(255, 102, `體積 V ＝ ${v} m³`, { fs: 12, c: '#334155' });
            s += `<line x1="250" y1="115" x2="410" y2="115" stroke="#e2e8f0" stroke-width="1.5"/>`;
            s += TX(255, 138, '總質量 M ＝ C × V', { fs: 12, c: '#64748b' });
            s += TX(255, 162, `＝ 35 × ${v} µg`, { fs: 14, c: RED });
            s += TX(255, 188, `＝ ${totalMass} µg`, { fs: 12, c: '#1e293b' });
            // 底部防呆提醒
            s += BOX(20, 150, 205, 55, { fill: '#fff', stroke: RED, sw: 1.5 });
            s += TX(28, 172, '⚠ 陷阱注意：', { fs: 11, c: RED });
            s += TX(28, 192, '2.5 µm 是微粒直徑，非濃度！', { fs: 11, c: '#334155' });
            h.querySelector('#fig_q23').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q23_s').oninput = draw; draw();
        },
        caption: '總質量上限 ＝ 體積濃度 (35 µg/m³) × 空間體積 (160 m³) ＝ 35 × 160 µg。',
        example: {
          q: '【115會考模擬 Q23】\\(\\text{PM}_{2.5}\\) 是直徑 \\(\\le 2.5\\ \\mu\\text{m}\\) 的懸浮微粒，標準為 24 小時內不得超過 \\(35\\ \\mu\\text{g/m}^3\\)。若教室空間為 \\(160\\text{ m}^3\\)，室內微粒總質量最多不可超過多少？<br>(A) \\(2.5 \\times 160\\ \\mu\\text{m}\\)<br>(B) \\(35 \\times 160\\ \\mu\\text{g}\\)<br>(C) \\(\\frac{2.5 \\times 160}{35}\\ \\mu\\text{m}\\)<br>(D) \\(\\frac{35 \\times 160}{2.5}\\ \\mu\\text{g}\\)',
          steps: [
            '濃度定義為單位體積所含的質量：\\(C = \\frac{M}{V}\\)，故 \\(M = C \\times V\\)。',
            '代入數值：濃度上限 \\(35\\ \\mu\\text{g/m}^3\\)，教室體積 \\(160\\text{ m}^3\\)。',
            '累計總質量 \\(= 35\\ \\mu\\text{g/m}^3 \\times 160\\text{ m}^3 = 35 \\times 160\\ \\mu\\text{g}\\)。',
            '注意 \\(2.5\\ \\mu\\text{m}\\) 為粒子粒徑分類標準，不參與總質量乘除運算。'
          ],
          ans: '正解：(B)'
        }
      },

      /* ---------- Slide 3: Q24 ---------- */
      {
        sec: '原子結構與微觀', secName: '原子結構與微觀',
        title: '【第 24 題】電中性原子：核外電子 ＝ 核內質子 ＝ 原子序',
        points: [
          '原子核外軌道上有 4 顆灰色小球，代表帶負電的<b>電子</b>。',
          '原子呈電中性：核內<b>質子數必定等於核外電子數</b>（4 顆）。',
          '核內 4 顆白色小球為質子，故此原子之<b>原子序為 4</b>。',
          '核內 5 顆黑色小球為中子，質量數 \\(= 4 + 5 = 9\\)（鈹 Be）。'
        ],
        formula: { label: '原子內部粒子關係', tex: '\\text{原子序} = \\text{質子數} = \\text{核外電子數} = 4 \\quad (\\text{質量數} = 4 + 5 = 9)' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q24"></div>
            <div class="ictrl"><label>微觀粒子剖析：<span class="ival" id="part_txt">白色小球 (質子，原子序 4)</span></label>
            <input type="range" id="q24_s" min="1" max="3" step="1" value="1"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(3, +h.querySelector('#q24_s').value || 1));
            const pData = [
              {},
              { name: '白色小球 (質子)', role: '核內帶正電，決定元素種類', count: 4, c: RED },
              { name: '灰色小球 (電子)', role: '核外軌道運行，帶負電', count: 4, c: BLU },
              { name: '黑色小球 (中子)', role: '核內不帶電，維持核穩定', count: 5, c: '#1e293b' }
            ];
            const cur = pData[v] || pData[1];
            h.querySelector('#part_txt').textContent = `${cur.name} (${cur.count}顆)`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 原子軌道虛線
            s += `<circle cx="120" cy="110" r="70" fill="none" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="1.5"/>`;
            s += `<circle cx="120" cy="110" r="45" fill="none" stroke="#cbd5e1" stroke-dasharray="3 3" stroke-width="1"/>`;

            // 原子核底襯
            s += `<circle cx="120" cy="110" r="28" fill="rgba(217,119,6,0.15)" stroke="${AMB}" stroke-width="1.5"/>`;
            s += TX(120, 75, '原子核', { fs: 11, c: AMB, anchor: 'middle' });

            // 核外電子 (4 顆灰色小球，位於軌道上)
            const ePos = [[120, 40], [120, 180], [50, 110], [190, 110]];
            ePos.forEach(p => {
              s += `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="${v === 2 ? BLU : '#94a3b8'}" stroke="#334155" stroke-width="1.5"/>`;
            });
            s += TX(120, 28, '4 顆核外電子', { fs: 10, c: BLU, anchor: 'middle' });

            // 核內粒子：4 顆白色質子 + 5 顆黑色中子
            // 白色質子 (4 顆)
            const wPos = [[112, 102], [128, 102], [112, 118], [128, 118]];
            wPos.forEach(p => {
              s += `<circle cx="${p[0]}" cy="${p[1]}" r="5.5" fill="#fff" stroke="${v === 1 ? RED : '#334155'}" stroke-width="${v === 1 ? 2.5 : 1.5}"/>`;
            });
            // 黑色中子 (5 顆)
            const bPos = [[120, 94], [120, 126], [104, 110], [136, 110], [120, 110]];
            bPos.forEach(p => {
              s += `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="${v === 3 ? '#0f172a' : '#475569'}"/>`;
            });

            // 右側數值推導看板
            s += BOX(235, 25, 180, 180, { fill: '#fff', stroke: cur.c, sw: 2 });
            s += TX(245, 52, '【原子結構判讀】', { fs: 13, c: cur.c });
            s += TX(245, 76, '① 電中性原理：', { fs: 11, c: '#334155' });
            s += TX(255, 96, '質子數 ＝ 電子數 ＝ 4', { fs: 12, c: RED });
            s += TX(245, 120, '② 原子序定義：', { fs: 11, c: '#334155' });
            s += TX(255, 140, '原子序 ＝ 質子數 ＝ 4', { fs: 12, c: GRN });
            s += TX(245, 162, '③ 質量數計算：', { fs: 11, c: '#334155' });
            s += TX(255, 182, '質子(4)＋中子(5) ＝ 9', { fs: 11, c: '#64748b' });
            h.querySelector('#fig_q24').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q24_s').oninput = draw; draw();
        },
        caption: '原子為電中性，核外 4 顆電子對應核內 4 顆質子（白色球），原子序等於 4。',
        example: {
          q: '【115會考模擬 Q24】圖(十一)為某原子結構示意圖，圖中以不同顏色小球代表質子、電子與中子。根據此圖判斷，下列說明何者正確？<br>(A) 白色小球代表質子，此原子原子序為 4<br>(B) 灰色小球代表質子，此原子原子序為 5<br>(C) 灰色小球代表電子，此原子原子序為 9<br>(D) 黑色小球代表電子，此原子原子序為 5',
          steps: [
            '電子在原子核外的圓形軌道上運動，圖中軌道上的灰色小球共 4 顆，代表「核外電子數 ＝ 4」。',
            '一般原子為電中性，原子核內的質子數必定等於核外電子數，因此「質子數 ＝ 4」。',
            '核內白色小球剛好為 4 顆，因此白色小球代表質子；黑色小球為 5 顆代表中子。',
            '原子序即為原子核內的質子數，故該原子的原子序為 4，正解為 (A)。'
          ],
          ans: '正解：(A)'
        }
      },

      /* ---------- Slide 4: Q25 ---------- */
      {
        sec: '波動與示波器波形', secName: '波動與示波器波形',
        title: '【第 25 題】聲音三要素：振幅決定音量 · 頻率決定音調',
        points: [
          '<b>響度（音量）</b>：由<b>振幅</b>決定，振幅越小聲音越弱。',
          '<b>音調（高低）</b>：由<b>頻率</b>決定，相同時間波數越多音調越高。',
          '乙與丙振幅為 1 格（音量最小）；甲與丁振幅為 2 格。',
          '1/200 秒內：乙有 9 個波（頻率最高），故乙音量最小且音調最高。'
        ],
        formula: { label: '頻率公式', tex: 'f = \\frac{\\text{波數}}{\\text{時間 (s)}} \\quad (\\text{在相同時間內，波數多者頻率高、音調高})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q25"></div>
            <div class="ictrl"><label>切換檢視聲波：<span class="ival" id="wave_txt">乙波 (最小音量、最高音調)</span></label>
            <input type="range" id="q25_s" min="1" max="4" step="1" value="2"></div></div>`;
          const draw = () => {
            const v = +h.querySelector('#q25_s').value;
            const wData = [
              {},
              { name: '甲波', amp: 2, n: 5, f: 1000, desc: '振幅大(音量大)、中頻' },
              { name: '乙波', amp: 1, n: 9, f: 1800, desc: '振幅小(音量最小)、頻率最高(音調最高) ★' },
              { name: '丙波', amp: 1, n: 4, f: 800, desc: '振幅小(音量小)、低頻' },
              { name: '丁波', amp: 2, n: 2, f: 400, desc: '振幅大(音量大)、頻率最低(音調最低)' }
            ];
            const cur = wData[v];
            h.querySelector('#wave_txt').textContent = `${cur.name} (${cur.desc})`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 示波器方格背景
            for (let y = 30; y <= 150; y += 20) {
              s += `<line x1="30" y1="${y}" x2="270" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`;
            }
            for (let x = 30; x <= 270; x += 30) {
              s += `<line x1="${x}" y1="30" x2="${x}" y2="150" stroke="#e2e8f0" stroke-width="1"/>`;
            }
            s += `<line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5"/>`;

            // 繪製對應聲波
            let path = 'M 30,90';
            const ampPx = cur.amp * 20;
            for (let x = 30; x <= 270; x += 2) {
              const theta = ((x - 30) / 240) * cur.n * 2 * Math.PI;
              const y = 90 - ampPx * Math.sin(theta);
              path += ` L ${x.toFixed(1)},${y.toFixed(1)}`;
            }
            s += `<path d="${path}" fill="none" stroke="${v === 2 ? RED : GRN}" stroke-width="2.5"/>`;

            // 底部 1/200 秒標記
            s += `<line x1="30" y1="165" x2="270" y2="165" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="30" y1="160" x2="30" y2="170" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="270" y1="160" x2="270" y2="170" stroke="#334155" stroke-width="1.5"/>`;
            s += TX(150, 180, '時間 ＝ 1/200 秒', { fs: 12, c: '#334155', anchor: 'middle' });

            // 右側數值儀表板
            s += BOX(285, 25, 140, 180, { fill: '#fff', stroke: v === 2 ? RED : BLU, sw: 2 });
            s += TX(295, 52, `【${cur.name} 特性】`, { fs: 14, c: v === 2 ? RED : BLU });
            s += TX(295, 78, `• 振幅：${cur.amp} 格`, { fs: 12, c: '#334155' });
            s += TX(295, 102, `• 波數：${cur.n} 個完整波`, { fs: 12, c: '#334155' });
            s += TX(295, 126, `• 頻率：${cur.f} Hz`, { fs: 12, c: '#334155' });
            s += `<line x1="290" y1="138" x2="415" y2="138" stroke="#e2e8f0" stroke-width="1.5"/>`;
            if (v === 2) {
              s += TX(295, 160, '★ 音量：最小 (1格)', { fs: 11, c: RED });
              s += TX(295, 182, '★ 音調：最高 (9波)', { fs: 11, c: RED });
            } else {
              s += TX(295, 160, `音量：${cur.amp === 1 ? '小' : '大'}`, { fs: 11, c: '#64748b' });
              s += TX(295, 182, `音調：第 ${5 - cur.n / 2} 高`, { fs: 11, c: '#64748b' });
            }
            h.querySelector('#fig_q25').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q25_s').oninput = draw; draw();
        },
        caption: '示波器波形判讀：乙波振幅僅 1 格（音量最小），且在 1/200 秒內有 9 個波（音調最高）。',
        example: {
          q: '【115會考模擬 Q25】甲、乙、丙、丁四個聲波在相同時間（1/200秒）內波形如圖。這四個聲波中「音量最小且音調最高」的聲波為何？<br>(A) 甲  (B) 乙  (C) 丙  (D) 丁',
          steps: [
            '音量大小由「振幅」決定：甲、丁振幅為 2 格；乙、丙振幅為 1 格，故音量最小為乙或丙。',
            '音調高低由「頻率（相同時間波數）」決定：甲有 5 個波、乙有 9 個波、丙有 4 個波、丁有 2 個波。',
            '乙波波數最多（9 個波），其頻率最高（\\(f = 9 / (1/200) = 1800\\text{ Hz}\\)），音調最高。',
            '綜合兩者，音量最小且音調最高者為乙。'
          ],
          ans: '正解：(B)'
        }
      }

    ]
  });
})();

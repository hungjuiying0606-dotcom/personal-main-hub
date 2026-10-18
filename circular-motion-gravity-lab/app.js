const $ = (id) => document.getElementById(id);
const cx = 350, cy = 275, radius = 170;
const angularSpeed = Math.PI / 3;
let mode = 'orbit', theta = -Math.PI / 2, running = false, released = false;
let prediction = null, object = 'moon', lastTime = null, flightTime = 0, releaseState = null;

function feedback(id, text, kind = '') {
  $(id).textContent = text;
  $(id).className = `feedback ${kind}`;
}

function render() {
  let x = cx + radius * Math.cos(theta), y = cy + radius * Math.sin(theta);
  let ux = -Math.sin(theta), uy = Math.cos(theta);
  if (released) {
    ({ ux, uy } = releaseState);
    x = releaseState.x + ux * radius * angularSpeed * flightTime;
    y = releaseState.y + uy * radius * angularSpeed * flightTime;
  }
  $('ball').setAttribute('transform', `translate(${x},${y})`);
  $('satellite').setAttribute('transform', `translate(${x},${y})`);
  $('rope').setAttribute('x2', x); $('rope').setAttribute('y2', y);
  const arrow = (id, x1, y1, x2, y2) => $(id).setAttribute('d', `M${x1} ${y1}L${x2} ${y2}`);
  arrow('speed-arrow', x + ux * 24, y + uy * 24, x + ux * 128, y + uy * 128);
  arrow('force-arrow', x - Math.cos(theta) * 25, y - Math.sin(theta) * 25, cx + Math.cos(theta) * 85, cy + Math.sin(theta) * 85);
  const speedVisible = mode !== 'orbit' || $('show-speed').checked;
  const forceVisible = !released && (mode !== 'orbit' || $('show-force').checked);
  $('speed-arrow').style.visibility = speedVisible ? 'visible' : 'hidden';
  $('speed-label').style.visibility = speedVisible ? 'visible' : 'hidden';
  $('force-arrow').style.visibility = forceVisible ? 'visible' : 'hidden';
  $('force-label').style.visibility = forceVisible ? 'visible' : 'hidden';
  $('rope').style.visibility = mode === 'gravity' || released ? 'hidden' : 'visible';
  $('point-label').style.visibility = mode === 'release' && !running && !released ? 'visible' : 'hidden';
  const point = Number($('release-point').value);
  const angle = -Math.PI / 2 + point * Math.PI / 2;
  $('point-label').setAttribute('x', cx + 213 * Math.cos(angle));
  $('point-label').setAttribute('y', cy + 213 * Math.sin(angle) + 10);
  $('point-label').textContent = `${'ABCD'[point]} 點`;
  $('ball').style.visibility = mode === 'gravity' && object === 'satellite' ? 'hidden' : 'visible';
  $('earth').style.display = mode === 'gravity' ? '' : 'none';
  $('center').style.display = mode === 'gravity' ? 'none' : '';
  $('satellite').style.display = mode === 'gravity' && object === 'satellite' ? '' : 'none';
  $('force-label').textContent = mode === 'gravity' ? '萬有引力 → 地心' : '向心力 → 圓心';
  $('diagram-note').textContent = mode === 'gravity' ? '地球固定示意；大小、距離不按實際比例' : '忽略摩擦；重力與支持力平衡';
  $('status').textContent = released ? (running ? '沿切線前進' : flightTime >= 4.2 ? '已完成 · 請重設' : '已暫停 · 切線運動') : (running ? '圓周運動中' : '已暫停');
  $('play').disabled = released && flightTime >= 4.2;
  $('play').textContent = running ? 'Ⅱ 暫停' : '▶ 播放';
  $('play').setAttribute('aria-label', running ? '暫停模擬' : '播放模擬');
}

function reset() {
  running = false; released = false; releaseState = null; flightTime = 0;
  theta = mode === 'release' ? -Math.PI / 2 + Number($('release-point').value) * Math.PI / 2 : -Math.PI / 2;
  $('tangent').setAttribute('visibility', 'hidden');
  $('release-origin').setAttribute('visibility', 'hidden');
  $('flight-result').hidden = true;
  $('release').disabled = false; $('release-point').disabled = false; $('speed').disabled = false;
  document.querySelectorAll('[data-prediction]').forEach((button) => button.disabled = false);
  if (mode === 'release') feedback('release-feedback', '先選預測，再按「斷繩驗證」。');
  render();
}

function setMode(next) {
  mode = next;
  document.querySelectorAll('[data-mode]').forEach((tab) => {
    const selected = tab.dataset.mode === mode;
    tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
  });
  $('lesson').setAttribute('aria-labelledby', `tab-${mode}`);
  ['orbit','release','gravity','video'].forEach((name) => $(`${name}-content`).hidden = name !== mode);
  $('diagram-area').hidden = mode === 'video'; $('movie-area').hidden = mode !== 'video';
  $('motion-controls').hidden = mode === 'video'; $('video-controls').hidden = mode !== 'video';
  $('earth').removeAttribute('hidden'); $('satellite').removeAttribute('hidden');
  $('movie').pause();
  $('scene-name').textContent = mode === 'video' ? '30 秒教學動畫 · 含字幕' : mode === 'gravity' ? '月球／衛星繞地球示意' : '水平面俯視示意';
  $('model-note').textContent = mode === 'gravity' ? '萬有引力提供繞行所需的向心力' : '箭頭表示方向；軌跡為示意';
  $('status').hidden = mode === 'video';
  reset();
}

document.querySelectorAll('[data-mode]').forEach((tab) => {
  tab.addEventListener('click', () => setMode(tab.dataset.mode));
  tab.addEventListener('keydown', (event) => {
    const tabs = [...document.querySelectorAll('[data-mode]')];
    let index = tabs.indexOf(tab);
    if (event.key === 'ArrowRight') index = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') index = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = tabs.length - 1;
    else return;
    event.preventDefault(); setMode(tabs[index].dataset.mode); tabs[index].focus();
  });
});
$('play').addEventListener('click', () => { running = !running; render(); });
$('reset').addEventListener('click', reset);
$('release-point').addEventListener('change', reset);
$('speed').addEventListener('input', () => { $('speed-value').value = `${Number($('speed').value)}×`; reset(); });
['show-speed','show-force'].forEach((id) => $(id).addEventListener('change', render));

document.querySelectorAll('[data-prediction]').forEach((button) => button.addEventListener('click', () => {
  prediction = button.dataset.prediction;
  document.querySelectorAll('[data-prediction]').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
  feedback('release-feedback', `已預測「${button.textContent}」，現在斷繩看看。`);
}));
$('release').addEventListener('click', () => {
  if (!prediction) { feedback('release-feedback', '請先選擇一個預測方向。', 'retry'); return; }
  releaseState = {x: cx + radius * Math.cos(theta), y: cy + radius * Math.sin(theta), ux: -Math.sin(theta), uy: Math.cos(theta)};
  released = true; running = true; flightTime = 0;
  const {x,y,ux,uy} = releaseState;
  $('tangent').setAttribute('d', `M${x-ux*80} ${y-uy*80}L${x+ux*1000} ${y+uy*1000}`);
  $('tangent').setAttribute('visibility', 'visible');
  $('release-origin').setAttribute('cx', x); $('release-origin').setAttribute('cy', y);
  $('release-origin').setAttribute('visibility', 'visible');
  $('flight-result').hidden = false;
  $('release').disabled = true; $('release-point').disabled = true; $('speed').disabled = true;
  document.querySelectorAll('[data-prediction]').forEach((button) => button.disabled = true);
  feedback('release-feedback', prediction === 'tangent' ? '答對了！向心力消失，小球因慣性沿當下切線直行。' : '觀察藍色軌跡：小球保持當下速度方向，沿切線直行。', prediction === 'tangent' ? 'correct' : 'retry');
  render();
});

const examples = ['水離開拖把時，沿當下的切線方向飛出。','水滴離開旋轉雨傘時，沿傘緣的切線方向飛出。','脫水槽旋轉時，水脫離衣服，達到脫水效果。'];
$('example').addEventListener('change', () => $('example-note').textContent = examples[$('example').selectedIndex]);
document.querySelectorAll('[data-object]').forEach((button) => button.addEventListener('click', () => {
  object = button.dataset.object;
  document.querySelectorAll('[data-object]').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
  const name = object === 'moon' ? '月球' : '人造衛星';
  $('gravity-explanation').innerHTML = `${name}繞地球所需的向心力，來自<strong class="force-text">地球對${name}的萬有引力</strong>。`;
  reset();
}));

for (const [id,correct,good,bad] of [
  ['orbit','yes','答對了！速度方向一直改變，所以即使速率固定，仍有加速度。','再看一次：速度包含大小和方向。方向改變，就有加速度。'],
  ['gravity','gravity','答對了！地球的萬有引力提供指向地心的向心力。','速度描述物體怎麼運動；改變方向的向心力來自萬有引力。']
]) {
  document.querySelectorAll(`#${id}-quiz button`).forEach((button) => button.addEventListener('click', () => {
    const ok = button.dataset.answer === correct;
    document.querySelectorAll(`#${id}-quiz button`).forEach((b) => b.className = '');
    button.className = ok ? 'correct' : 'retry'; feedback(`${id}-feedback`, ok ? good : bad, ok ? 'correct' : 'retry');
  }));
}
document.querySelectorAll('[data-seek]').forEach((button) => button.addEventListener('click', () => {
  $('movie').currentTime = Number(button.dataset.seek);
  $('movie').play().catch(() => {});
}));
$('fullscreen').addEventListener('click', async () => {
  if (document.fullscreenElement) { await document.exitFullscreen(); return; }
  try { await document.documentElement.requestFullscreen(); }
  catch { window.open(window.location.href, '_blank', 'noopener'); }
});
document.addEventListener('fullscreenchange', () => $('fullscreen').textContent = document.fullscreenElement ? '⛶ 離開全螢幕' : '⛶ 全螢幕');
document.addEventListener('visibilitychange', () => { if (document.hidden) { running = false; $('movie').pause(); render(); } lastTime = null; });

function tick(now) {
  const dt = lastTime === null ? 0 : Math.min((now-lastTime)/1000, .05);
  lastTime = now;
  if (running && mode !== 'video') {
    const elapsed = dt * Number($('speed').value);
    if (released) { flightTime += elapsed; if (flightTime >= 4.2) running = false; }
    else theta = (theta + elapsed * angularSpeed) % (2 * Math.PI);
    render();
  }
  requestAnimationFrame(tick);
}
setMode('orbit'); requestAnimationFrame(tick);

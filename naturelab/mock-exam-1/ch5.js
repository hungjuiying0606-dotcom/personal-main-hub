/* ============ 第 5 章　第 37～50 題 · 沉浮、溶解、元素與透鏡 ============
   對應題號：115一模 自然科 Q37, Q38, Q39, Q43, Q44, Q48, Q49, Q50
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#d97706';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 800}" fill="${o.c || '#172033'}">${SV.text(s)}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 8}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#dce3ee'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 5,
    title: '第 37～50 題 · 沉浮、溶解、元素與透鏡',
    color: C,
    sections: ['密度與沉浮條件', '繩波週期與運動', '飽和水溶液濃度', '鹼金屬性質與化學式', '光的折射與透鏡成像'],
    slides: [

      /* ---------- Slide 1: Q37 ---------- */
      {
        sec: '密度與沉浮條件', secName: '密度與沉浮條件',
        title: '【第 37 題】沉入水中密度必大於 1 · 密度小於 1 必上浮',
        points: [
          '純水密度為 \\(1\\text{ g/cm}^3\\)。',
          '<b>下沉條件</b>：物體密度 \\(D = \\frac{M}{V} > D_{\\text{水}} = 1\\text{ g/cm}^3\\)。',
          'A(1.25)、B(1.5)、D(1.22) 密度皆大於 1 必沉底。',
          'C: 質量 \\(20\\text{ g}\\)、體積 \\(27\\text{ cm}^3\\) \\(\\implies D = 0.74 < 1\\)（必浮起）。'
        ],
        formula: { label: '密度與沉浮判斷', tex: 'D = \\frac{M}{V} \\quad (D > 1\\text{ g/cm}^3 \\implies \\text{下沉}；D < 1\\text{ g/cm}^3 \\implies \\text{浮起})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q37"></div>
            <div class="ictrl"><label>檢驗物體：<span class="ival" id="obj_txt">物體 C (密度 0.74，浮起！)</span></label>
            <input type="range" id="q37_s" min="1" max="4" step="1" value="3"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(4, +(h.querySelector('#q37_s')?.value || 1)));
            const objs = [
              {},
              { name: '物體 A', m: 10, vol: 8, d: 1.25, sink: true },
              { name: '物體 B', m: 15, vol: 10, d: 1.50, sink: true },
              { name: '物體 C', m: 20, vol: 27, d: 0.74, sink: false },
              { name: '物體 D', m: 22, vol: 18, d: 1.22, sink: true }
            ];
            const cur = objs[v] || objs[1];
            h.querySelector('#obj_txt').textContent = `${cur.name} (密度 ${cur.d.toFixed(2)}，${cur.sink ? '沉底' : '浮起！★'})`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 水族箱輪廓
            s += BOX(30, 30, 210, 165, { fill: '#fff', stroke: '#64748b', sw: 2 });
            s += `<rect x="32" y="65" width="206" height="128" fill="rgba(37,99,235,0.15)"/>`;
            s += `<line x1="32" y1="65" x2="238" y2="65" stroke="${BLU}" stroke-width="2"/>`;
            s += TX(40, 55, '魚缸水面 (水密度 1.0 g/cm³)', { fs: 11, c: BLU });

            // 物體在水中的位置
            if (cur.sink) {
              s += BOX(115, 160, 40, 30, { fill: '#94a3b8', stroke: '#334155', sw: 2 });
              s += TX(135, 180, cur.name.slice(3), { fs: 12, c: '#fff', anchor: 'middle' });
              s += TX(135, 148, '沉入底部', { fs: 11, c: '#475569', anchor: 'middle' });
            } else {
              s += BOX(115, 52, 40, 30, { fill: AMB, stroke: RED, sw: 2.5 });
              s += TX(135, 72, cur.name.slice(3), { fs: 12, c: '#fff', anchor: 'middle' });
              s += TX(135, 40, '浮在水面！', { fs: 12, c: RED, anchor: 'middle' });
            }

            // 右側計算看板
            s += BOX(255, 25, 170, 180, { fill: '#fff', stroke: cur.sink ? GRN : RED, sw: 2 });
            s += TX(265, 52, `【${cur.name} 密度試算】`, { fs: 13, c: cur.sink ? GRN : RED });
            s += TX(265, 78, `• 質量 M ＝ ${cur.m} g`, { fs: 12, c: '#334155' });
            s += TX(265, 102, `• 體積 V ＝ ${cur.vol} cm³`, { fs: 12, c: '#334155' });
            s += TX(265, 128, `• 密度 D ＝ M/V`, { fs: 12, c: '#64748b' });
            s += TX(280, 150, `＝ ${cur.d.toFixed(2)} g/cm³`, { fs: 14, c: cur.sink ? GRN : RED });
            s += `<line x1="260" y1="160" x2="415" y2="160" stroke="#e2e8f0" stroke-width="1.5"/>`;
            s += TX(265, 182, cur.sink ? '✔ D > 1，會沉底' : '✘ D < 1，絕不沉底！', { fs: 12, c: cur.sink ? GRN : RED });
            h.querySelector('#fig_q37').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q37_s').oninput = draw; draw();
        },
        caption: '物體 C 密度 20/27 ≈ 0.74 小於水的密度 1，會浮在水面，不可能下沉至魚缸底部。',
        example: {
          q: '【115會考模擬 Q37】彬彬在魚缸放入裝飾物，已知密度大於液體時會下沉至底部。若放入魚缸的裝飾物皆會下沉，則其中「不可能」包括下列何者？<br>(A) 質量 10g，體積 8 cm³ 的小方塊<br>(B) 質量 15g，體積 10 cm³ 的小球<br>(C) 質量 20g，體積 27 cm³ 的小方塊<br>(D) 質量 22g，體積 18 cm³ 的小球',
          steps: [
            '水密度為 \\(1\\text{ g/cm}^3\\)。物體要在水中下沉，其密度必須大於水：\\(D = \\frac{M}{V} > 1\\)。',
            '計算各選項密度：',
            '(A) \\(10 / 8 = 1.25 > 1\\)（沉）；(B) \\(15 / 10 = 1.5 > 1\\)（沉）；(D) \\(22 / 18 \\approx 1.22 > 1\\)（沉）。',
            '(C) \\(20 / 27 \\approx 0.74 < 1\\)，密度小於水必浮在水面上，不可能下沉。'
          ],
          ans: '正解：(C)'
        }
      },

      /* ---------- Slide 2: Q38 ---------- */
      {
        sec: '繩波週期與運動', secName: '繩波週期與運動',
        title: '【第 38 題】繩波質點原地振動 · 經週期整數倍復原',
        points: [
          '波前進時，介質質點<b>只在原地上下振動</b>，不隨波遷移。',
          '振動週期 \\(T = 2\\text{ 秒}\\)，代表質點完成一次全振動需 \\(2\\text{ s}\\)。',
          'P 點位於波峰，每經過整數個週期 \\(nT\\)（2s、4s、6s...）回到波峰。',
          '經過奇數個半週期（1s、3s、5s）時，P 點將落在波谷。'
        ],
        formula: { label: '質點位置與時間關係', tex: 't = n \\times T = n \\times 2\\text{ 秒} \\quad (n = 1, 2, 3... \\implies t = 2, 4, 6...)' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q38"></div>
            <div class="ictrl"><label>經過時間 \\(t\\)：<span class="ival" id="t_val">4</span> 秒</label>
            <input type="range" id="q38_s" min="0" max="5" step="1" value="4"></div></div>`;
          const draw = () => {
            const t = +h.querySelector('#q38_s').value;
            h.querySelector('#t_val').textContent = t;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 平衡位置中線
            s += `<line x1="30" y1="100" x2="390" y2="100" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="1.5"/>`;
            // 繩波形狀（隨時間 t 震盪，相角 = t * PI）
            const phase = t * Math.PI;
            let dPath = 'M 30,100';
            for (let x = 30; x <= 390; x += 3) {
              const theta = ((x - 30) / 120) * 2 * Math.PI - phase;
              const y = 100 - 45 * Math.cos(theta);
              dPath += ` L ${x.toFixed(1)},${y.toFixed(1)}`;
            }
            s += `<path d="${dPath}" fill="none" stroke="${GRN}" stroke-width="3"/>`;
            // P 點目前位置 (x = 150 為第一個固定點)
            const pTheta = 0 - phase;
            const pY = 100 - 45 * Math.cos(pTheta);
            s += `<circle cx="150" cy="${pY.toFixed(1)}" r="6" fill="${RED}"/>`;
            s += TX(150, pY - 12, 'P 質點', { fs: 12, c: RED, anchor: 'middle' });
            // 質點振動軌跡垂直導線
            s += `<line x1="150" y1="45" x2="150" y2="155" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>`;

            // 狀態分析卡
            s += BOX(250, 125, 170, 85, { fill: '#fff', stroke: (t % 2 === 0) ? GRN : AMB, sw: 2 });
            s += TX(260, 148, `時間 t ＝ ${t} 秒分析：`, { fs: 12, c: '#334155' });
            if (t % 2 === 0) {
              s += TX(260, 172, `t ＝ ${t / 2} T (整數週期)`, { fs: 12, c: GRN });
              s += TX(260, 195, '✔ P 點回到波峰位置！', { fs: 12, c: GRN });
            } else {
              s += TX(260, 172, `t ＝ ${t} 秒 (半週期處)`, { fs: 12, c: AMB });
              s += TX(260, 195, '✘ P 點位於波谷最低處', { fs: 12, c: RED });
            }
            s += TX(35, 35, `波長 λ = 10 cm · 週期 T = 2 s`, { fs: 12, c: '#475569' });
            h.querySelector('#fig_q38').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q38_s').oninput = draw; draw();
        },
        caption: '週期 T＝2秒，每隔 2 秒質點完成一次全振動，經過 4 秒（2 個週期）P 點回到波峰。',
        example: {
          q: '【115會考模擬 Q38】規律振動一輕繩，週期為 2 秒，波長 10 cm、振幅 5 cm。某瞬間如圖，繩上 P 點位在波峰。若再經過 t 秒，P 點又會回到目前圖中的位置，則 t 可能為下列何者？<br>(A) 5  (B) 4  (C) 2.5  (D) 1',
          steps: [
            '繩波前進時，繩上質點 P 只在原地上下作簡諧振動。',
            '週期 \\(T = 2\\text{ 秒}\\)，代表質點從波峰出發，歷經波谷再回到波峰恰好需要 \\(2\\text{ 秒}\\)。',
            '因此質點回到原波峰位置的時間必須是週期的整數倍：\\(t = nT = 2n\\) 秒（2s、4s、6s...）。',
            '選項中只有 4 秒為 2 的整數倍（\\(n = 2\\)），故選 (B)。'
          ],
          ans: '正解：(B)'
        }
      },

      /* ---------- Slide 3: Q39 ---------- */
      {
        sec: '飽和水溶液濃度', secName: '飽和水溶液濃度',
        title: '【第 39 題】同溫飽和溶液濃度相等 · 水多溶質多',
        points: [
          '甲、乙燒杯底部均有未溶沉澱，代表皆為<b>飽和溶液</b>。',
          '定溫下（20℃），同種溶質之飽和溶液<b>濃度必定相等</b>。',
          '溶解質量 ＝ 水量 \\(\\times\\) 溶解度，水量越大溶解越多。',
          '乙杯水量多於甲杯，故溶解之溶質質量：<b>甲 ＜ 乙</b>。'
        ],
        formula: { label: '飽和溶液濃度關係', tex: 'P\\%_{\\text{飽和}} = \\frac{S}{100 + S} \\times 100\\% \\quad (\\text{同溫度下為定值})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q39"></div>
            <div class="ictrl"><label>檢視燒杯：<span class="ival" id="bk_name">甲杯 vs 乙杯對照</span></label>
            <input type="range" id="q39_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q39_s').value;
            h.querySelector('#bk_name').textContent = mode === 0 ? '甲杯 vs 乙杯 (同時對照)' : '濃度相等核心原理';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 甲燒杯 (水少，沉澱 5g)
            s += BOX(35, 40, 100, 120, { fill: '#fff', stroke: '#64748b', sw: 2 });
            s += `<rect x="37" y="90" width="96" height="68" fill="rgba(37,99,235,0.2)"/>`;
            s += `<ellipse cx="85" cy="155" rx="35" ry="5" fill="#475569"/>`;
            s += TX(85, 30, '甲杯 (水少)', { fs: 12, c: '#1e293b', anchor: 'middle' });
            s += TX(85, 115, '20℃ 飽和', { fs: 11, c: BLU, anchor: 'middle' });
            s += TX(85, 175, '沉澱 5g', { fs: 11, c: RED, anchor: 'middle' });

            // 乙燒杯 (水多，沉澱 10g)
            s += BOX(165, 40, 100, 120, { fill: '#fff', stroke: '#64748b', sw: 2 });
            s += `<rect x="167" y="60" width="96" height="98" fill="rgba(37,99,235,0.2)"/>`;
            s += `<ellipse cx="215" cy="155" rx="38" ry="7" fill="#475569"/>`;
            s += TX(215, 30, '乙杯 (水多)', { fs: 12, c: '#1e293b', anchor: 'middle' });
            s += TX(215, 95, '20℃ 飽和', { fs: 11, c: BLU, anchor: 'middle' });
            s += TX(215, 175, '沉澱 10g', { fs: 11, c: RED, anchor: 'middle' });

            // 右側判定結論卡
            s += BOX(285, 25, 140, 180, { fill: '#fff', stroke: GRN, sw: 2 });
            s += TX(295, 52, '【關鍵結論】', { fs: 14, c: GRN });
            s += TX(295, 80, '① 濃度比較：', { fs: 12, c: '#334155' });
            s += TX(310, 102, '濃度甲 ＝ 乙', { fs: 14, c: BLU });
            s += TX(295, 130, '② 溶解量比較：', { fs: 12, c: '#334155' });
            s += TX(310, 152, '溶解量甲 ＜ 乙', { fs: 14, c: RED });
            s += TX(295, 185, '同溫飽和度固定！', { fs: 11, c: '#64748b' });
            h.querySelector('#fig_q39').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q39_s').oninput = draw; draw();
        },
        caption: '兩杯皆有沉澱表示皆為 20℃ 飽和溶液，濃度甲＝乙；乙杯水多溶解溶質量甲＜乙。',
        example: {
          q: '【115會考模擬 Q39】甲乙兩燒杯分別裝入不等量水及不同質量 A 物質，同在 20℃ 攪拌：甲杯沉澱 5g，乙杯沉澱 10g。下列關於兩杯溶液的敘述何者正確？<br>(A) 溶解量甲＞乙，濃度甲＞乙<br>(B) 溶解量甲＞乙，濃度甲＝乙<br>(C) 溶解量甲＜乙，濃度甲＜乙<br>(D) 溶解量甲＜乙，濃度甲＝乙',
          steps: [
            '兩燒杯底部皆有未溶解的 A 物質沉澱，證明在 20℃ 下兩者皆達到「飽和狀態」。',
            '同溫下同一溶質的溶解度固定，飽和溶液的重量百分率濃度必定相等，故「濃度甲 ＝ 乙」。',
            '由題圖可知乙杯的水量明顯多於甲杯，水量越多能溶解的 A 物質越多，故「溶解量甲 ＜ 乙」。'
          ],
          ans: '正解：(D)'
        }
      },

      /* ---------- Slide 4: Q43 ---------- */
      {
        sec: '鹼金屬性質與化學式', secName: '鹼金屬性質與化學式',
        title: '【第 43 題】鹼金屬性質：金屬光澤 · 良好導電 · 浮水反應',
        points: [
          '元素 X 為<b>銀白色固體</b>，與水反應劇烈且呈鹼性 \\(\\implies\\) <b>鹼金屬</b>。',
          '金屬通性：新切面具金屬光澤、良好<b>導電導熱性</b>、富延展性。',
          '絕不可能具備的性質：<b>「是電的不良導體」</b>（金屬必為良導體）。',
          '鋰、鈉、鉀密度小於水，放入水中浮於水面並產生氫氣反應。'
        ],
        formula: { label: '鹼金屬與水反應式', tex: '2X + 2\\text{H}_2\\text{O} \\to 2X\\text{OH} (\\text{強鹼性}) + \\text{H}_2\\uparrow (\\text{放熱甚至燃燒})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q43"></div>
            <div class="ictrl"><label>檢驗 X 性質：<span class="ival" id="prop_txt">導電性 (自由電子，良好導體)</span></label>
            <input type="range" id="q43_s" min="1" max="4" step="1" value="2"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(4, +h.querySelector('#q43_s').value || 2));
            const pList = [
              {},
              { name: '易輾成薄片 (延展性)', valid: true, desc: '金屬鍵可滑動，質軟易延展', c: GRN },
              { name: '是電的不良導體 (錯誤！★)', valid: false, desc: '金屬含自由電子，必為電的良導體！', c: RED },
              { name: '放入水中浮於水面 (密度小)', valid: true, desc: '鈉密度 0.97 g/cm³ < 1，會浮在水上', c: GRN },
              { name: '新切面具金屬光澤 (光澤性)', valid: true, desc: '銀白色金屬外觀，在空氣中速氧化', c: GRN }
            ];
            const cur = pList[v] || pList[2];
            h.querySelector('#prop_txt').textContent = `${cur.name}`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 水槽中反應示意
            s += BOX(30, 30, 180, 160, { fill: '#fff', stroke: '#64748b', sw: 2 });
            s += `<rect x="32" y="80" width="176" height="108" fill="rgba(244,63,94,0.15)"/>`;
            s += `<line x1="32" y1="80" x2="208" y2="80" stroke="${BLU}" stroke-width="2"/>`;
            s += TX(40, 70, '酚酞水溶液 (呈紅色鹼性)', { fs: 10, c: RED });

            // 鈉粒浮在水面劇烈冒泡 (x = 120, y = 78)
            s += `<circle cx="120" cy="78" r="8" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>`;
            s += TX(120, 62, '元素 X', { fs: 10, c: '#1e293b', anchor: 'middle' });
            // 氫氣泡泡
            s += `<circle cx="110" cy="90" r="3" fill="#93c5fd"/>`;
            s += `<circle cx="130" cy="95" r="4" fill="#93c5fd"/>`;
            s += `<circle cx="120" cy="110" r="5" fill="#93c5fd"/>`;
            s += TX(120, 130, '生成 H₂ 氣泡', { fs: 10, c: BLU, anchor: 'middle' });

            // 右側性質檢核清單
            s += BOX(225, 25, 190, 180, { fill: '#fff', stroke: cur.valid ? GRN : RED, sw: 2 });
            s += TX(235, 50, '【性質合理性判定】', { fs: 13, c: cur.valid ? GRN : RED });
            s += TX(235, 75, `選項：${cur.name.slice(0, 7)}`, { fs: 11, c: '#334155' });
            s += TX(235, 100, `• 判定：${cur.valid ? '✔ 具有之性質' : '✘ 較不可能具備！'}`, { fs: 12, c: cur.valid ? GRN : RED });
            s += TX(235, 125, '• 原理解析：', { fs: 11, c: '#64748b' });
            s += TX(245, 145, cur.desc, { fs: 10, c: cur.valid ? '#334155' : RED });
            s += `<line x1="230" y1="165" x2="410" y2="165" stroke="#e2e8f0" stroke-width="1.5"/>`;
            s += TX(235, 188, '本題問「較不可能」\\(\\to\\) 選 (B)', { fs: 11, c: RED });
            h.querySelector('#fig_q43').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q43_s').oninput = draw; draw();
        },
        caption: '元素 X 為鹼金屬（如鈉、鉀），身為金屬必定具有良好的導電導熱性，絕非電的不良導體。',
        example: {
          q: '【115會考模擬 Q43】元素 X 常溫下為銀白色固體，放入水中劇烈反應，水溶液呈鹼性。根據上述內容，元素 X 應「較不可能」具有下列何種性質？<br>(A) 容易輾成薄片<br>(B) 是電的不良導體<br>(C) 放入水中可能上浮<br>(D) 新切面具有金屬光澤',
          steps: [
            '銀白色固體且與水劇烈反應產生鹼性溶液（氫氧化物），為典型的「鹼金屬」（如鋰、鈉、鉀）。',
            '鹼金屬屬於金屬元素，金屬內部具有自由移動的價電子，為「電與熱的良導體」。',
            '因此元素 X「較不可能」是電的不良導體，(B) 為不可能具備之性質。',
            '鹼金屬質軟易延展（A）、密度小於水可上浮（C）、新切面具金屬光澤（D）皆為其真實特性。'
          ],
          ans: '正解：(B)'
        }
      },

      /* ---------- Slide 5: Q44 ---------- */
      {
        sec: '鹼金屬性質與化學式', secName: '鹼金屬性質與化學式',
        title: '【第 44 題】固定熔點為純物質 · 原子比 2:1 化學式 X₂O',
        points: [
          '物質 Y 具有<b>固定熔點</b>，必為<b>純物質</b>（非混合物）。',
          'Y 由元素 X 與氧氣化合而成，屬於純物質中的<b>化合物</b>。',
          '分析指出 X 原子與氧原子數目比為 \\(2 : 1\\)。',
          '化學式中右下角下標表示原子個數比，正確書寫為 <b>\\(X_2O\\)</b>。'
        ],
        formula: { label: '化合物組成化學式', tex: 'X : O = 2 : 1 \\implies \\text{化學式為 } X_2O \\quad (\\text{如 } \\text{Na}_2\\text{O, K}_2\\text{O})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q44"></div>
            <div class="ictrl"><label>化學式檢視：<span class="ival" id="chem_txt">純物質化合物 \\(X_2O\\)</span></label>
            <input type="range" id="q44_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q44_s').value;
            h.querySelector('#chem_txt').textContent = mode === 0 ? '原子個數比 2:1 模型' : '純物質 vs 混合物判定標準';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            if (mode === 0) {
              // 分子球棍模型示意 (X - O - X)
              s += BOX(30, 30, 185, 160, { fill: '#fff', stroke: AMB, sw: 2 });
              s += TX(122, 55, '化合物 Y 微觀組成', { fs: 12, c: AMB, anchor: 'middle' });

              // 氧原子 (中心紅色大球)
              s += `<circle cx="122" cy="110" r="22" fill="${RED}" stroke="#334155" stroke-width="2"/>`;
              s += TX(122, 115, 'O', { fs: 14, c: '#fff', anchor: 'middle' });

              // X 原子 1 (左側銀灰色球)
              s += `<line x1="122" y1="110" x2="68" y2="125" stroke="#94a3b8" stroke-width="4"/>`;
              s += `<circle cx="68" cy="125" r="16" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>`;
              s += TX(68, 130, 'X', { fs: 12, c: '#1e293b', anchor: 'middle' });

              // X 原子 2 (右側銀灰色球)
              s += `<line x1="122" y1="110" x2="176" y2="125" stroke="#94a3b8" stroke-width="4"/>`;
              s += `<circle cx="176" cy="125" r="16" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>`;
              s += TX(176, 130, 'X', { fs: 12, c: '#1e293b', anchor: 'middle' });

              s += TX(122, 175, '原子數目比 X : O ＝ 2 : 1', { fs: 11, c: '#475569', anchor: 'middle' });

              // 右側化學式規範
              s += BOX(230, 25, 185, 180, { fill: '#fff', stroke: GRN, sw: 2 });
              s += TX(240, 50, '【化學式書寫規範】', { fs: 13, c: GRN });
              s += TX(240, 75, '• 下標表示個數比：', { fs: 11, c: '#334155' });
              s += TX(255, 98, '正確寫法：\\(X_2O\\) ✔', { fs: 14, c: GRN });
              s += TX(240, 125, '• 錯誤寫法剖析：', { fs: 11, c: '#64748b' });
              s += TX(255, 145, '2XO \\(\\implies\\) 代表 2 個 XO 分子', { fs: 10, c: RED });
              s += TX(255, 165, '\\(XO_2 \\implies\\) 原子比 1:2', { fs: 10, c: RED });
              s += TX(240, 190, '故化學式必為 \\(X_2O\\)', { fs: 12, c: BLU });
            } else {
              s += BOX(25, 25, 185, 175, { fill: '#fff', stroke: GRN, sw: 1.8 });
              s += TX(35, 50, '【純物質判定】', { fs: 13, c: GRN });
              s += TX(35, 75, '• 具有「固定熔點/沸點」', { fs: 11, c: GRN });
              s += TX(35, 98, '• 組成比例固定不變', { fs: 11, c: '#334155' });
              s += TX(35, 122, '• 包含元素與化合物', { fs: 11, c: '#334155' });
              s += TX(35, 148, '物質 Y 具固定熔點 \\(\\to\\)', { fs: 11, c: '#334155' });
              s += TX(35, 170, 'Y 必為「純物質 (化合物)」', { fs: 12, c: GRN });

              s += BOX(225, 25, 185, 175, { fill: '#fff', stroke: RED, sw: 1.8 });
              s += TX(235, 50, '【混合物辨別】', { fs: 13, c: RED });
              s += TX(235, 75, '• 「無」固定熔點/沸點', { fs: 11, c: RED });
              s += TX(235, 98, '• 組成比例隨意混合', { fs: 11, c: '#334155' });
              s += TX(235, 122, '• 如食鹽水、空氣、合金', { fs: 11, c: '#64748b' });
              s += TX(235, 155, '選項 (D) 稱混合物 \\(\\to\\) 錯！', { fs: 11, c: RED });
              s += TX(235, 180, '故正解為 (C) ✔', { fs: 13, c: GRN });
            }
            h.querySelector('#fig_q44').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q44_s').oninput = draw; draw();
        },
        caption: '物質 Y 有固定熔點為純物質（化合物），且 X 與 O 原子數比為 2:1，化學式為 X₂O。',
        example: {
          q: '【115會考模擬 Q44】小華取元素 X 與氧氣反應得到新物質 Y，Y 在常溫下為固體且「有固定熔點」，分析得知 Y 中的 X 原子與氧原子數目比為 2：1。下列關於 Y 的說明何者正確？<br>(A) Y 為純物質，化學式為 2XO<br>(B) Y 為化合物，化學式為 \\(XO_2\\)<br>(C) Y 為純物質，化學式為 \\(X_2O\\)<br>(D) Y 為混合物，化學式為 \\(X_2O\\)',
          steps: [
            '「有固定的熔點」是純物質的重要物理特性，混合物無固定熔沸點，故 Y 必為純物質。',
            '由兩種以上元素化合而成的純物質屬於化合物。',
            'X 原子與氧原子個數比為 \\(2 : 1\\)，在化合物化學式中，原子個數比標註於元素符號右下角，即 \\(X_2O\\)。',
            '選項 (A) 的 2 寫在係數代表兩個分子的計數，非分子內部結構；故正確選項為 (C)。'
          ],
          ans: '正解：(C)'
        }
      },

      /* ---------- Slide 6: Q48 ---------- */
      {
        sec: '光的折射與透鏡成像', secName: '光的折射與透鏡成像',
        title: '【第 48 題】光的折射成因：光在不同介質中速率不同',
        points: [
          '折射本質：光在<b>空氣與玻璃傳播速率不同</b>導致前進方向偏折。',
          '光速大小：真空中 \\(3\\times 10^8\\text{ m/s}\\) ＞ 空氣 ＞ 玻璃（約 \\(2\\times 10^8\\text{ m/s}\\)）。',
          '凸透鏡中央厚、邊緣薄，平行主軸光線折射後向內偏折。',
          '太陽光為平行光，折射後<b>會聚於焦點</b>，其距離即為焦距。'
        ],
        formula: { label: '折射率與光速關係', tex: 'n = \\frac{c}{v} \\quad (v_{\\text{空氣}} > v_{\\text{玻璃}} \\implies \\text{光線偏向法線})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q48"></div>
            <div class="ictrl"><label>檢視波前偏折：<span class="ival" id="ref_txt">介質光速差異示意</span></label>
            <input type="range" id="q48_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q48_s').value;
            h.querySelector('#ref_txt').textContent = mode === 0 ? '陽光凸透鏡聚光於焦點' : '光速差異導致波前偏折';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 主軸
            s += `<line x1="20" y1="110" x2="400" y2="110" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="1.5"/>`;
            // 凸透鏡輪廓 (位於 x = 200)
            s += `<ellipse cx="200" cy="110" rx="14" ry="75" fill="rgba(56,189,248,0.3)" stroke="${BLU}" stroke-width="2"/>`;
            s += TX(200, 30, '凸透鏡 (玻璃)', { fs: 12, c: BLU, anchor: 'middle' });

            // 太陽平行光線射入
            const rays = [50, 75, 110, 145, 170];
            rays.forEach(y => {
              s += `<line x1="40" y1="${y}" x2="195" y2="${y}" stroke="${AMB}" stroke-width="2"/>`;
            });
            s += TX(80, 45, '平行太陽光 (空氣中較快)', { fs: 11, c: AMB });

            // 折射後會聚至焦點 F (x = 320, y = 110)
            const fX = 320, fY = 110;
            rays.forEach(y => {
              s += `<line x1="205" y1="${y}" x2="${fX}" y2="${fY}" stroke="${AMB}" stroke-width="2"/>`;
            });
            s += `<circle cx="${fX}" cy="${fY}" r="5" fill="${RED}"/>`;
            s += TX(fX, 130, '焦點 F', { fs: 12, c: RED, anchor: 'middle' });
            s += TX(fX, 148, '(紙屏光斑)', { fs: 10, c: '#475569', anchor: 'middle' });

            // 焦距 f 標註
            s += `<line x1="200" y1="185" x2="${fX}" y2="185" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="200" y1="180" x2="200" y2="190" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="${fX}" y1="180" x2="${fX}" y2="190" stroke="#334155" stroke-width="1.5"/>`;
            s += TX(260, 180, '焦距 f ＝ 12 cm', { fs: 11, c: '#334155', anchor: 'middle' });

            // 右上方核心結論標籤
            s += BOX(250, 40, 160, 50, { fill: '#fff', stroke: RED, sw: 1.8 });
            s += TX(260, 60, '折射核心成因：', { fs: 12, c: RED });
            s += TX(260, 78, '空氣與玻璃光速不同！', { fs: 11, c: '#1e293b' });
            h.querySelector('#fig_q48').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q48_s').oninput = draw; draw();
        },
        caption: '光在不同介質中傳播速率不同產生折射；凸透鏡將平行陽光會聚於焦點以量測焦距。',
        example: {
          q: '【115會考模擬 Q48】小文將凸透鏡朝向太陽，陽光經凸透鏡在紙屏會聚成一點，稱為焦點，以此測量焦距。關於陽光會聚於一點的原因，主要與下列何者有關？<br>(A) 光在玻璃與空氣中的光速不同<br>(B) 太陽光每秒可前進 30 萬公里<br>(C) 陽光照射到透鏡會發生反射<br>(D) 太陽光可以在真空中傳播',
          steps: [
            '光線在同種均勻介質中直線傳播，但進入不同介質界面時會發生偏折，稱為「折射」。',
            '折射現象的物理根源在於：光在不同介質中的「傳播速率不同」。',
            '光在空氣中傳播速度較快，在玻璃中較慢，光波波前偏折使凸透鏡具有會聚光線的效果。',
            '因此會聚成焦點主要與光在玻璃與空氣中光速不同有關，正解為 (A)。'
          ],
          ans: '正解：(A)'
        }
      },

      /* ---------- Slide 7: Q49 ---------- */
      {
        sec: '光的折射與透鏡成像', secName: '光的折射與透鏡成像',
        title: '【第 49 題】物在兩倍焦距外 · 像在一至兩倍焦距（丁區）',
        points: [
          '焦距 \\(f = 12\\text{ cm}\\)，兩倍焦距 \\(2f = 24\\text{ cm}\\)。',
          '蠟燭位在兩倍焦距外（甲區左側）：物距 \\(p > 24\\text{ cm}\\)。',
          '成像位置：另一側 \\(1f \\sim 2f\\) 之間（丁區，\\(12\\sim 24\\text{ cm}\\)）。',
          '成像性質：<b>倒立、縮小、實像</b>，可在紙屏上清晰呈現。'
        ],
        formula: { label: '凸透鏡成像公式', tex: '\\frac{1}{p} + \\frac{1}{q} = \\frac{1}{f} \\quad (p > 2f \\implies f < q < 2f)' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q49"></div>
            <div class="ictrl"><label>物距 \\(p\\)：<span class="ival" id="p_val">30</span> cm (兩倍焦距外)</label>
            <input type="range" id="q49_s" min="26" max="36" step="2" value="30"></div></div>`;
          const draw = () => {
            const p = +h.querySelector('#q49_s').value;
            h.querySelector('#p_val').textContent = p;
            const f = 12;
            const q = (1 / (1 / f - 1 / p)).toFixed(1);
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 主軸
            s += `<line x1="20" y1="100" x2="410" y2="100" stroke="#94a3b8" stroke-dasharray="3 3" stroke-width="1.5"/>`;
            // 透鏡 (固定在 x = 200)
            const lX = 200;
            s += `<ellipse cx="${lX}" cy="100" rx="10" ry="70" fill="rgba(124,58,237,0.2)" stroke="${VIO}" stroke-width="2"/>`;
            s += TX(lX, 25, '凸透鏡', { fs: 11, c: VIO, anchor: 'middle' });

            // 區域劃分標籤 (各 12 cm = 45 px)
            const sc = 3.75;
            // 左側：乙區 (0~12cm, 200~155), 甲區 (12~24cm, 155~110)
            s += BOX(155, 145, 45, 20, { fill: '#e2e8f0', stroke: '#94a3b8' });
            s += TX(177, 160, '乙區', { fs: 10, c: '#475569', anchor: 'middle' });
            s += BOX(110, 145, 45, 20, { fill: '#e2e8f0', stroke: '#94a3b8' });
            s += TX(132, 160, '甲區', { fs: 10, c: '#475569', anchor: 'middle' });
            s += TX(75, 160, '>2f區', { fs: 10, c: RED, anchor: 'middle' });

            // 右側：丙區 (0~12cm, 200~245), 丁區 (12~24cm, 245~290), 戊區 (>24cm, >290)
            s += BOX(200, 145, 45, 20, { fill: '#e2e8f0', stroke: '#94a3b8' });
            s += TX(222, 160, '丙區', { fs: 10, c: '#475569', anchor: 'middle' });
            s += BOX(245, 145, 45, 20, { fill: 'rgba(5,150,105,0.25)', stroke: GRN, sw: 2 });
            s += TX(267, 160, '丁區★', { fs: 11, c: GRN, anchor: 'middle' });
            s += BOX(290, 145, 45, 20, { fill: '#e2e8f0', stroke: '#94a3b8' });
            s += TX(312, 160, '戊區', { fs: 10, c: '#475569', anchor: 'middle' });

            // 蠟燭位置 (x = lX - p*sc)
            const cX = lX - p * sc;
            s += `<line x1="${cX}" y1="100" x2="${cX}" y2="60" stroke="${AMB}" stroke-width="3"/>`;
            s += `<circle cx="${cX}" cy="56" r="4" fill="${RED}"/>`;
            s += TX(cX, 48, '蠟燭', { fs: 10, c: AMB, anchor: 'middle' });

            // 成像位置 (x = lX + q*sc)
            const iX = lX + (+q) * sc;
            const iH = (40 * (+q) / p);
            s += `<line x1="${iX}" y1="100" x2="${iX}" y2="${100 + iH}" stroke="${GRN}" stroke-width="2.5"/>`;
            s += `<circle cx="${iX}" cy="${100 + iH}" r="3" fill="${RED}"/>`;
            s += TX(iX, 100 + iH + 14, '倒立縮小像', { fs: 10, c: GRN, anchor: 'middle' });

            // 紙屏位置
            s += BOX(iX - 4, 45, 8, 85, { fill: '#fff', stroke: '#334155', sw: 1.5 });
            s += TX(iX, 40, '紙屏', { fs: 10, c: '#334155', anchor: 'middle' });

            // 三條主要光線
            s += `<line x1="${cX}" y1="56" x2="${lX}" y2="56" stroke="${AMB}" stroke-width="1.2"/>`;
            s += `<line x1="${lX}" y1="56" x2="${iX}" y2="${100 + iH}" stroke="${AMB}" stroke-width="1.2"/>`;
            s += `<line x1="${cX}" y1="56" x2="${iX}" y2="${100 + iH}" stroke="${VIO}" stroke-width="1.2"/>`;

            // 狀態浮條
            s += BOX(20, 175, 395, 30, { fill: '#fff', stroke: GRN, sw: 1.5 });
            s += TX(30, 195, `物距 p ＝ ${p}cm (>2f) \\(\\implies\\) 像距 q ＝ ${q}cm (落於 12~24cm 丁區，倒立實像)`, { fs: 11, c: GRN });
            h.querySelector('#fig_q49').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q49_s').oninput = draw; draw();
        },
        caption: '物距在兩倍焦距外時，清晰實像必定落在另一側一倍至兩倍焦距之間（丁區）。',
        example: {
          q: '【115會考模擬 Q49】凸透鏡焦距為 12 cm，點燃之蠟燭置於甲區左側（兩倍焦距外）。移動紙屏，觀察紙屏上是否可找到清晰成像，其操作結果為何？<br>(A) 清晰成像在丙區<br>(B) 清晰成像在丁區<br>(C) 清晰成像在戊區<br>(D) 均無法在紙屏找到成像',
          steps: [
            '凸透鏡焦距 \\(f = 12\\text{ cm}\\)，兩倍焦距 \\(2f = 24\\text{ cm}\\)。',
            '蠟燭放在甲區左側，物距大於兩倍焦距（\\(p > 2f\\)）。',
            '根據凸透鏡成像規律，此時像距落在另一側的一倍至兩倍焦距之間（\\(f < q < 2f\\)）。',
            '對應圖(二十三)右側區域：\\(12\\sim 24\\text{ cm}\\) 恰為「丁區」，形成倒立縮小實像，故選 (B)。'
          ],
          ans: '正解：(B)'
        }
      },

      /* ---------- Slide 8: Q50 ---------- */
      {
        sec: '光的折射與透鏡成像', secName: '光的折射與透鏡成像',
        title: '【第 50 題】焦距內成正立放大虛像 · 凹透鏡必成縮小虛像',
        points: [
          '蠟燭移至<b>乙區</b>（\\(p < 12\\text{ cm}\\)）：位於一倍焦距內。',
          '凸透鏡在焦距內之成像：<b>正立、放大、虛像</b>。',
          '紙屏<b>無法承接虛像</b>，需從透鏡另一側肉眼觀察。',
          '凹透鏡折射光發散，無論物距皆成<b>正立、縮小、虛像</b>。'
        ],
        formula: { label: '虛像特性比較', tex: '\\text{凸透鏡 (} p < f \\text{)：正立放大虛像} \\quad \\text{vs} \\quad \\text{凹透鏡 (任意 } p \\text{)：正立縮小虛像}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q50"></div>
            <div class="ictrl"><label>成像對照：<span class="ival" id="img_mode">凸透鏡焦距內 (放大虛像)</span></label>
            <input type="range" id="q50_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q50_s').value;
            h.querySelector('#img_mode').textContent = mode === 0 ? '凸透鏡焦距內 (乙區，放大虛像)' : '凹透鏡 (縮小虛像) 與針孔實像對比';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            if (mode === 0) {
              // 凸透鏡虛像光路
              s += `<line x1="20" y1="110" x2="390" y2="110" stroke="#94a3b8" stroke-dasharray="3 3" stroke-width="1.5"/>`;
              const lX = 220;
              s += `<ellipse cx="${lX}" cy="110" rx="10" ry="65" fill="rgba(124,58,237,0.2)" stroke="${VIO}" stroke-width="2"/>`;
              s += TX(lX, 35, '凸透鏡', { fs: 11, c: VIO, anchor: 'middle' });

              // 焦點 F (x = 220 - 60 = 160)
              s += `<circle cx="160" cy="110" r="3" fill="#64748b"/>`;
              s += TX(160, 125, 'F (12cm)', { fs: 10, c: '#64748b', anchor: 'middle' });

              // 蠟燭在乙區 (x = 190, p = 6cm < f)
              s += `<line x1="190" y1="110" x2="190" y2="75" stroke="${AMB}" stroke-width="3"/>`;
              s += `<circle cx="190" cy="72" r="3.5" fill="${RED}"/>`;
              s += TX(190, 64, '物', { fs: 10, c: AMB, anchor: 'middle' });

              // 折射後發散光線
              s += `<line x1="220" y1="75" x2="360" y2="120" stroke="${AMB}" stroke-width="1.5"/>`;
              s += `<line x1="220" y1="75" x2="130" y2="40" stroke="${RED}" stroke-width="1.5" stroke-dasharray="3 3"/>`;

              // 放大虛像 (x = 130)
              s += `<line x1="130" y1="110" x2="130" y2="40" stroke="${RED}" stroke-width="2.5" stroke-dasharray="3 3"/>`;
              s += `<circle cx="130" cy="40" r="4" fill="${RED}"/>`;
              s += TX(130, 30, '正立放大虛像', { fs: 11, c: RED, anchor: 'middle' });

              // 觀察眼睛
              s += TX(340, 95, '👁 眼睛由右向左看', { fs: 11, c: BLU });

              // 結論小框
              s += BOX(250, 130, 160, 65, { fill: '#fff', stroke: RED, sw: 1.5 });
              s += TX(260, 150, '物在焦距內 (乙區)：', { fs: 11, c: RED });
              s += TX(260, 170, '成「正立放大虛像」', { fs: 12, c: RED });
              s += TX(260, 187, '紙屏無法成像！', { fs: 10, c: '#64748b' });
            } else {
              // 比較圖卡
              s += BOX(25, 25, 185, 175, { fill: '#fff', stroke: VIO, sw: 1.8 });
              s += TX(35, 50, '【凸透鏡 · 乙區】', { fs: 13, c: VIO });
              s += TX(35, 75, '• 成像性質：正立放大虛像', { fs: 11, c: '#334155' });
              s += TX(35, 100, '• 能否在紙屏呈現：不能', { fs: 11, c: RED });
              s += TX(35, 125, '• 觀察方式：眼貼透鏡看', { fs: 11, c: '#334155' });
              s += TX(35, 150, '• 實例：放大鏡', { fs: 11, c: GRN });

              s += BOX(225, 25, 185, 175, { fill: '#fff', stroke: GRN, sw: 1.8 });
              s += TX(235, 50, '【凹透鏡 vs 針孔】', { fs: 13, c: GRN });
              s += TX(235, 75, '• 凹透鏡：恆成正立縮小虛像', { fs: 11, c: GRN });
              s += TX(235, 100, '• 與凸透鏡乙區同為「虛像」', { fs: 11, c: RED });
              s += TX(235, 125, '• 針孔成像：光直線傳播', { fs: 11, c: '#334155' });
              s += TX(235, 150, '• 針孔成「倒立實像」', { fs: 11, c: '#64748b' });
              s += TX(235, 180, '故本題選 (D)', { fs: 13, c: RED });
            }
            h.querySelector('#fig_q50').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q50_s').oninput = draw; draw();
        },
        caption: '凸透鏡物在焦距內成正立放大虛像；凹透鏡恆成正立縮小虛像，兩者皆為虛像。',
        example: {
          q: '【115會考模擬 Q50】若小文將蠟燭移至圖中乙區（焦距內），關於此時他會觀察到的成像，下列敘述何者正確？<br>(A) 和燭焰光線經針孔所成的像一樣是實像<br>(B) 和燭焰光線經針孔所成的像一樣是虛像<br>(C) 和燭焰光線經凹透鏡所成的像一樣是實像<br>(D) 和燭焰光線經凹透鏡所成的像一樣是虛像',
          steps: [
            '乙區位於透鏡與焦點之間（\\(p < f = 12\\text{ cm}\\)），此時折射光線發散，反向延長交會成「正立放大虛像」。',
            '針孔成像係利用光直線傳播原理，上下左右顛倒，在後方紙屏成「倒立實像」。',
            '凹透鏡會使平行光線發散，無論物距多遠，恆成「正立縮小虛像」。',
            '比較兩者：凸透鏡乙區成像與凹透鏡所成之像「一樣都是虛像」，正解為 (D)。'
          ],
          ans: '正解：(D)'
        }
      }

    ]
  });
})();

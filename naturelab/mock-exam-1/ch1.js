/* ============ 第 1 章　第 05～08 題 · 基本測量與熱對流 ============
   對應題號：115一模 自然科 Q05, Q06, Q07, Q08
   範圍：國中理化（八上）實驗器材配製、刻度尺估計、乾燥空氣比例、液體熱對流
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#2563eb';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 800}" fill="${o.c || '#172033'}">${SV.text(s)}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 8}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#dce3ee'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 1,
    title: '第 05～08 題 · 基本測量與熱對流',
    color: C,
    sections: ['基本測量與工具', '空氣組成與性質', '熱傳播與對流'],
    slides: [

      /* ---------- Slide 1: Q05 生理食鹽水配製與實驗器材 ---------- */
      {
        sec: '基本測量與工具', secName: '基本測量與工具',
        title: '【第 05 題】生理食鹽水配製：量筒量水 · 天平秤鹽',
        points: [
          '\\(0.9\\%\\) 生理食鹽水：\\(1000\\text{ mL}\\) 水加入 \\(9\\text{ g}\\) 食鹽。',
          '<b>量筒</b>（甲）專用於快速量取液體體積。',
          '<b>上皿天平</b>（丁）專用於精確秤量固體藥品。',
          '薊頭漏斗（乙）為氣體裝置；錐形瓶（丙）為盛液容器。'
        ],
        formula: { label: '重量百分率濃度', tex: 'P\\% = \\frac{\\text{溶質質量 (g)}}{\\text{溶液總質量 (g)}} \\times 100\\%' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q5"></div>
            <div class="ictrl"><label>選擇檢視儀器：<span class="ival" id="app_name">甲 量筒</span></label>
            <input type="range" id="q5_s" min="1" max="4" step="1" value="1"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(4, +h.querySelector('#q5_s').value || 1));
            const names = ['', '甲 量筒 (量取水體積)', '乙 薊頭漏斗 (製備氣體防逆流)', '丙 錐形瓶 (滴定與盛液)', '丁 上皿天平 (秤量鹽質量)'];
            h.querySelector('#app_name').textContent = names[v];
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            const cards = [
              { id: 1, label: '甲 量筒', role: '量取 1000 mL 水', pick: true, x: 20 },
              { id: 2, label: '乙 薊頭漏斗', role: '氣體反應導管', pick: false, x: 120 },
              { id: 3, label: '丙 錐形瓶', role: '承接/反應容器', pick: false, x: 220 },
              { id: 4, label: '丁 上皿天平', role: '秤取 9 g 鹽', pick: true, x: 320 }
            ];
            cards.forEach(c => {
              const sel = (c.id === v);
              const fill = sel ? 'rgba(37,99,235,0.15)' : '#fff';
              const border = sel ? BLU : (c.pick ? '#93c5fd' : '#e2e8f0');
              s += BOX(c.x, 25, 90, 80, { fill, stroke: border, sw: sel ? 2.5 : 1.5, r: 8 });
              s += TX(c.x + 45, 50, c.label, { fs: 12, c: sel ? BLU : '#1e293b', anchor: 'middle' });
              s += TX(c.x + 45, 75, c.pick ? '✔ 必需' : '✘ 不需', { fs: 12, c: c.pick ? GRN : '#94a3b8', anchor: 'middle' });
            });
            s += BOX(20, 120, 400, 90, { fill: '#fff', stroke: BLU, sw: 1.8 });
            if (v === 1) {
              s += TX(35, 145, '【儀器甲 · 量筒】配製重點：', { fs: 13, c: BLU });
              s += TX(35, 170, '• 用於量取約 1000 mL 水（水密度約 1 g/cm³，即 1000 g）。', { fs: 12, c: '#334155' });
              s += TX(35, 192, '• 注意：不可直接在量筒內配製溶解或進行劇烈化學反應。', { fs: 12, c: RED });
            } else if (v === 2) {
              s += TX(35, 145, '【儀器乙 · 薊頭漏斗】用途說明：', { fs: 13, c: '#475569' });
              s += TX(35, 170, '• 常用於雙氧水製氧等氣體實驗，長管末端需浸入液面下。', { fs: 12, c: '#334155' });
              s += TX(35, 192, '• 避免產生的氣體由漏斗頸逸出，本配製實驗無須使用。', { fs: 12, c: '#64748b' });
            } else if (v === 3) {
              s += TX(35, 145, '【儀器丙 · 錐形瓶】用途說明：', { fs: 13, c: '#475569' });
              s += TX(35, 170, '• 瓶口小、平底，適合搖晃混合液體或酸鹼滴定。', { fs: 12, c: '#334155' });
              s += TX(35, 192, '• 瓶身刻度僅為粗估，不能作為精準體積量取工具。', { fs: 12, c: '#64748b' });
            } else {
              s += TX(35, 145, '【儀器丁 · 上皿天平】配製重點：', { fs: 13, c: GRN });
              s += TX(35, 170, '• 秤量 9 公克的無碘鹽固體，秤量前須先歸零並放稱量紙。', { fs: 12, c: '#334155' });
              s += TX(35, 192, '• 左盤放物體、右盤放砝碼，利用槓桿原理測量質量。', { fs: 12, c: GRN });
            }
            h.querySelector('#fig_q5').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q5_s').oninput = draw; draw();
        },
        caption: '量取水體積使用甲量筒，稱取無碘鹽固體質量使用丁上皿天平，故選 (C)。',
        example: {
          q: '【115會考模擬 Q5】生理食鹽水重量百分率濃度為 0.9%，自行配製是在 1000 毫升水中加入 9 公克無碘鹽。小華想自行配製，配製過程應會用到下列哪兩種儀器？<br>(A) 甲、乙  (B) 乙、丁  (C) 甲、丁  (D) 乙、丙',
          steps: [
            '配製溶液需量取溶劑（水 1000 mL）與稱量溶質（鹽 9 g）。',
            '甲為量筒，專門用來量取一定體積的液體水。',
            '丁為上皿天平附砝碼，專門用來精確秤量固體鹽質量。',
            '乙薊頭漏斗用於氣體發生裝置，丙錐形瓶刻度不準確不適合量取。'
          ],
          ans: '正解：(C)'
        }
      },

      /* ---------- Slide 2: Q06 刻度尺判讀與估計值 ---------- */
      {
        sec: '基本測量與工具', secName: '基本測量與工具',
        title: '【第 06 題】刻度尺判讀：測量值 ＝ 準確值 ＋ 估計值',
        points: [
          '完整測量值必含<b>準確值</b>與最後一位<b>估計值</b>。',
          '磁鐵條最小刻度為 \\(1\\text{ cm}\\)，估計至小數一位。',
          '直尺最小刻度為 \\(1\\text{ mm}\\)，估計至小數二位。',
          '量具最小刻度單位不同，記錄之數值必定不相同。'
        ],
        formula: { label: '測量值組成', tex: '\\text{測量結果} = \\text{準確值 (最小刻度)} + \\text{估計值 (刻度間推測)}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q6"></div>
            <div class="ictrl"><label>切換測量工具：<span class="ival" id="tool_txt">磁鐵條 (cm)</span></label>
            <input type="range" id="q6_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q6_s').value;
            h.querySelector('#tool_txt').textContent = mode === 0 ? '磁鐵條 (最小刻度 1 cm)' : '直尺 (最小刻度 1 mm)';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            s += BOX(40, 30, 260, 24, { fill: 'rgba(37,99,235,0.25)', stroke: BLU, sw: 2 });
            s += TX(170, 47, '待測物體 (長約 7.4 cm)', { fs: 12, c: BLU, anchor: 'middle' });
            s += `<line x1="40" y1="75" x2="390" y2="75" stroke="#334155" stroke-width="2"/>`;
            if (mode === 0) {
              for (let i = 0; i <= 9; i++) {
                const x = 40 + i * 35;
                s += `<line x1="${x}" y1="75" x2="${x}" y2="92" stroke="#1e293b" stroke-width="2"/>`;
                s += TX(x, 108, `${i}`, { fs: 12, c: '#1e293b', anchor: 'middle' });
              }
              s += TX(395, 90, 'cm', { fs: 12, c: RED });
              s += BOX(250, 125, 170, 85, { fill: '#fff', stroke: RED, sw: 2 });
              s += TX(260, 145, '判讀結果分析：', { fs: 12, c: RED });
              s += TX(260, 168, '最小刻度：1 cm (較大)', { fs: 12, c: '#334155' });
              s += TX(260, 192, '紀錄值：約 7.4 cm', { fs: 13, c: BLU });
            } else {
              for (let i = 0; i <= 9; i++) {
                const x = 40 + i * 35;
                s += `<line x1="${x}" y1="75" x2="${x}" y2="95" stroke="#1e293b" stroke-width="2"/>`;
                s += TX(x, 110, `${i}`, { fs: 11, c: '#1e293b', anchor: 'middle' });
                if (i < 9) {
                  for (let j = 1; j <= 9; j++) {
                    const xx = x + j * 3.5;
                    const hTick = (j === 5) ? 87 : 82;
                    s += `<line x1="${xx}" y1="75" x2="${xx}" y2="${hTick}" stroke="#64748b" stroke-width="1"/>`;
                  }
                }
              }
              s += TX(395, 90, 'cm/mm', { fs: 11, c: GRN });
              s += BOX(250, 125, 170, 85, { fill: '#fff', stroke: GRN, sw: 2 });
              s += TX(260, 145, '判讀結果分析：', { fs: 12, c: GRN });
              s += TX(260, 168, '最小刻度：1 mm (較小)', { fs: 12, c: '#334155' });
              s += TX(260, 192, '紀錄值：約 7.42 cm', { fs: 13, c: GRN });
            }
            s += `<line x1="300" y1="54" x2="300" y2="120" stroke="${RED}" stroke-dasharray="3 3" stroke-width="1.5"/>`;
            s += TX(40, 175, '物體末端落在 7 與 8 之間', { fs: 13, c: '#475569' });
            h.querySelector('#fig_q6').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q6_s').oninput = draw; draw();
        },
        caption: '磁鐵條最小刻度單位較大，兩者因估計位數不同使得記錄測量值不相同，故選 (B)。',
        example: {
          q: '【115會考模擬 Q6】市售磁鐵條刻度如圖，若用它測量同一物體長度，其結果與最小刻度為 mm 的直尺相比，說明何者正確？<br>(A) 最小刻度單位：磁鐵條較大；測量值：兩者相同<br>(B) 最小刻度單位：磁鐵條較大；測量值：兩者不相同<br>(C) 最小刻度單位：直尺較大；測量值：兩者相同<br>(D) 最小刻度單位：直尺較大；測量值：兩者不相同',
          steps: [
            '磁鐵條最小刻度為 1 cm，直尺最小刻度為 1 mm（0.1 cm），故磁鐵條單位較大。',
            '磁鐵條測量值估計到小數一位（如 7.4 cm），直尺估計到小數二位（如 7.42 cm）。',
            '因為包含不同的最小刻度與估計位數，兩者的測量紀錄值必定不相同。'
          ],
          ans: '正解：(B)'
        }
      },

      /* ---------- Slide 3: Q07 空氣成分與性質 ---------- */
      {
        sec: '空氣組成與性質', secName: '空氣組成與性質',
        title: '【第 07 題】乾燥空氣成分：氮 78% · 氧 21% · 氬 0.9%',
        points: [
          '<b>甲 氮氣 (78%)</b>：含量最多，常溫下化學性質極安定。',
          '<b>乙 氧氣 (21%)</b>：具助燃性，常溫活性大易發生氧化反應。',
          '<b>丙 氬氣 (0.9%)</b>：鈍氣中含量最多，焊接常用保護氣。',
          '<b>丁 其他 (0.1%)</b>：含 \\(\\text{CO}_2\\) (約 0.04%)、水氣與稀有氣體。'
        ],
        formula: { label: '氣體體積比例順序', tex: '\\text{N}_2 (78\\%) > \\text{O}_2 (21\\%) > \\text{Ar} (0.9\\%) > \\text{CO}_2 (0.04\\%)' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q7"></div>
            <div class="ictrl"><label>檢視氣體：<span class="ival" id="gas_name">甲 氮氣 (78%)</span></label>
            <input type="range" id="q7_s" min="1" max="4" step="1" value="1"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(4, +h.querySelector('#q7_s').value || 1));
            const gases = ['', '甲 氮氣 (78%)', '乙 氧氣 (21%)', '丙 氬氣 (0.9%)', '丁 其他成分 (0.1%)'];
            h.querySelector('#gas_name').textContent = gases[v];
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            const cx = 110, cy = 112, r = 70;
            const sector = (start, end, fill) => {
              const point = (deg) => {
                const rad = deg * Math.PI / 180;
                return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
              };
              const [x0, y0] = point(start), [x1, y1] = point(end);
              const largeArc = end - start > 180 ? 1 : 0;
              return `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${largeArc} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${fill}" stroke="#94a3b8" stroke-width="1.5"/>`;
            };
            s += sector(178.2, 459, v === 1 ? BLU : 'rgba(37,99,235,0.42)');
            s += sector(99, 174.6, v === 2 ? RED : 'rgba(225,29,72,0.42)');
            s += sector(174.6, 177.84, v === 3 ? '#94a3b8' : '#cbd5e1');
            s += sector(177.84, 178.2, v === 4 ? AMB : 'rgba(217,119,6,0.58)');
            s += `<line x1="76" y1="52" x2="45" y2="106" stroke="#64748b" stroke-width="1.2"/>`;
            s += `<line x1="76" y1="78" x2="45" y2="110" stroke="#64748b" stroke-width="1.2"/>`;
            s += `<line x1="78" y1="192" x2="76" y2="153" stroke="#64748b" stroke-width="1.2"/>`;
            s += TX(145, 60, '甲 78%', { fs: 10, c: '#fff', anchor: 'middle' });
            s += TX(18, 56, '丁 0.1%', { fs: 9, c: AMB });
            s += TX(18, 83, '丙 0.9%', { fs: 9, c: '#64748b' });
            s += TX(18, 199, '乙 21%', { fs: 10, c: RED });
            s += TX(110, 110, '乾燥空氣', { fs: 12, c: '#fff', anchor: 'middle' });

            s += BOX(210, 25, 210, 180, { fill: '#fff', stroke: v === 2 ? RED : BLU, sw: 1.8 });
            if (v === 1) {
              s += TX(225, 55, '甲 · 氮氣 \\(\\text{N}_2\\) (78%)', { fs: 14, c: BLU });
              s += TX(225, 85, '• 空氣中體積含量第一位。', { fs: 12, c: '#334155' });
              s += TX(225, 110, '• 常溫下活性小，極不易反應。', { fs: 12, c: '#334155' });
              s += TX(225, 135, '• 常用於充填食品包裝防腐。', { fs: 12, c: '#64748b' });
              s += TX(225, 175, '小文評估：氮不易反應（對）', { fs: 12, c: GRN });
            } else if (v === 2) {
              s += TX(225, 55, '乙 · 氧氣 \\(\\text{O}_2\\) (21%)', { fs: 14, c: RED });
              s += TX(225, 85, '• 空氣中體積含量第二位。', { fs: 12, c: '#334155' });
              s += TX(225, 110, '• 具助燃性，常溫活性大！', { fs: 12, c: RED });
              s += TX(225, 135, '• 容易使鐵生鏽、生物呼吸。', { fs: 12, c: '#334155' });
              s += TX(225, 175, '小文評估：氧不易反應（錯！）', { fs: 12, c: RED });
            } else if (v === 3) {
              s += TX(225, 55, '丙 · 氬氣 \\(\\text{Ar}\\) (0.9%)', { fs: 14, c: AMB });
              s += TX(225, 85, '• 空氣中體積含量第三位。', { fs: 12, c: '#334155' });
              s += TX(225, 110, '• 鈍氣中含量最多者。', { fs: 12, c: '#334155' });
              s += TX(225, 135, '• 霓虹燈、金屬焊接保護氣。', { fs: 12, c: '#64748b' });
            } else {
              s += TX(225, 55, '丁 · 其他氣體 (0.1%)', { fs: 14, c: GRN });
              s += TX(225, 85, '• 包含二氧化碳 \\(\\text{CO}_2\\) 約 0.04%。', { fs: 12, c: '#334155' });
              s += TX(225, 110, '• 碳酸鈣與鹽酸反應生成 \\(\\text{CO}_2\\)。', { fs: 12, c: '#334155' });
              s += TX(225, 135, '• 其含量 \\(0.04\\% < 0.1\\%\\)。', { fs: 12, c: GRN });
              s += TX(225, 175, '小揚評估：含量少於 0.1%（對）', { fs: 12, c: GRN });
            }
            h.querySelector('#fig_q7').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q7_s').oninput = draw; draw();
        },
        caption: '空氣中氧氣活潑易反應（小文錯）；CO₂ 佔 0.04% 屬於丁區少於 0.1%（小揚對）。',
        example: {
          q: '【115會考模擬 Q7】空氣比例：甲 78%、乙 21%、丙 0.9%、丁 0.1%。小文說甲乙常溫都不易反應；小揚說碳酸鈣與稀鹽酸反應產生的氣體在空氣中少於 0.1%。誰正確？<br>(A) 兩人皆對  (B) 兩人皆錯  (C) 小文對小揚錯  (D) 小文錯小揚對',
          steps: [
            '甲為氮氣、乙為氧氣。氧氣具助燃性且常溫下活性極大，小文說「都不易反應」錯誤。',
            '碳酸鈣與稀鹽酸反應生成二氧化碳：\\(\\text{CaCO}_3 + 2\\text{HCl} \\to \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow\\)。',
            '二氧化碳在空氣中含量約 0.04%，小於丁區之 0.1%，小揚說法完全正確。'
          ],
          ans: '正解：(D)'
        }
      },

      /* ---------- Slide 4: Q08 液體對流向上與不良導體 ---------- */
      {
        sec: '熱傳播與對流', secName: '熱傳播與對流',
        title: '【第 08 題】液體對流向上 · 水為熱的不良導體',
        points: [
          '液體主要傳熱方式為<b>對流</b>，水本身是<b>熱的不良導體</b>。',
          '加熱試管中上端，熱水受熱體積膨脹、密度變小<b>向上流動</b>。',
          '熱水只在甲處上方循環，無法向下流動至試管底部乙處。',
          '底部乙處無法藉對流吸熱且水傳導極慢，故甲處水溫遠高於乙。'
        ],
        formula: { label: '熱對流驅動力', tex: '\\text{受熱} \\implies \\text{體積膨脹} \\implies \\text{密度減小} \\implies \\text{向上浮起對流}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q8"></div>
            <div class="ictrl"><label>酒精燈加熱位置：<span class="ival" id="heat_pos">加熱試管上部 (原題情境)</span></label>
            <input type="range" id="q8_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q8_s').value;
            h.querySelector('#heat_pos').textContent = mode === 0 ? '加熱試管上部 (原題情境)' : '加熱試管底部 (全管對流對照)';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            s += `<g transform="translate(40, 160) rotate(-40)">`;
            s += `<rect x="0" y="-18" width="170" height="36" rx="18" fill="#fff" stroke="#64748b" stroke-width="2"/>`;
            if (mode === 0) {
              s += `<rect x="75" y="-16" width="90" height="32" rx="10" fill="rgba(225,29,72,0.3)"/>`;
              s += `<rect x="2" y="-16" width="75" height="32" rx="16" fill="rgba(37,99,235,0.2)"/>`;
            } else {
              s += `<rect x="2" y="-16" width="163" height="32" rx="16" fill="rgba(225,29,72,0.3)"/>`;
            }
            s += `</g>`;

            s += `<circle cx="185" cy="55" r="5" fill="${RED}"/>`;
            s += TX(200, 52, '甲處 (液面，高溫！)', { fs: 12, c: RED });
            s += `<circle cx="70" cy="150" r="5" fill="${BLU}"/>`;
            s += TX(25, 175, '乙處 (管底，低溫！)', { fs: 12, c: BLU });

            const lampX = (mode === 0) ? 150 : 70;
            const lampY = (mode === 0) ? 120 : 180;
            s += `<ellipse cx="${lampX}" cy="${lampY + 30}" rx="18" ry="10" fill="#94a3b8"/>`;
            s += `<path d="M${lampX - 6},${lampY + 28} Q${lampX},${lampY + 10} ${lampX},${lampY} Q${lampX},${lampY + 10} ${lampX + 6},${lampY + 28} Z" fill="${AMB}"/>`;
            s += TX(lampX, lampY + 50, '酒精燈', { fs: 10, c: '#475569', anchor: 'middle' });

            s += BOX(230, 25, 185, 180, { fill: '#fff', stroke: RED, sw: 2 });
            s += TX(240, 50, '【熱傳播關鍵機制】', { fs: 13, c: RED });
            s += TX(240, 75, '① 導熱性：水為不良導體', { fs: 11, c: '#334155' });
            s += TX(240, 95, '   傳導極慢，下端吸不到熱', { fs: 10, c: '#64748b' });
            s += TX(240, 120, '② 對流性：熱水密度變小', { fs: 11, c: '#334155' });
            s += TX(240, 140, '   只會向上升至甲處', { fs: 11, c: RED });
            s += TX(240, 162, '   不會向下傳至乙處！', { fs: 11, c: RED });
            s += `<line x1="235" y1="172" x2="410" y2="172" stroke="#e2e8f0" stroke-width="1.5"/>`;
            s += TX(240, 192, '判斷：甲溫高，選 (B)', { fs: 13, c: GRN });
            h.querySelector('#fig_q8').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q8_s').oninput = draw; draw();
        },
        caption: '水為熱的不良導體且熱水受熱密度變小向上對流，故上部甲處水溫較高，選 (B)。',
        example: {
          q: '【115會考模擬 Q8】將裝水試管以酒精燈加熱上端如圖(五)，3 分鐘後測量甲、乙兩處水溫，關於測量結果何者最合理？<br>(A) 水是熱的良導體，受熱密度變小向上對流，甲較高<br>(B) 水是熱的不良導體，受熱密度變小向上對流，甲較高<br>(C) 水是熱的良導體，受熱密度變大向下對流，乙較高<br>(D) 水是熱的不良導體，受熱密度變大向下對流，乙較高',
          steps: [
            '水屬於熱的不良導體，難以透過「傳導」迅速傳播熱量。',
            '液體受熱後體積膨脹、密度減小，會產生向上流動的「熱對流」。',
            '酒精燈加熱於試管中上端，熱水往上方流動聚集於甲處，無法向下對流至管底乙處。',
            '因此甲處水溫顯著升高，乙處水溫仍低，正解為 (B)。'
          ],
          ans: '正解：(B)'
        }
      }

    ]
  });
})();

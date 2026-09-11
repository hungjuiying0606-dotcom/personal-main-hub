/* ============ 第 2 章　第 12～17 題 · 物質特性、熱平衡與光 ============
   對應題號：115一模 自然科 Q12, Q13, Q14, Q15, Q16, Q17
   範圍：國中理化（八上）本氏液糖分檢驗、相態吸放熱、元素週期表、熱平衡、物體顏色
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#0891b2';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 800}" fill="${o.c || '#172033'}">${SV.text(s)}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 8}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#dce3ee'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 2,
    title: '第 12～17 題 · 物質特性、熱平衡與光',
    color: C,
    sections: ['水溶液與檢測', '相態變化吸放熱', '元素分類與族群', '熱量轉移與平衡', '物體顏色與光'],
    slides: [

      /* ---------- Slide 1: Q12 本氏液檢測糖分與隔水加熱 ---------- */
      {
        sec: '水溶液與檢測', secName: '水溶液與檢測',
        title: '【第 12 題】本氏液檢測糖分：隔水加熱與顏色梯度',
        points: [
          '本氏液檢測葡萄糖等還原糖，<b>必須隔水加熱</b>引發反應。',
          '糖含量濃度由低到高變化：<b>藍 \\(\\to\\) 綠 \\(\\to\\) 黃 \\(\\to\\) 橙 \\(\\to\\) 紅</b>。',
          '乙呈藍色未變色 \\(\\implies\\) <b>無糖</b>；丁呈綠色 \\(\\implies\\) <b>微糖</b>。',
          '甲呈黃色 \\(\\implies\\) <b>半糖</b>；丙呈紅色 \\(\\implies\\) <b>全糖</b>。'
        ],
        formula: { label: '本氏液顏色與糖分濃度', tex: '\\text{藍色 (無糖)} < \\text{綠色 (微糖)} < \\text{黃色 (半糖)} < \\text{橙色} < \\text{紅色 (全糖)}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q12"></div>
            <div class="ictrl"><label>檢視試管：<span class="ival" id="tube_name">丙試管 (藍→紅)</span></label>
            <input type="range" id="q12_s" min="1" max="4" step="1" value="3"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(4, +h.querySelector('#q12_s').value || 3));
            const tubes = [
              {},
              { id: 1, name: '甲試管', trans: '藍 → 黃', sugar: '半糖', c: '#eab308' },
              { id: 2, name: '乙試管', trans: '藍 → 藍 (不變)', sugar: '無糖', c: '#2563eb' },
              { id: 3, name: '丙試管', trans: '藍 → 紅', sugar: '全糖', c: '#e11d48' },
              { id: 4, name: '丁試管', trans: '藍 → 綠', sugar: '微糖', c: '#059669' }
            ];
            const cur = tubes[v] || tubes[3];
            h.querySelector('#tube_name').textContent = `${cur.name} (${cur.trans})`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            for (let i = 1; i <= 4; i++) {
              const t = tubes[i];
              const x = 30 + (i - 1) * 60;
              const isSel = (i === v);
              s += `<rect x="${x}" y="35" width="40" height="90" rx="18" fill="#fff" stroke="${isSel ? cur.c : '#94a3b8'}" stroke-width="${isSel ? 3 : 1.5}"/>`;
              s += `<rect x="${x + 3}" y="65" width="34" height="57" rx="15" fill="${t.c}" opacity="${isSel ? 0.9 : 0.4}"/>`;
              s += TX(x + 20, 25, t.name.slice(0, 1), { fs: 13, c: '#1e293b', anchor: 'middle' });
              s += TX(x + 20, 142, t.sugar, { fs: 12, c: isSel ? cur.c : '#64748b', anchor: 'middle' });
            }
            s += BOX(265, 25, 155, 180, { fill: '#fff', stroke: cur.c, sw: 2 });
            s += TX(280, 52, cur.name, { fs: 15, c: cur.c });
            s += TX(280, 78, `顏色：${cur.trans}`, { fs: 12, c: '#334155' });
            s += TX(280, 105, `推測甜度：${cur.sugar}`, { fs: 13, c: cur.c });
            s += `<line x1="275" y1="120" x2="410" y2="120" stroke="#e2e8f0" stroke-width="1.5"/>`;
            s += TX(280, 145, '實驗要點：', { fs: 11, c: '#64748b' });
            s += TX(280, 168, '• 必須隔水加熱', { fs: 11, c: RED });
            s += TX(280, 188, '• 不加熱無法變色', { fs: 11, c: '#334155' });
            h.querySelector('#fig_q12').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q12_s').oninput = draw; draw();
        },
        caption: '本氏液呈色：藍(無糖)→綠(微糖)→黃(半糖)→紅(全糖)，丙呈紅色最可能為全糖，選 (C)。',
        example: {
          q: '【115會考模擬 Q12】花茶甜度由低至高為無糖、微糖、半糖、全糖。加本氏液檢測結果：甲(藍→黃)、乙(藍→藍)、丙(藍→紅)、丁(藍→綠)。何者正確？<br>(A) 甲最可能是無糖花茶<br>(B) 乙的糖含量高於丁<br>(C) 丙最可能是全糖花茶<br>(D) 本測試不加熱即可立即判讀',
          steps: [
            '本氏液受熱後與葡萄糖反應，隨糖濃度由低到高呈現：藍 \\(\\to\\) 綠 \\(\\to\\) 黃 \\(\\to\\) 橙 \\(\\to\\) 紅。',
            '對照試管：乙未變色為無糖、丁為微糖、甲為半糖、丙為全糖。',
            '因此丙試管最可能是全糖花茶，(C) 正確。',
            '本反應必須隔水加熱方可進行，常溫不加熱無法判讀結果。'
          ],
          ans: '正解：(C)'
        }
      },

      /* ---------- Slide 2: Q13 酒精蒸發與相變吸放熱 ---------- */
      {
        sec: '相態變化吸放熱', secName: '相態變化吸放熱',
        title: '【第 13 題】相態變化吸放熱 · 熱量自高溫傳至低溫',
        points: [
          '<b>吸熱過程</b>：熔化、汽化、昇華（破壞分子間吸引力）。',
          '<b>放熱過程</b>：凝固、凝結、凝華（分子聚攏釋出熱能）。',
          '酒精蒸發為<b>汽化吸熱</b>，使金屬湯匙溫度下降感覺冰涼。',
          '熱量自高溫處傳向低溫處，故熱由金屬湯匙傳至酒精。'
        ],
        formula: { label: '吸放熱判斷準則', tex: '\\text{固態} \\xrightarrow{\\text{吸熱}} \\text{液態} \\xrightarrow{\\text{吸熱}} \\text{氣態} \\quad (\\text{反向為放熱})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q13"></div>
            <div class="ictrl"><label>切換現象：<span class="ival" id="th_name">酒精蒸發 (汽化吸熱)</span></label>
            <input type="range" id="q13_s" min="1" max="3" step="1" value="1"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(3, +h.querySelector('#q13_s').value || 1));
            const titles = ['', '酒精蒸發 (汽化吸熱)', '乾冰昇華 (固態變氣態吸熱)', '水蒸氣凝結 (氣態變液態放熱)'];
            h.querySelector('#th_name').textContent = titles[v];
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            s += BOX(30, 30, 90, 45, { fill: '#e0f2fe', stroke: BLU, r: 8 });
            s += TX(75, 58, '固態', { fs: 14, c: BLU, anchor: 'middle' });
            s += BOX(175, 30, 90, 45, { fill: '#e0f2fe', stroke: BLU, r: 8 });
            s += TX(220, 58, '液態', { fs: 14, c: BLU, anchor: 'middle' });
            s += BOX(320, 30, 90, 45, { fill: '#e0f2fe', stroke: BLU, r: 8 });
            s += TX(365, 58, '氣態', { fs: 14, c: BLU, anchor: 'middle' });

            s += `<line x1="120" y1="45" x2="175" y2="45" stroke="${RED}" stroke-width="2.5"/>`;
            s += TX(147, 40, '熔化(吸熱)', { fs: 10, c: RED, anchor: 'middle' });
            s += `<line x1="265" y1="45" x2="320" y2="45" stroke="${RED}" stroke-width="2.5"/>`;
            s += TX(292, 40, '汽化(吸熱)', { fs: 10, c: RED, anchor: 'middle' });
            s += `<path d="M75,30 Q220,-5 365,30" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="3 3"/>`;
            s += TX(220, 20, '昇華 (吸熱)', { fs: 11, c: RED, anchor: 'middle' });

            s += BOX(25, 95, 390, 115, { fill: '#fff', stroke: v === 3 ? BLU : RED, sw: 1.8 });
            if (v === 1) {
              s += TX(40, 122, '現象：酒精倒在金屬湯匙上蒸發', { fs: 13, c: RED });
              s += TX(40, 148, '• 變化本質：液態酒精汽化成氣態酒精 \\(\\to\\) 吸熱。', { fs: 12, c: '#334155' });
              s += TX(40, 172, '• 熱量流向：熱量由高溫的金屬湯匙傳至低溫酒精。', { fs: 12, c: '#334155' });
              s += TX(40, 195, '• 觸感結果：湯匙失去熱量，溫度下降感覺冰涼。', { fs: 12, c: BLU });
            } else if (v === 2) {
              s += TX(40, 122, '對照：乾冰昇華 (固態二氧化碳變氣體)', { fs: 13, c: RED });
              s += TX(40, 148, '• 變化本質：固態直接轉化為氣態 \\(\\to\\) 昇華吸熱。', { fs: 12, c: '#334155' });
              s += TX(40, 172, '• 吸放熱特性：與酒精蒸發完全相同，皆自周遭吸熱！', { fs: 12, c: GRN });
              s += TX(40, 195, '• 周圍現象：空氣中水氣遇冷凝結成白色小水滴。', { fs: 12, c: '#64748b' });
            } else {
              s += TX(40, 122, '對照：水蒸氣凝結 (氣態變液態)', { fs: 13, c: BLU });
              s += TX(40, 148, '• 變化本質：氣態水蒸氣冷卻凝聚成小水滴 \\(\\to\\) 放熱。', { fs: 12, c: '#334155' });
              s += TX(40, 172, '• 吸放熱特性：放熱反應，釋放潛熱至周遭環境。', { fs: 12, c: RED });
              s += TX(40, 195, '• 注意陷阱：凝結與汽化相反，千萬不可混淆！', { fs: 12, c: RED });
            }
            h.querySelector('#fig_q13').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q13_s').oninput = draw; draw();
        },
        caption: '酒精蒸發為汽化吸熱，熱量由湯匙傳至酒精；與乾冰昇華同為吸熱，選 (A)。',
        example: {
          q: '【115會考模擬 Q13】小忻在室溫下將適量酒精倒在金屬湯匙上，觀察到酒精減少，且湯匙底部感覺冰涼。關於酒精減少的現象，下列敘述何者正確？<br>(A) 和乾冰昇華一樣會吸熱，熱由金屬湯匙傳至酒精<br>(B) 和乾冰昇華一樣會放熱，熱由酒精傳至金屬湯匙<br>(C) 和水氣凝結一樣會吸熱，熱由金屬湯匙傳至酒精<br>(D) 和水氣凝結一樣會放熱，熱由酒精傳至金屬湯匙',
          steps: [
            '酒精由液態轉變為氣態稱為汽化，分子需要吸收能量，故為「吸熱」。',
            '乾冰由固態直接昇華為氣態，同樣也是「吸熱」過程；水氣凝結為「放熱」。',
            '酒精吸熱使金屬湯匙溫度下降，熱量傳播方向必由「高溫湯匙 \\(\\to\\) 低溫酒精」。'
          ],
          ans: '正解：(A)'
        }
      },

      /* ---------- Slide 3: Q14 週期表同族化學性質相似 ---------- */
      {
        sec: '元素分類與族群', secName: '元素分類與族群',
        title: '【第 14 題】週期表同族性質相似 · 鹼土族生成水垢',
        points: [
          '週期表中<b>同族（縱列）元素</b>具有相似的價電子數與化學性質。',
          '<b>甲在第 IA 族</b>：鹼金族（\\(\\text{Li, Na, K}\\)），活性極大。',
          '<b>乙在第 IIA 族</b>：鹼土族（\\(\\text{Be, Mg, Ca}\\)），形成白色水垢。',
          '地下水含 \\(\\text{Ca}^{2+}, \\text{Mg}^{2+}\\)，加熱生成白色沉澱，為乙及同族元素。'
        ],
        formula: { label: '鹼土金屬成垢反應', tex: '\\text{Ca}^{2+} + 2\\text{HCO}_3^- \\xrightarrow{\\Delta} \\text{CaCO}_3\\downarrow (\\text{白色懸浮物}) + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q14"></div>
            <div class="ictrl"><label>檢視元素族群：<span class="ival" id="fam_txt">乙元素 (第 IIA 族鹼土金屬)</span></label>
            <input type="range" id="q14_s" min="1" max="2" step="1" value="2"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(2, +h.querySelector('#q14_s').value || 2));
            h.querySelector('#fam_txt').textContent = (v === 1) ? '甲元素 (第 IA 族鹼金屬)' : '乙元素 (第 IIA 族鹼土金屬 ★)';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            s += TX(35, 35, '週期表部分結構示意', { fs: 11, c: '#64748b' });
            s += TX(55, 52, 'IA', { fs: 12, c: BLU, anchor: 'middle' });
            s += TX(95, 52, 'IIA', { fs: 12, c: RED, anchor: 'middle' });

            s += BOX(40, 58, 30, 28, { fill: '#e2e8f0', stroke: '#cbd5e1' });
            s += TX(55, 77, 'H', { fs: 11, c: '#64748b', anchor: 'middle' });
            s += BOX(40, 88, 30, 28, { fill: (v === 1) ? 'rgba(37,99,235,0.3)' : '#fff', stroke: BLU, sw: (v === 1) ? 2.5 : 1 });
            s += TX(55, 107, '甲', { fs: 13, c: BLU, anchor: 'middle' });
            s += BOX(40, 118, 30, 28, { fill: '#fff', stroke: '#cbd5e1' });
            s += TX(55, 137, 'Na', { fs: 11, c: '#64748b', anchor: 'middle' });
            s += BOX(40, 148, 30, 28, { fill: '#fff', stroke: '#cbd5e1' });
            s += TX(55, 167, 'K', { fs: 11, c: '#64748b', anchor: 'middle' });

            s += BOX(80, 88, 30, 28, { fill: '#e2e8f0', stroke: '#cbd5e1' });
            s += TX(95, 107, 'Be', { fs: 11, c: '#64748b', anchor: 'middle' });
            s += BOX(80, 118, 30, 28, { fill: (v === 2) ? 'rgba(225,29,72,0.3)' : '#fff', stroke: RED, sw: (v === 2) ? 2.5 : 1 });
            s += TX(95, 137, '乙', { fs: 13, c: RED, anchor: 'middle' });
            s += BOX(80, 148, 30, 28, { fill: '#fff', stroke: '#cbd5e1' });
            s += TX(95, 167, 'Ca', { fs: 11, c: '#64748b', anchor: 'middle' });

            s += BOX(120, 118, 90, 58, { fill: '#f1f5f9', stroke: '#cbd5e1' });
            s += TX(165, 150, '其他過渡元素', { fs: 10, c: '#94a3b8', anchor: 'middle' });

            s += BOX(230, 25, 185, 180, { fill: '#fff', stroke: (v === 2) ? RED : BLU, sw: 2 });
            if (v === 2) {
              s += TX(240, 50, '【乙 · 鹼土族 IIA】', { fs: 13, c: RED });
              s += TX(240, 75, '• 題幹指出：「白色懸浮物', { fs: 11, c: '#334155' });
              s += TX(240, 95, '  為鹼土族離子造成」', { fs: 11, c: '#334155' });
              s += TX(240, 120, '• 乙位於週期表第二縱列', { fs: 11, c: RED });
              s += TX(240, 142, '  即為「第 IIA 族」！', { fs: 12, c: RED });
              s += TX(240, 165, '• 同族元素性質相似，', { fs: 11, c: '#334155' });
              s += TX(240, 188, '故選乙或同族元素 (D)', { fs: 12, c: GRN });
            } else {
              s += TX(240, 50, '【甲 · 鹼金族 IA】', { fs: 13, c: BLU });
              s += TX(240, 75, '• 甲位於第一縱列 (IA 族)', { fs: 11, c: '#334155' });
              s += TX(240, 98, '• 鹼金屬碳酸鹽易溶於水', { fs: 11, c: '#64748b' });
              s += TX(240, 120, '  （如 \\(\\text{Na}_2\\text{CO}_3\\) 不生水垢）', { fs: 10, c: '#64748b' });
              s += TX(240, 150, '• 非本題白色懸浮物來源', { fs: 11, c: RED });
              s += TX(240, 175, '切勿混淆 IA 與 IIA！', { fs: 12, c: RED });
            }
            h.querySelector('#fig_q14').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q14_s').oninput = draw; draw();
        },
        caption: '週期表同族化學性質相似，乙位於第二行鹼土族，造成硬水水垢，選 (D)。',
        example: {
          q: '【115會考模擬 Q14】地下水加熱後出現大量白色懸浮物，推測是地下水中鹼土族離子造成。圖(七)為部分週期表，甲在 IA 族、乙在 IIA 族，則造成這種現象的元素最可能為下列何者？<br>(A) 甲或和甲同週期的元素<br>(B) 乙或和乙同週期的元素<br>(C) 甲或和甲同族的元素<br>(D) 乙或和乙同族的元素',
          steps: [
            '題目明確指出白色懸浮物（硬水水垢，如 \\(\\text{CaCO}_3\\)）是由「鹼土族元素離子」所造成。',
            '週期表中直列稱為「族」，同族元素具有相同的價電子數，化學性質極為相似。',
            '第 IA 族為鹼金族（元素甲），第 IIA 族為鹼土族（元素乙）。',
            '因此造成該現象的元素應為「乙或和乙同族的元素」，故選 (D)。'
          ],
          ans: '正解：(D)'
        }
      },

      /* ---------- Slide 4: Q15 冷熱水混合與熱量散失 ---------- */
      {
        sec: '熱量轉移與平衡', secName: '熱量轉移與平衡',
        title: '【第 15 題】冷熱水混合 · 熱量散失使平衡溫度偏低',
        points: [
          '甲杯 80℃ 與乙杯 20℃ 同質量水混合。',
          '<b>理想絕熱狀態</b>：熱水放熱 ＝ 冷水吸熱，平衡溫度 \\(50^\\circ\\text{C}\\)。',
          '實測「混合過程中有熱量散失」至周圍空氣中。',
          '實際平衡溫度必低於 \\(50^\\circ\\text{C}\\)，落在 \\(20\\sim 50^\\circ\\text{C}\\) 間（最可能 \\(40^\\circ\\text{C}\\)）。'
        ],
        formula: { label: '熱平衡公式', tex: 'm s (80 - T) = m s (T - 20) + H_{\\text{散失}} \\implies 20^\\circ\\text{C} < T < 50^\\circ\\text{C}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q15"></div>
            <div class="ictrl"><label>熱量散失率：<span class="ival" id="loss_val">20% (實測約 40℃)</span></label>
            <input type="range" id="q15_s" min="0" max="40" step="10" value="20"></div></div>`;
          const draw = () => {
            const loss = +h.querySelector('#q15_s').value;
            const T = (50 - 30 * (loss / 100)).toFixed(0);
            h.querySelector('#loss_val').textContent = `${loss}% (平衡水溫 ${T}℃)`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            s += BOX(30, 40, 75, 80, { fill: '#fff', stroke: RED, sw: 2 });
            s += `<rect x="32" y="65" width="71" height="53" fill="rgba(225,29,72,0.3)"/>`;
            s += TX(67, 30, '甲杯水', { fs: 11, c: RED, anchor: 'middle' });
            s += TX(67, 95, '80℃', { fs: 13, c: RED, anchor: 'middle' });

            s += BOX(125, 40, 75, 80, { fill: '#fff', stroke: BLU, sw: 2 });
            s += `<rect x="127" y="65" width="71" height="53" fill="rgba(37,99,235,0.2)"/>`;
            s += TX(162, 30, '乙杯水', { fs: 11, c: BLU, anchor: 'middle' });
            s += TX(162, 95, '20℃', { fs: 13, c: BLU, anchor: 'middle' });

            s += BOX(65, 135, 100, 70, { fill: '#fff', stroke: GRN, sw: 2 });
            s += `<rect x="67" y="155" width="96" height="48" fill="rgba(5,150,105,0.2)"/>`;
            s += TX(115, 185, `平衡：${T}℃`, { fs: 14, c: GRN, anchor: 'middle' });

            if (loss > 0) {
              s += `<path d="M165,155 Q190,140 215,145" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="3 3"/>`;
              s += TX(220, 150, `散失 ${loss}% 熱量`, { fs: 11, c: RED });
            }

            s += BOX(235, 25, 180, 180, { fill: '#fff', stroke: BLU, sw: 2 });
            s += TX(245, 52, '【平衡溫度推演】', { fs: 13, c: BLU });
            s += TX(245, 78, '• 理想無散失：50℃', { fs: 12, c: '#64748b' });
            s += TX(260, 98, '(80 + 20) ÷ 2 ＝ 50℃', { fs: 10, c: '#64748b' });
            s += TX(245, 125, '• 實測有熱散失：', { fs: 12, c: RED });
            s += TX(260, 146, '溫度必低於 50℃！', { fs: 13, c: RED });
            s += TX(245, 175, '選項唯一可能：40℃ (B)', { fs: 12, c: GRN });
            h.querySelector('#fig_q15').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q15_s').oninput = draw; draw();
        },
        caption: '80℃ 與 20℃ 水等質量混合，熱量散失使水溫小於 50℃，最可能為 40℃，選 (B)。',
        example: {
          q: '【115會考模擬 Q15】甲乙兩杯相同質量的水，甲水溫 80℃，乙水溫 20℃，混合後判斷「混合過程中有部分熱量散失」。則測得混合後的水溫最可能是下列何者？<br>(A) 20℃  (B) 40℃  (C) 50℃  (D) 65℃',
          steps: [
            '甲、乙兩杯水質量相同（\\(m\\)）、比熱相同（\\(s = 1\\)）。',
            '若完全無熱量散失：\\(m \\times (80 - T) = m \\times (T - 20) \\implies T = 50^\\circ\\text{C}\\)。',
            '已知混合過程中有熱量散失至空氣中，故系統最終溫度必低於 \\(50^\\circ\\text{C}\\)，但仍高於低溫水 \\(20^\\circ\\text{C}\\)。',
            '在 \\(20^\\circ\\text{C} < T < 50^\\circ\\text{C}\\) 範圍中，選項只有 40℃ 合理，故選 (B)。'
          ],
          ans: '正解：(B)'
        }
      },

      /* ---------- Slide 5: Q16 液態氮相態變化與低溫物理性質 ---------- */
      {
        sec: '相態變化吸放熱', secName: '相態變化吸放熱',
        title: '【第 16 題】液態氮滾沸為汽化吸熱 · 白煙為小水滴',
        points: [
          '液態氮沸點極低（\\(-196^\\circ\\text{C}\\)），室溫下滾沸為<b>汽化吸熱</b>。',
          '白煙本質：液態氮吸熱使周遭降溫，空氣中<b>水蒸氣凝結成小水滴</b>。',
          '汽化與水蒸氣凝結皆屬於<b>物理變化</b>，未生成新物質。',
          '氮氣常溫下<b>化學性質安定</b>，不與食材反應，常用作保鮮氣體。'
        ],
        formula: { label: '相態變化本質', tex: '\\text{液態氮} \\xrightarrow{\\text{常溫汽化吸熱}} \\text{氮氣 (無色無毒)} \\quad (\\Delta H > 0，\\text{物理變化})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q16"></div>
            <div class="ictrl"><label>現象解析：<span class="ival" id="ice_txt">液態氮炒冰滾沸 (汽化吸熱)</span></label>
            <input type="range" id="q16_s" min="1" max="3" step="1" value="1"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(3, +h.querySelector('#q16_s').value || 1));
            const items = [
              {},
              { name: '液態氮炒冰滾沸 (汽化吸熱)', desc: '常溫劇烈沸騰，物理變化', c: RED },
              { name: '大量白煙真面目 (小水滴)', desc: '水蒸氣遇冷凝結成液態小水滴', c: BLU },
              { name: '氮氣的化學性質 (安定不反應)', desc: '常溫不與食材反應，無毒保鮮', c: GRN }
            ];
            const cur = items[v] || items[1];
            h.querySelector('#ice_txt').textContent = cur.name;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            s += `<ellipse cx="120" cy="140" rx="80" ry="35" fill="#94a3b8" stroke="#475569" stroke-width="2"/>`;
            s += `<ellipse cx="120" cy="135" rx="72" ry="28" fill="#e0f2fe"/>`;
            s += TX(120, 140, '鮮奶油＋牛奶＋液態氮', { fs: 11, c: '#0369a1', anchor: 'middle' });

            s += `<circle cx="100" cy="85" r="18" fill="rgba(203,213,225,0.7)"/>`;
            s += `<circle cx="125" cy="75" r="24" fill="rgba(203,213,225,0.8)"/>`;
            s += `<circle cx="150" cy="88" r="16" fill="rgba(203,213,225,0.7)"/>`;
            s += TX(125, 78, '白煙', { fs: 12, c: '#334155', anchor: 'middle' });

            s += BOX(225, 25, 190, 180, { fill: '#fff', stroke: cur.c, sw: 2 });
            s += TX(235, 50, cur.name.slice(0, 8), { fs: 13, c: cur.c });
            if (v === 1) {
              s += TX(235, 78, '• 滾沸本質：沸騰 (汽化)', { fs: 12, c: RED });
              s += TX(235, 102, '  液態 \\(\\to\\) 氣態 (非熔化！)', { fs: 11, c: '#334155' });
              s += TX(235, 126, '• 吸放熱：大量吸收熱量', { fs: 11, c: '#334155' });
              s += TX(235, 150, '• 變化分類：純物理變化', { fs: 11, c: '#64748b' });
              s += TX(235, 182, 'A、B 選項皆錯誤！', { fs: 12, c: RED });
            } else if (v === 2) {
              s += TX(235, 78, '• 白煙成因：', { fs: 12, c: BLU });
              s += TX(245, 100, '空氣中「水蒸氣」遇冷', { fs: 11, c: '#334155' });
              s += TX(245, 122, '凝結成的「小水滴」！', { fs: 12, c: BLU });
              s += TX(235, 148, '• 氮氣本身為無色氣體', { fs: 11, c: '#64748b' });
              s += TX(235, 172, '• 凝結屬物理變化 (非化學)', { fs: 11, c: RED });
              s += TX(235, 192, 'C 選項錯誤！', { fs: 12, c: RED });
            } else {
              s += TX(235, 78, '• 氮氣特性：', { fs: 12, c: GRN });
              s += TX(245, 100, '常溫下活性極小', { fs: 11, c: '#334155' });
              s += TX(245, 122, '不易與食材發生化學反應', { fs: 11, c: GRN });
              s += TX(235, 148, '• 食品應用：洋芋片充氮', { fs: 11, c: '#64748b' });
              s += TX(235, 185, '正確選項：(D) ✔', { fs: 14, c: GRN });
            }
            h.querySelector('#fig_q16').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q16_s').oninput = draw; draw();
        },
        caption: '液態氮滾沸汽化吸熱，氮氣化學性質安定不易與食材反應，選 (D)。',
        example: {
          q: '【115會考模擬 Q16】夜市炒冰加入液態氮，液態氮出現滾沸現象並冒出大量白煙。關於店家用液態氮製作炒冰的過程，下列說明何者正確？<br>(A) 白煙的主要成分為氮氣<br>(B) 液態氮滾沸表示正在熔化<br>(C) 產生白煙的過程是化學變化<br>(D) 會產生不易與食材反應的氮氣',
          steps: [
            '液態氮滾沸是由液態轉變為氣態氮氣，為「汽化」現象而非熔化，(B) 錯誤。',
            '白煙是周遭空氣中的「水蒸氣」遇冷「凝結」而成的小水滴，屬於物理變化，(A)(C) 錯誤。',
            '氮氣常溫下化學性質非常不活潑，不易與食材成分反應，保證食用安全性，(D) 正確。'
          ],
          ans: '正解：(D)'
        }
      },

      /* ---------- Slide 6: Q17 色光反射與物體顏色呈現 ---------- */
      {
        sec: '物體顏色與光', secName: '物體顏色與光',
        title: '【第 17 題】不透明物體色 ＝ 反射色光 · 其餘全吸收',
        points: [
          '藍色絲帶只反射藍光，照射<b>紅光或綠光均會變黑</b>。',
          '手電筒光線照在絲帶上呈黑色，代表該手電筒不含藍光。',
          '若手電筒為<b>紅光</b>：紅色帽子反射紅光呈現<b>紅色</b>。',
          '若手電筒為<b>綠光</b>：紅色帽子吸收綠光呈現<b>黑色</b>。'
        ],
        formula: { label: '物體顯色原理', tex: '\\text{看到的顏色} = \\text{物體反射的色光} \\quad (\\text{無光反射時呈現黑色})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q17"></div>
            <div class="ictrl"><label>手電筒光色：<span class="ival" id="light_name">紅色光 (絲帶黑、帽子紅)</span></label>
            <input type="range" id="q17_s" min="1" max="3" step="1" value="1"></div></div>`;
          const draw = () => {
            const v = Math.max(1, Math.min(3, +h.querySelector('#q17_s').value || 1));
            const lData = [
              {},
              { name: '紅色手電筒', hat: '#e11d48', hatTxt: '紅色', rib: '#0f172a', ribTxt: '黑色', c: RED },
              { name: '綠色手電筒', hat: '#0f172a', hatTxt: '黑色', rib: '#0f172a', ribTxt: '黑色', c: GRN },
              { name: '白色手電筒 (對照)', hat: '#e11d48', hatTxt: '紅色', rib: '#2563eb', ribTxt: '藍色', c: '#64748b' }
            ];
            const cur = lData[v] || lData[1];
            h.querySelector('#light_name').textContent = `${cur.name} (帽子${cur.hatTxt}、絲帶${cur.ribTxt})`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            s += BOX(30, 25, 180, 175, { fill: '#fff', stroke: '#94a3b8', sw: 2 });
            s += TX(120, 45, '耶誕老人圖畫', { fs: 12, c: '#475569', anchor: 'middle' });

            s += `<path d="M70,105 Q120,55 160,105 Z" fill="${cur.hat}" stroke="#334155" stroke-width="1.5"/>`;
            s += `<circle cx="165" cy="105" r="8" fill="#fff" stroke="#cbd5e1"/>`;
            s += BOX(65, 105, 100, 12, { fill: '#fff', stroke: '#cbd5e1', r: 4 });
            s += TX(120, 92, `帽子：${cur.hatTxt}`, { fs: 11, c: '#fff', anchor: 'middle' });

            s += BOX(85, 130, 65, 55, { fill: '#fff', stroke: '#cbd5e1', sw: 1.5 });
            s += BOX(112, 130, 12, 55, { fill: cur.rib, stroke: '#334155', sw: 1 });
            s += BOX(85, 152, 65, 12, { fill: cur.rib, stroke: '#334155', sw: 1 });
            s += TX(118, 161, cur.ribTxt, { fs: 9, c: '#fff', anchor: 'middle' });
            s += TX(118, 195, `絲帶變${cur.ribTxt}`, { fs: 11, c: cur.rib === '#0f172a' ? RED : BLU, anchor: 'middle' });

            s += BOX(230, 25, 185, 175, { fill: '#fff', stroke: cur.c, sw: 2 });
            s += TX(240, 50, `【${cur.name} 照射】`, { fs: 13, c: cur.c });
            s += TX(240, 75, '• 藍絲帶吸收該光 \\(\\to\\) 變黑！', { fs: 11, c: '#334155' });
            s += TX(240, 100, `• 紅帽子反射情形：`, { fs: 11, c: '#334155' });
            if (v === 1) {
              s += TX(255, 125, '紅光照紅帽 \\(\\to\\) 反射紅光', { fs: 11, c: RED });
              s += TX(255, 145, '呈現「紅色」！', { fs: 13, c: RED });
            } else if (v === 2) {
              s += TX(255, 125, '綠光照紅帽 \\(\\to\\) 吸收無光', { fs: 11, c: '#64748b' });
              s += TX(255, 145, '呈現「黑色」！', { fs: 13, c: '#0f172a' });
            } else {
              s += TX(255, 125, '白光含紅綠藍三原色', { fs: 11, c: '#64748b' });
              s += TX(255, 145, '絲帶維持藍色、帽紅色', { fs: 11, c: '#334155' });
            }
            s += `<line x1="235" y1="160" x2="410" y2="160" stroke="#e2e8f0" stroke-width="1.5"/>`;
            s += TX(240, 185, '綜合結論：呈黑色或紅色 (C)', { fs: 11, c: VIO });
            h.querySelector('#fig_q17').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q17_s').oninput = draw; draw();
        },
        caption: '藍絲帶變黑表示光線不含藍光（紅或綠光），故紅帽子呈現黑色或紅色，選 (C)。',
        example: {
          q: '【115會考模擬 Q17】小昕在牆上貼圖畫（帽子紅色、禮物絲帶藍色）。他拿出一支手電筒照在圖上，絲帶變成黑色。則此時帽子紅色部分會呈現什麼顏色？<br>(A) 黑色或綠色<br>(B) 紅色或綠色<br>(C) 黑色或紅色<br>(D) 紅色或藍色',
          steps: [
            '不透明物體僅能反射與本身相同顏色的色光，其餘色光皆被吸收。',
            '藍色絲帶原本只反射藍光，被手電筒照射後呈黑色，代表手電筒的光線「不含藍光」（可能是紅光或綠光）。',
            '若手電筒發出紅光：紅色帽子反射紅光，呈現「紅色」。',
            '若手電筒發出綠光：紅色帽子吸收綠光且無光可反射，呈現「黑色」。故帽子呈現「黑色或紅色」。'
          ],
          ans: '正解：(C)'
        }
      }

    ]
  });
})();

/* ============ 第 4 章　第 30～33 題 · 反射定律、測溫與熱量 ============
   對應題號：115一模 自然科 Q30, Q31, Q32, Q33
   ============================================================ */
window.DECK = window.DECK || [];
(function () {
  const C = '#e11d48';
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706';

  function svg(vb, inner) {
    return `<div style="width:100%;text-align:center"><svg viewBox="${vb}" style="max-width:100%">${inner}</svg></div>`;
  }

  const TX = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" ${o.anchor ? `text-anchor="${o.anchor}"` : ''} font-size="${o.fs || 14}" font-weight="${o.fw || 800}" fill="${o.c || '#172033'}">${SV.text(s)}</text>`;
  const BOX = (x, y, w, h, o = {}) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r || 8}" fill="${o.fill || '#fff'}" stroke="${o.stroke || '#dce3ee'}" stroke-width="${o.sw || 1.6}"/>`;

  window.DECK.push({
    ch: 4,
    title: '第 30～33 題 · 反射定律、測溫與熱量',
    color: C,
    sections: ['光的反射定律', '溫度測量原理', '聲音反射與回聲', '比熱與熱量計算'],
    slides: [

      /* ---------- Slide 1: Q30 ---------- */
      {
        sec: '光的反射定律', secName: '光的反射定律',
        title: '【第 30 題】平面鏡反射定律：入射角等於反射角',
        points: [
          '光線照射至平面鏡時，必遵守<b>入射角 ＝ 反射角</b>。',
          '平面鏡長 2 格（\\(10\\text{ cm}\\)），牆面與天花板互相垂直。',
          '紅、綠光線自左下向右上發散射入鏡面兩端。',
          '反射光線向上射至天花板，光斑距離大於鏡長 \\(10\\text{ cm}\\)。'
        ],
        formula: { label: '光的反射定律', tex: '\\theta_{\\text{入射角}} = \\theta_{\\text{反射角}} \\quad (\\text{法線垂直於反射面})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q30"></div>
            <div class="ictrl"><label>檢視光路分析：<span class="ival" id="ray_txt">完整反射光路</span></label>
            <input type="range" id="q30_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q30_s').value;
            h.querySelector('#ray_txt').textContent = mode === 0 ? '紅綠雷射光線軌跡' : '法線與幾何對稱驗證';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 天花板與牆壁
            s += BOX(30, 20, 320, 15, { fill: '#64748b', stroke: '#334155' });
            s += TX(190, 32, '天花板', { fs: 11, c: '#fff', anchor: 'middle' });
            s += BOX(335, 20, 15, 180, { fill: '#64748b', stroke: '#334155' });
            // 平面鏡 (長度 2 格，標示 10 cm)
            s += BOX(330, 45, 6, 70, { fill: '#38bdf8', stroke: BLU, sw: 2 });
            s += TX(360, 85, '平面鏡 (10cm)', { fs: 11, c: BLU });

            // 方格參考點：綠光打在鏡面下端 (330, 115)；紅光打在鏡面上端 (330, 45)
            // 綠光入射路徑：自 (180, 150) -> (330, 115)
            s += `<line x1="180" y1="150" x2="330" y2="115" stroke="${GRN}" stroke-width="2.5"/>`;
            s += TX(170, 160, '綠光源', { fs: 11, c: GRN });
            // 綠光反射路徑：法線水平，入射角約 13°，向上反射至天花板 (200, 35)
            s += `<line x1="330" y1="115" x2="190" y2="35" stroke="${GRN}" stroke-width="2.5" stroke-dasharray="${mode === 1 ? '4 4' : ''}"/>`;
            s += `<circle cx="190" cy="35" r="5" fill="${GRN}"/>`;
            s += TX(190, 52, '綠光斑', { fs: 11, c: GRN, anchor: 'middle' });

            // 紅光入射路徑：自 (210, 170) -> (330, 45)
            s += `<line x1="210" y1="170" x2="330" y2="45" stroke="${RED}" stroke-width="2.5"/>`;
            s += TX(220, 185, '紅光源', { fs: 11, c: RED });
            // 紅光反射路徑：入射角更大，反射至天花板更左側 (70, 35)
            s += `<line x1="330" y1="45" x2="70" y2="35" stroke="${RED}" stroke-width="2.5" stroke-dasharray="${mode === 1 ? '4 4' : ''}"/>`;
            s += `<circle cx="70" cy="35" r="5" fill="${RED}"/>`;
            s += TX(70, 52, '紅光斑', { fs: 11, c: RED, anchor: 'middle' });

            // 天花板光斑距離標註
            s += `<line x1="70" y1="65" x2="190" y2="65" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="70" y1="60" x2="70" y2="70" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="190" y1="60" x2="190" y2="70" stroke="#334155" stroke-width="1.5"/>`;
            s += TX(130, 80, '距離 ＞ 10 cm', { fs: 12, c: RED, anchor: 'middle' });

            // 結論小卡
            s += BOX(35, 110, 140, 85, { fill: '#fff', stroke: VIO, sw: 1.8 });
            s += TX(45, 132, '幾何對稱判定：', { fs: 12, c: VIO });
            s += TX(45, 154, '• 入射線向右上發散', { fs: 11, c: '#334155' });
            s += TX(45, 174, '• 反射線向上繼續發散', { fs: 11, c: '#334155' });
            s += TX(45, 192, '故天花板光斑間距 > 10cm', { fs: 10, c: RED });
            h.querySelector('#fig_q30').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q30_s').oninput = draw; draw();
        },
        caption: '入射光線呈發散射入平面鏡，經反射後光線向上持續發散，天花板兩光斑間距必大於 10 cm。',
        example: {
          q: '【115會考模擬 Q30】平面鏡掛在牆上長 10 cm，小明將紅綠雷射照向平面鏡如圖(十五)，天花板出現反射光斑。已知圖中方格為正方形，天花板上光點分布應符合下列何者？<br>(A) 兩色光會聚在同一點<br>(B) 兩色光點間距為 10 cm<br>(C) 兩色光點間距大於 10 cm<br>(D) 兩色光點間距小於 10 cm',
          steps: [
            '平面鏡成像與反射遵循「入射角 ＝ 反射角」，法線與垂直牆面平行水平。',
            '由圖(十五)格線可觀察光線行進斜率：綠光射向鏡面下端，紅光射向上端，入射光束本質為發散光。',
            '反射後光線向上射向天花板，依對稱幾何發散傳播，反射光斑在天花板水平距離遠大於鏡長 10 cm。',
            '因此天花板上兩光斑間距必定「大於 10 cm」，正解為 (C)。'
          ],
          ans: '正解：(C)'
        }
      },

      /* ---------- Slide 2: Q31 ---------- */
      {
        sec: '溫度測量原理', secName: '溫度測量原理',
        title: '【第 31 題】物理量隨溫度規律變化 · 均可用於測溫',
        points: [
          '溫度計原理：利用物質隨溫度<b>規律變化之物理性質</b>製成。',
          '金屬片之電阻值隨溫度升高呈現<b>均勻線性增加</b>。',
          '只要測得金屬片電阻值，對照曲線即可推求環境溫度。',
          '注意：電阻對溫度為<b>一次線性關係</b>，但不過原點非正比。'
        ],
        formula: { label: '金屬電阻與溫度線性關係', tex: 'R = R_0 (1 + \\alpha T) \\quad (\\text{電阻值隨溫度規律線性變化，可用以測溫})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q31"></div>
            <div class="ictrl"><label>測得電阻 \\(R\\)：<span class="ival" id="r_val">170</span> \\(\\Omega\\)</label>
            <input type="range" id="q31_s" min="100" max="310" step="35" value="170"></div></div>`;
          const draw = () => {
            const r = +h.querySelector('#q31_s').value;
            // R = 100 + 0.35 * T => T = (R - 100) / 0.35
            const temp = Math.round((r - 100) / 0.35);
            h.querySelector('#r_val').textContent = `${r} Ω (對應 ${temp}℃)`;
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 坐標圖
            s += `<line x1="50" y1="160" x2="230" y2="160" stroke="#334155" stroke-width="1.8"/>`;
            s += `<line x1="50" y1="160" x2="50" y2="35" stroke="#334155" stroke-width="1.8"/>`;
            s += TX(230, 175, '溫度(℃)', { fs: 10, c: '#475569' });
            s += TX(25, 45, '電阻(Ω)', { fs: 10, c: '#475569' });

            // 電阻線性斜線 (0℃: 100Ω -> 600℃: 310Ω)
            // 0℃ at x = 70, y = 135; 600℃ at x = 210, y = 50
            s += `<line x1="60" y1="140" x2="210" y2="50" stroke="${BLU}" stroke-width="2.5"/>`;

            // 當前滑桿選中點
            const ptX = 70 + (temp / 600) * 140;
            const ptY = 135 - ((r - 100) / 210) * 85;
            s += `<circle cx="${ptX.toFixed(1)}" cy="${ptY.toFixed(1)}" r="5" fill="${RED}"/>`;
            s += `<line x1="50" y1="${ptY.toFixed(1)}" x2="${ptX.toFixed(1)}" y2="${ptY.toFixed(1)}" stroke="${RED}" stroke-dasharray="2 2"/>`;
            s += `<line x1="${ptX.toFixed(1)}" y1="${ptY.toFixed(1)}" x2="${ptX.toFixed(1)}" y2="160" stroke="${RED}" stroke-dasharray="2 2"/>`;

            // 右側原理分析卡
            s += BOX(250, 25, 170, 180, { fill: '#fff', stroke: GRN, sw: 2 });
            s += TX(260, 50, '【電阻溫度計原理】', { fs: 13, c: GRN });
            s += TX(260, 75, `• 讀取電阻：${r} Ω`, { fs: 12, c: RED });
            s += TX(260, 98, `• 查表溫度：${temp} ℃`, { fs: 12, c: GRN });
            s += `<line x1="255" y1="110" x2="415" y2="110" stroke="#e2e8f0" stroke-width="1.5"/>`;
            s += TX(260, 130, '• 測溫要件：', { fs: 11, c: '#334155' });
            s += TX(260, 150, '  性質隨溫度規律改變', { fs: 11, c: '#334155' });
            s += TX(260, 170, '  不限於熱脹冷縮！', { fs: 11, c: '#64748b' });
            s += TX(260, 192, '判斷：可測溫，選 (A)', { fs: 12, c: RED });
            h.querySelector('#fig_q31').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q31_s').oninput = draw; draw();
        },
        caption: '金屬片電阻隨溫度呈線性規律變化，可透過量測電阻對照圖表得知溫度，正解為 (A)。',
        example: {
          q: '【115會考模擬 Q31】金屬片電阻值隨溫度改變如圖(十六)。關於此金屬片可否應用於溫度的測量，下列說明何者最合理？<br>(A) 可以，測量其電阻值配合圖形即可知其所在環境溫度<br>(B) 可以，金屬片的電阻值與溫度為方便計算的正比關係<br>(C) 不行，金屬片的電阻值無法變成金屬片上的溫度刻度<br>(D) 不行，溫度計是利用物質體積隨溫度熱脹冷縮來測量',
          steps: [
            '溫度計的製作原理是利用物質在受熱或冷卻時，某項物理量會呈現「規律且可重複之變化」。',
            '圖中金屬片電阻值與溫度具有明確的一對一對應關係，因此測得電阻即可推求溫度，(A) 正確。',
            '圖形直線未通過原點 (0, 0)，兩者為「一次線性關係」而非「正比關係」，(B) 錯誤。',
            '測溫工具除熱脹冷縮（如水銀、酒精）外，亦有電子溫度計、耳溫槍（紅外線），故 (D) 錯誤。'
          ],
          ans: '正解：(A)'
        }
      },

      /* ---------- Slide 3: Q32 ---------- */
      {
        sec: '聲音反射與回聲', secName: '聲音反射與回聲',
        title: '【第 32 題】回聲測距：往返兩趟 · 介質相同聲速不變',
        points: [
          '發聲至聽見回聲的時間為<b>往返兩趟</b>總時間（\\(t = 0.1\\text{ s}\\)）。',
          '單趟距離 \\(d = \\frac{v \\times t}{2} = \\frac{340 \\times 0.1}{2} = 17\\text{ 公尺}\\)。',
          '介質均為相同空氣且溫度相同，故回聲與原聲<b>聲速相同</b>。',
          '反射與空氣吸收使能量損耗，回聲之<b>響度（音量）較原聲小</b>。'
        ],
        formula: { label: '回聲反射測距公式', tex: '\\text{距離 } d = \\frac{v \\times t}{2} \\quad (t \\text{ 為聲音往返總時間})' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q32"></div>
            <div class="ictrl"><label>回聲延遲時間 \\(t\\)：<span class="ival" id="echo_t">0.10</span> 秒</label>
            <input type="range" id="q32_s" min="6" max="20" step="2" value="10"></div></div>`;
          const draw = () => {
            const raw = +h.querySelector('#q32_s').value;
            const t = (raw / 100).toFixed(2);
            h.querySelector('#echo_t').textContent = t;
            const dist = (340 * (+t) / 2).toFixed(1);
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 人物與牆面
            s += TX(50, 85, '🧍 阿文', { fs: 14, c: '#1e293b' });
            s += BOX(350, 30, 25, 150, { fill: '#94a3b8', stroke: '#475569', sw: 2 });
            s += TX(362, 110, '平滑牆面', { fs: 12, c: '#fff', anchor: 'middle' });

            // 原聲路徑 (去程，粗線)
            s += `<line x1="80" y1="70" x2="350" y2="70" stroke="${BLU}" stroke-width="3"/>`;
            s += TX(210, 62, '原聲去程 (響度大)', { fs: 11, c: BLU, anchor: 'middle' });

            // 回聲路徑 (回程，細虛線)
            s += `<line x1="350" y1="100" x2="80" y2="100" stroke="${RED}" stroke-width="2" stroke-dasharray="4 4"/>`;
            s += TX(210, 115, '回聲返程 (能量衰減，響度較小)', { fs: 11, c: RED, anchor: 'middle' });

            // 雙箭頭距離標記
            s += `<line x1="80" y1="140" x2="350" y2="140" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="80" y1="135" x2="80" y2="145" stroke="#334155" stroke-width="1.5"/>`;
            s += `<line x1="350" y1="135" x2="350" y2="145" stroke="#334155" stroke-width="1.5"/>`;
            s += TX(215, 135, `單趟距離 d ＝ ${dist} 公尺`, { fs: 13, c: GRN, anchor: 'middle' });

            // 底部關鍵條列
            s += BOX(25, 155, 385, 55, { fill: '#fff', stroke: GRN, sw: 1.5 });
            s += TX(35, 175, `• 計算：d ＝ (340 × ${t}) ÷ 2 ＝ ${dist} 公尺`, { fs: 12, c: GRN });
            s += TX(35, 196, '• 性質：同溫同介質 \\(\\implies\\) 聲速相同；反射後 \\(\\implies\\) 響度變小', { fs: 11, c: '#334155' });
            h.querySelector('#fig_q32').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q32_s').oninput = draw; draw();
        },
        caption: '回聲是聲音往返傳播，單趟距離＝聲速×時間÷2＝17公尺；介質相同聲速相同，響度變小。',
        example: {
          q: '【115會考模擬 Q32】阿文對一平滑牆面發出聲音，0.1 秒後聽到回聲，若當時空氣中聲速為 340 公尺/秒，則下列敘述何者正確？<br>(A) 阿文距牆面 34 公尺，且回聲響度相同<br>(B) 阿文距牆面 34 公尺，且回聲聲速相同<br>(C) 阿文距牆面 17 公尺，且回聲響度較小<br>(D) 阿文距牆面 17 公尺，且回聲聲速較慢',
          steps: [
            '聲音自阿文出發碰到牆壁再反射回阿文耳朵，共傳播了兩倍距離：\\(2d = v \\times t\\)。',
            '計算距離：\\(d = \\frac{340 \\times 0.1}{2} = 17\\text{ 公尺}\\)。',
            '聲音在同溫同介質（空氣）中傳播，波速由介質決定，因此回聲與原聲的「聲速相同」。',
            '反射時部分能量被牆壁吸收，在空氣中傳播亦有擴散衰減，因此回聲的「響度較原聲小」。'
          ],
          ans: '正解：(C)'
        }
      },

      /* ---------- Slide 4: Q33 ---------- */
      {
        sec: '比熱與熱量計算', secName: '比熱與熱量計算',
        title: '【第 33 題】熱量公式 H ＝ msΔT · 同質量升溫快比熱小',
        points: [
          '熱量計算公式：\\(H = m \\times s \\times \\Delta T\\)。',
          '同一熱源加熱：加熱時間相同 \\(\\implies\\) 吸收熱量 \\(H\\) 相同。',
          '小文看法錯誤：未固定質量 \\(m\\)，無法單憑升溫快斷定比熱小。',
          '阿揚看法正確：若質量相同，升溫不同則比熱不同，必為不同物質。'
        ],
        formula: { label: '熱量變化公式', tex: 'H = m \\times s \\times \\Delta T \\implies \\Delta T = \\frac{H}{m \\times s}' },
        visual: (h) => {
          h.innerHTML = `<div style="width:100%"><div id="fig_q33"></div>
            <div class="ictrl"><label>檢驗看法：<span class="ival" id="view_txt">小文 vs 阿揚 觀點對照</span></label>
            <input type="range" id="q33_s" min="0" max="1" step="1" value="0"></div></div>`;
          const draw = () => {
            const mode = +h.querySelector('#q33_s').value;
            h.querySelector('#view_txt').textContent = mode === 0 ? '小文看法剖析 (缺少控制變因)' : '阿揚看法剖析 (質量相同判定)';
            let s = BOX(10, 10, 420, 210, { fill: '#f8fafc', stroke: '#cbd5e1' });
            // 坐標軸
            s += `<line x1="45" y1="160" x2="210" y2="160" stroke="#334155" stroke-width="2"/>`;
            s += `<line x1="45" y1="160" x2="45" y2="40" stroke="#334155" stroke-width="2"/>`;
            s += TX(210, 175, '時間 t', { fs: 11, c: '#475569' });
            s += TX(35, 35, '升溫 ΔT', { fs: 11, c: '#475569' });

            // 甲直線 (升溫較快，斜率大)
            s += `<line x1="45" y1="160" x2="160" y2="55" stroke="${RED}" stroke-width="2.5"/>`;
            s += TX(170, 60, '甲', { fs: 14, c: RED });

            // 乙直線 (升溫較慢，斜率小)
            s += `<line x1="45" y1="160" x2="190" y2="105" stroke="${BLU}" stroke-width="2.5"/>`;
            s += TX(200, 110, '乙', { fs: 14, c: BLU });

            // 相同時間虛線
            s += `<line x1="120" y1="40" x2="120" y2="160" stroke="#94a3b8" stroke-dasharray="3 3"/>`;
            s += TX(120, 175, '同時間', { fs: 10, c: '#64748b', anchor: 'middle' });

            // 右側評析卡
            s += BOX(230, 25, 185, 180, { fill: '#fff', stroke: mode === 1 ? GRN : RED, sw: 2 });
            if (mode === 0) {
              s += TX(240, 50, '【小文看法：錯誤 ✘】', { fs: 13, c: RED });
              s += TX(240, 75, '• 小文稱：「甲升溫快，比熱小」', { fs: 11, c: '#334155' });
              s += TX(240, 100, '• 謬誤分析：', { fs: 12, c: RED });
              s += TX(250, 122, '\\(\\Delta T = \\frac{H}{m \\times s}\\)，升溫由', { fs: 11, c: '#334155' });
              s += TX(250, 142, '「質量 m」與「比熱 s」共同決定。', { fs: 11, c: '#334155' });
              s += TX(250, 168, '未說明質量相同，不可斷定！', { fs: 11, c: RED });
            } else {
              s += TX(240, 50, '【阿揚看法：正確 ✔】', { fs: 13, c: GRN });
              s += TX(240, 75, '• 阿揚稱：「若質量相同，', { fs: 11, c: '#334155' });
              s += TX(240, 95, '  甲乙是不同物質」', { fs: 11, c: '#334155' });
              s += TX(240, 120, '• 正確推論：', { fs: 12, c: GRN });
              s += TX(250, 142, 'm 相同且吸熱 H 相同，', { fs: 11, c: '#334155' });
              s += TX(250, 162, '\\(\\Delta T\\) 不同 \\(\\implies\\) 比熱 s 必不同！', { fs: 11, c: GRN });
              s += TX(250, 188, '比熱不同 \\(\\implies\\) 為不同物質！', { fs: 11, c: GRN });
            }
            h.querySelector('#fig_q33').innerHTML = svg('0 0 440 220', s);
          };
          h.querySelector('#q33_s').oninput = draw; draw();
        },
        caption: '升溫幅度由質量與比熱共同決定；未提質量不能比比熱（小文錯）；質量相同則比熱必不同（阿揚對）。',
        example: {
          q: '【115會考模擬 Q33】加熱時間與上升溫度關係如圖(十七)。小文說：由圖可知甲升溫較快，表示甲比熱較小；阿揚說：假如甲乙質量相同，表示甲乙是不同物質。何者正確？<br>(A) 兩人皆對  (B) 兩人皆錯  (C) 小文對阿揚錯  (D) 小文錯阿揚對',
          steps: [
            '依公式 \\(H = m \\cdot s \\cdot \\Delta T \\implies \\Delta T = \\frac{H}{m \\cdot s}\\)。',
            '甲升溫較快（斜率大），代表 \\(m \\cdot s\\) 乘積較小，但在題目未告知兩者質量關係前，無法單獨推論甲的比熱 \\(s\\) 較小，故小文看法錯誤。',
            '若兩者質量 \\(m\\) 相同，升溫不同代表比熱 \\(s\\) 必定不相同。比熱為物質的特性，比熱不同代表兩者必為不同物質，故阿揚看法正確。'
          ],
          ans: '正解：(D)'
        }
      }

    ]
  });
})();

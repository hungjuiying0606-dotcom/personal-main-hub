(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const r={allProjects:[],activeCategory:"all",searchQuery:"",lastUpdated:"--"},g={all:{name:"全部專案",icon:"🌟",heading:"全部專案展示",desc:"點選左側分類標籤或搜尋關鍵字即時篩選。"},nature:{name:"國中自然與實驗",icon:"🧪",badgeClass:"badge-theme-nature",heading:"國中自然與動態實驗室",desc:"收錄國中理化與地球科學動態互動教具、總複習題庫與章節實驗室。"},"fame-escape":{name:"世界名人堂",icon:"🏛️",badgeClass:"badge-theme-fame",heading:"世界名人堂專區",desc:"收錄 12 位跨世代先驅科學家生平傳奇、課堂數位互動教具與密室逃脫解謎。"},tools:{name:"實用工具箱",icon:"🛠️",badgeClass:"badge-theme-tools",heading:"班級互動與數位工具箱",desc:"抽籤、計時、課堂積分、噪音監測與本機 AI Agent 實用工具。"},other:{name:"其他",icon:"💡",badgeClass:"badge-theme-other",heading:"其他專案展示",desc:"跨領域個人創作、教師專區與其他專案。"}};function C(s,n){const t=(s.id||"").toLowerCase(),e=(s.title||"").toLowerCase();return t==="naturelab"||t.includes("book-selector")||e.includes("教師派發")||e.includes("派課")||e.includes("舊版")?"other":["hall-of-fame","nobel","einstein","hubble","darwin","wegener","watson","crick","dna","lin-mari","zhang-heng","hooke","archimedes","galileo","curie","escape"].some(o=>t.includes(o))||e.includes("名人堂")||e.includes("密室逃脫")||e.includes("諾貝爾")||e.includes("愛因斯坦")||e.includes("哈伯")||e.includes("達爾文")||e.includes("韋格納")||e.includes("克立克")||e.includes("華生")||e.includes("林媽利")||e.includes("張衡")||e.includes("虎克")||e.includes("阿基米德")||e.includes("伽利略")||e.includes("居禮")?"fame-escape":t.includes("classbuddy")||t.includes("voice-cloner")||t.includes("agent")||e.includes("工具箱")||e.includes("班級")||n==="computer"?"tools":t.includes("grade")||t.includes("nature")||t.includes("review")||n==="teaching"?"nature":(n==="investing"||t.includes("stock")||n==="other","other")}function S(s,n){const t=(s.id||"").toLowerCase(),e=(s.title||"").toLowerCase();return t.includes("nobel")||e.includes("諾貝爾")?"💥":t.includes("einstein")||e.includes("愛因斯坦")?"⚛️":t.includes("hubble")||e.includes("哈伯")?"🔭":t.includes("darwin")||e.includes("達爾文")?"🐢":t.includes("wegener")||e.includes("韋格納")?"🧩":t.includes("dna")||t.includes("watson")||e.includes("雙螺旋")||e.includes("克立克")||e.includes("華生")?"🧬":t.includes("lin-mari")||e.includes("林媽利")?"💉":t.includes("zhang-heng")||e.includes("張衡")?"🐲":t.includes("hooke")||e.includes("虎克")?"🔬":t.includes("archimedes")||e.includes("阿基米德")?"👑":t.includes("galileo")||e.includes("伽利略")?"🔭":t.includes("curie")||e.includes("居禮")?"✨":t.includes("hall-of-fame")?"🏛️":t.includes("grade9-progress")?"⚡":t.includes("review")?"🎯":t.includes("classbuddy")?"🎒":t.includes("voice")?"🎙️":t.includes("portal")||t.includes("naturelab")?"🔬":t.includes("selector")?"📖":{nature:"🧪","fame-escape":"🏛️",tools:"🛠️",other:"💡"}[n]||"🚀"}async function j(){B(),w(),E(),m();const s="./catalog.json";try{const n=await fetch(s);if(n.ok){const t=await n.json();T(t)}}catch{console.info("使用內建專案索引資料。")}}function B(){r.lastUpdated="2026-08-23",r.allProjects=[{id:"grade9-progress",title:"九年級進度",description:"國中三年級自然第一章直線運動互動教具總覽與各節實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"⚡"},{id:"naturelab-senior-review",title:"九年級複習",description:"理化 3-4 冊總複習互動題庫、概念挖空卷、Kahoot 挑戰與動態實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/review-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"🎯"},{id:"nobel-hub",title:"阿爾弗雷德·諾貝爾",description:"炸藥之父與和平遺產。發明雷管與矽藻土黃色炸藥，設立諾貝爾獎。含 5 大線上互動教具與闢謠特輯。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/nobel.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"💥"},{id:"einstein-hub",title:"阿爾伯特·愛因斯坦",description:"現代物理學之父。提出狹義與廣義相對論、質能互換公式 E=mc²、解釋光電效應與布朗運動。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/einstein.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"⚛️"},{id:"hubble-hub",title:"愛德溫·哈伯",description:"星系天文學之父與觀測宇宙學開創者。發現河外星系，確立哈伯定律證明宇宙正在膨脹。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hubble.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔭"},{id:"darwin-hub",title:"查爾斯·達爾文",description:"演化論之父。搭乘小獵犬號環球科學考察，發表《物種起源》提出天擇說與適者生存。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/darwin.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🐢"},{id:"wegener-hub",title:"阿爾弗雷德·韋格納",description:"大陸漂移學說創始者。提出古生代「盤古大陸」假說，為現代板塊構造學說奠定先驅基石。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/wegener.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🧩"},{id:"watson-crick-hub",title:"華生與克里克 (DNA)",description:"DNA 雙螺旋結構解密者。結合 X 射線晶體繞射 Photo 51 與鹼基互補配對模型，揭開遺傳物質複製奧秘。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/dna.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🧬"},{id:"lin-mari-hub",title:"林媽利 醫師",description:"台灣輸血醫學之母與血型基因研究權威。建立台灣現代化醫院血庫與安全輸血作業準則。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/lin-mari.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"💉"},{id:"zhang-heng-hub",title:"張衡",description:"東漢通才科學大師。發明世界首台地震觀測儀「候風地動儀」，創製以水力運轉之水運渾天儀。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/zhang-heng.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🐲"},{id:"hooke-hub",title:"羅伯特·虎克",description:"顯微鏡之眼與物理力學大師。改良複合顯微鏡觀察軟木塞命名「細胞 (Cell)」，出版《微觀圖誌》。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hooke.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔬"},{id:"archimedes-hub",title:"阿基米德",description:"古希臘物理力學與數學之神。在浴缸中悟出阿基米德浮力原理 (Eureka!)，建立槓桿原理與螺旋抽水機。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/archimedes.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"👑"},{id:"galileo-hub",title:"伽利略·伽利萊",description:"近代科學與實驗物理學之父。首創以望遠鏡觀測天體支持日心說，提出單擺等時性與落體實驗。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/galileo.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔭"},{id:"curie-hub",title:"瑪麗·居禮 (居禮夫人)",description:"放射性研究傳奇先驅。史上首位女性諾貝爾獎得主、唯一獲物理與化學雙諾貝爾獎之科學家，發現元素釙與鐳。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/curie.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"✨"},{id:"classbuddy-classroom-toolbox",title:"班級互動工具箱",description:"提供班級抽籤、小組積分榜、倒數計時、趣味泡泡噪音監測與智慧名單同步。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/classroom-agent-kit/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎒"},{id:"voice-cloner-agent",title:"Agent 代理複製你的聲音",description:"使用 VoxCPM2 在本機錄製參考聲音並生成語音的 AI Agent 工具包。",homepageState:"coming-soon",url:null,categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎙️"},{id:"naturelab",title:"教師派發任務",description:"開始進行課程管理，即時查看學生學習紀錄與成果。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#portal",categoryKey:"other",categoryTitle:"其他",icon:"🔬"},{id:"naturelab-book-selector",title:"舊版互動式網頁",description:"選擇冊別與章節，依照學校課本單元循序學習。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#book-selector",categoryKey:"other",categoryTitle:"其他",icon:"📖"}]}function w(){const s=r.allProjects.length,n=r.allProjects.filter(i=>i.homepageState==="linked").length,t=document.getElementById("stat-total"),e=document.getElementById("stat-active"),a=document.getElementById("last-updated");t&&(t.textContent=`${s} 個專案`),e&&(e.textContent=`${n} 個可開啟`),a&&(a.textContent=r.lastUpdated);const o={all:s,nature:0,"fame-escape":0,tools:0,other:0};r.allProjects.forEach(i=>{o[i.categoryKey]!==void 0&&o[i.categoryKey]++}),Object.keys(o).forEach(i=>{const l=document.querySelector(`[data-count-for="${i}"]`);l&&(l.textContent=o[i])})}function m(){const s=document.getElementById("cards-container"),n=document.getElementById("empty-state"),t=document.getElementById("displayed-cards-count"),e=document.getElementById("current-category-heading"),a=document.getElementById("current-category-desc");if(!s)return;const o=r.allProjects.filter(l=>{const c=r.activeCategory==="all"||l.categoryKey===r.activeCategory,d=r.searchQuery.trim().toLowerCase(),u=!d||l.title.toLowerCase().includes(d)||l.description.toLowerCase().includes(d)||l.categoryTitle.toLowerCase().includes(d);return c&&u}),i=g[r.activeCategory]||g.all;if(e&&(e.innerHTML=`<span>${i.icon}</span><span>${r.searchQuery?`搜尋結果：「${r.searchQuery}」`:i.heading}</span>`),a&&(a.textContent=r.searchQuery?`共找到 ${o.length} 個相符的專案`:i.desc),t&&(t.textContent=o.length),s.innerHTML="",o.length===0){s.classList.add("hidden"),n&&n.classList.remove("hidden");return}s.classList.remove("hidden"),n&&n.classList.add("hidden"),o.forEach((l,c)=>{var f,y;const d=document.createElement("article"),u=l.homepageState==="linked"&&l.url,h=((f=g[l.categoryKey])==null?void 0:f.badgeClass)||"badge-theme-other";d.id=`card-${l.id}`,d.className="project-card bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in group",d.style.animationDelay=`${c*.04}s`,d.innerHTML=`
      <div class="space-y-3.5">
        <!-- 頂部標籤列：主題 Badge + 狀態 Badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${h}">
            <span>${((y=g[l.categoryKey])==null?void 0:y.icon)||"📂"}</span>
            <span>${l.categoryTitle}</span>
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${u?"status-badge-live":"status-badge-soon"}">
            ${u?'<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 已上線':"⏳ 準備中"}
          </span>
        </div>

        <!-- 專案標題與圖示 -->
        <div class="flex items-start gap-3 pt-1">
          <span class="text-2xl sm:text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
            ${l.icon}
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
              ${b(l.title)}
            </h3>
          </div>
        </div>

        <!-- 1~2 句功能說明 -->
        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          ${b(l.description)}
        </p>
      </div>

      <!-- 底部操作按鈕 -->
      <div class="pt-4 mt-3 border-t border-slate-100/80">
        ${u?`
          <a
            href="${b(l.url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 shadow-sm hover:shadow active:scale-[0.99] transition-all"
          >
            <span>立即體驗</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        `:`
          <div class="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-100 cursor-not-allowed">
            <span>🔒 正在籌備中</span>
          </div>
        `}
      </div>
    `,s.appendChild(d)})}function E(){["nature","fame-escape","tools","other"].forEach(n=>{const t=document.querySelector(`[data-subnav-for="${n}"]`);if(!t)return;if(n==="nature"){t.innerHTML=`
        <!-- 九年級進度 巢狀群組 -->
        <div class="nested-group mb-1">
          <button
            type="button"
            class="nested-parent-toggle w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
            data-nested-toggle="grade9-progress-sub"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm flex-shrink-0">⚡</span>
              <span class="truncate">九年級進度</span>
            </span>
            <svg class="nested-arrow w-3 h-3 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          <div id="grade9-progress-sub" class="nested-subnav is-open space-y-1 pl-1">
            <!-- 1. 課本配套 -->
            <div class="nested-sub-group">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1 rounded-md text-[11.5px] font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
                data-sub-toggle="sub-textbook"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span>📖</span>
                  <span>課本配套</span>
                </span>
                <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="sub-textbook" class="nested-subnav is-open space-y-0.5 pl-2">
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 課本配套 1-1 時間的測量" data-embed-icon="📖" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=textbook&sec=1-1" data-embed-desc="單擺等時性、擺長、擺角與擺動週期探究實驗">
                  <span>1-1 時間的測量</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 課本配套 1-2 位置與位移" data-embed-icon="📖" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=textbook&sec=1-2" data-embed-desc="座標軸設定、路程 vs 位移與方向性作圖">
                  <span>1-2 位置與位移</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 課本配套 1-3 速度與速率" data-embed-icon="📖" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=textbook&sec=1-3" data-embed-desc="平均速度、瞬時速度、x-t 圖與 v-t 圖轉換規律">
                  <span>1-3 速度與速率</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 課本配套 1-4 等加速度運動" data-embed-icon="📖" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=textbook&sec=1-4" data-embed-desc="加速度定義、打點計時器紙帶分析、自由落體與三大等加速公式">
                  <span>1-4 等加速度運動</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
              </div>
            </div>

            <!-- 2. 習作題型 -->
            <div class="nested-sub-group">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1 rounded-md text-[11.5px] font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
                data-sub-toggle="sub-workbook"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span>✏️</span>
                  <span>習作題型</span>
                </span>
                <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="sub-workbook" class="nested-subnav max-h-0 opacity-0 overflow-hidden space-y-0.5 pl-2">
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 習作題型 1-1 時間的測量" data-embed-icon="✏️" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=workbook&sec=1-1" data-embed-desc="配套習作進階計算與觀念判讀之互動教具">
                  <span>1-1 時間的測量</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 習作題型 1-2 位置與位移" data-embed-icon="✏️" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=workbook&sec=1-2" data-embed-desc="配套習作進階計算與觀念判讀之互動教具">
                  <span>1-2 位置與位移</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 習作題型 1-3 速度與速率" data-embed-icon="✏️" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=workbook&sec=1-3" data-embed-desc="配套習作進階計算與觀念判讀之互動教具">
                  <span>1-3 速度與速率</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 習作題型 1-4 等加速度運動" data-embed-icon="✏️" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=workbook&sec=1-4" data-embed-desc="配套習作進階計算與觀念判讀之互動教具">
                  <span>1-4 等加速度運動</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
              </div>
            </div>

            <!-- 3. 考卷檢討 -->
            <div class="nested-sub-group">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1 rounded-md text-[11.5px] font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
                data-sub-toggle="sub-exams"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span>📄</span>
                  <span>考卷檢討</span>
                </span>
                <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="sub-exams" class="nested-subnav max-h-0 opacity-0 overflow-hidden space-y-0.5 pl-2">
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 考卷檢討 單元卷 01" data-embed-icon="📄" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=unit1" data-embed-desc="配套單元卷 01 (1-1 ~ 1-2) 重點難題動態視覺化題庫">
                  <span>單元卷 01 (1-1~1-2)</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 考卷檢討 單元卷 02" data-embed-icon="📄" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=unit2" data-embed-desc="配套單元卷 02 (1-3 ~ 1-4) 重點難題動態視覺化題庫">
                  <span>單元卷 02 (1-3~1-4)</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
                <button type="button" class="nested-item-btn" data-embed-title="九年級進度 · 考卷檢討 綜合卷 03" data-embed-icon="📊" data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html?cat=unit3" data-embed-desc="配套全章考卷 03 綜合大題動態視覺化題庫">
                  <span>綜合卷 03 (全章綜合)</span><span class="text-[10px] text-slate-400 font-mono">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 九年級複習 -->
        <button
          type="button"
          data-project-target="naturelab-senior-review"
          class="subnav-item w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
          title="九年級複習"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-sm flex-shrink-0">🎯</span>
            <span class="truncate">九年級複習</span>
          </span>
          <span class="text-[10px] text-slate-400 font-mono">→</span>
        </button>
      `;return}const e=r.allProjects.filter(a=>a.categoryKey===n);if(e.length===0){t.innerHTML='<div class="text-[11px] text-slate-400 px-3 py-1">暫無專案</div>';return}t.innerHTML=e.map(a=>`
      <button
        type="button"
        data-project-target="${a.id}"
        class="subnav-item w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
        title="點擊查看「${b(a.title)}」"
      >
        <span class="flex items-center gap-1.5 truncate">
          <span class="text-sm flex-shrink-0">${a.icon}</span>
          <span class="truncate font-medium">${b(a.title)}</span>
        </span>
        <span class="text-[10px] text-slate-400 font-mono">→</span>
      </button>
    `).join("")}),document.querySelectorAll(".subnav-item").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-project-target");I(e)})}),document.querySelectorAll(".nested-parent-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-nested-toggle"),a=document.getElementById(e),o=n.querySelector(".nested-arrow");if(a){const i=a.classList.contains("is-open");a.classList.toggle("is-open",!i),o&&o.classList.toggle("is-rotated",!i)}})}),document.querySelectorAll(".nested-sub-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-sub-toggle"),a=document.getElementById(e),o=n.querySelector(".sub-arrow");if(a){const i=a.classList.contains("is-open");a.classList.toggle("is-open",!i),o&&o.classList.toggle("is-rotated",!i)}})}),document.querySelectorAll(".nested-item-btn").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-embed-title"),a=n.getAttribute("data-embed-icon")||"⚡",o=n.getAttribute("data-embed-url"),i=n.getAttribute("data-embed-desc");document.querySelectorAll(".subnav-item, .nested-item-btn").forEach(l=>l.classList.remove("active-subitem")),n.classList.add("active-subitem"),L({title:e,icon:a,url:o,description:i})})})}function I(s){var e;const n=r.allProjects.find(a=>a.id===s);if(!n)return;r.activeCategory=n.categoryKey,v(n.categoryKey);const t=document.getElementById("filter-active-count");t&&(t.textContent=((e=g[n.categoryKey])==null?void 0:e.name)||n.categoryKey),document.querySelectorAll(".subnav-item").forEach(a=>{const o=a.getAttribute("data-project-target")===s;a.classList.toggle("active-subitem",o)}),n.url?L(n):(p(),m())}function L(s){const n=document.getElementById("cards-container"),t=document.getElementById("empty-state"),e=document.getElementById("embed-viewer-container"),a=document.getElementById("embed-iframe"),o=document.getElementById("embed-item-title"),i=document.getElementById("embed-item-icon"),l=document.getElementById("embed-external-link"),c=document.getElementById("current-category-heading"),d=document.getElementById("current-category-desc");n&&n.classList.add("hidden"),t&&t.classList.add("hidden"),e&&e.classList.remove("hidden"),o&&(o.textContent=`${s.title} - 課堂教學旗艦網頁`),i&&(i.textContent=s.icon),l&&(l.href=s.url),a&&(a.src=s.url),c&&(c.innerHTML=`<span>${s.icon}</span><span>${b(s.title)}</span>`),d&&(d.textContent=s.description||"探索先驅科學家傳奇生平、數位互動教具與閱讀理解密室逃脫。"),e==null||e.scrollIntoView({behavior:"smooth",block:"start"})}function p(){const s=document.getElementById("embed-viewer-container"),n=document.getElementById("embed-iframe");s&&s.classList.add("hidden"),n&&(n.src="about:blank"),document.querySelectorAll(".subnav-item").forEach(t=>t.classList.remove("active-subitem")),m()}function v(s){const n=document.querySelectorAll(".category-subnav");document.querySelectorAll(".filter-btn").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-filter")===s)}),n.forEach(e=>{const a=e.getAttribute("data-subnav-for"),o=e.closest(".category-group"),i=o?o.querySelector(".chevron-arrow"):null;a===s?(e.classList.add("is-open"),i&&i.classList.add("is-rotated")):(e.classList.remove("is-open"),i&&i.classList.remove("is-rotated"))})}function A(){const s=document.getElementById("embed-back-btn");s&&s.addEventListener("click",()=>{p()});const n=document.querySelectorAll(".filter-btn"),t=document.getElementById("filter-active-count");n.forEach(i=>{i.addEventListener("click",l=>{var y;const c=i.getAttribute("data-filter")||"all",d=r.activeCategory===c,u=i.closest(".category-group"),h=u?u.querySelector(".category-subnav"):null,f=u?u.querySelector(".chevron-arrow"):null;if(d&&h&&c!=="all"){const x=h.classList.contains("is-open");h.classList.toggle("is-open",!x),f&&f.classList.toggle("is-rotated",!x);return}r.activeCategory=c,t&&(t.textContent=((y=g[c])==null?void 0:y.name)||c),document.querySelectorAll(".subnav-item").forEach(x=>x.classList.remove("active-subitem")),p(),v(c),m()})});const e=document.getElementById("search-input"),a=document.getElementById("clear-search-btn");e&&e.addEventListener("input",i=>{r.searchQuery=i.target.value,a&&a.classList.toggle("hidden",!r.searchQuery),p(),m()}),a&&a.addEventListener("click",()=>{e&&(e.value="",r.searchQuery="",a.classList.add("hidden"),p(),m(),e.focus())});const o=document.getElementById("reset-filter-btn");o&&o.addEventListener("click",()=>{r.activeCategory="all",r.searchQuery="",e&&(e.value=""),a&&a.classList.add("hidden"),t&&(t.textContent="全部"),p(),v("all"),m()})}function T(s){r.allProjects=[],r.lastUpdated=s.lastUpdated||s.generatedAt||new Date().toISOString().split("T")[0],(s.categories||[]).forEach(n=>{(n.sites||[]).forEach(t=>{var l,c;const e=C(t,n.id),a=((l=g[e])==null?void 0:l.name)||n.title||"其他",o=S(t,e);let i=null;t.homepageState==="linked"&&(i=t.url||t.deployments&&((c=t.deployments[0])==null?void 0:c.url)||null),r.allProjects.push({id:t.id,title:t.title,description:t.description||"",status:t.status||"active",homepageState:t.homepageState||"linked",url:i,categoryKey:e,categoryTitle:a,icon:o})})}),w(),E(),m()}function b(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function k(){A(),j()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k):k();

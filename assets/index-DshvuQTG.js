(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const d={allProjects:[],activeCategory:"all",searchQuery:"",lastUpdated:"--"},x={all:{name:"全部專案",icon:"🌟",heading:"全部專案展示",desc:"點選左側分類標籤或搜尋關鍵字即時篩選。"},nature:{name:"國中自然與實驗",icon:"🧪",badgeClass:"badge-theme-nature",heading:"國中自然與動態實驗室",desc:"收錄國中理化與地球科學動態互動教具、總複習題庫與章節實驗室。"},"fame-escape":{name:"世界名人堂",icon:"🏛️",badgeClass:"badge-theme-fame",heading:"世界名人堂專區",desc:"收錄 12 位跨世代先驅科學家生平傳奇、課堂數位互動教具與密室逃脫解謎。"},tools:{name:"實用工具箱",icon:"🛠️",badgeClass:"badge-theme-tools",heading:"班級互動與數位工具箱",desc:"抽籤、計時、課堂積分、噪音監測與本機 AI Agent 實用工具。"},workshop:{name:"研習",icon:"📝",badgeClass:"badge-theme-workshop",heading:"研習課程與資源",desc:"收錄各場次教師專業研習、AI 融入教學互動討論牆與精選講義筆記。"},other:{name:"其他",icon:"💡",badgeClass:"badge-theme-other",heading:"其他專案展示",desc:"跨領域個人創作、教師專區與其他專案。"}};function A(i,n){const t=(i.id||"").toLowerCase(),e=(i.title||"").toLowerCase();return t==="naturelab"||t.includes("book-selector")||t.includes("master-teachers")||t.includes("agang")||t.includes("ijun")||e.includes("教師派發")||e.includes("派課")||e.includes("舊版")||e.includes("阿剛")||e.includes("奕鈞")||e.includes("名師")?"other":["hall-of-fame","course-intro","nobel","einstein","hubble","darwin","wegener","watson","crick","dna","lin-mari","zhang-heng","hooke","archimedes","galileo","curie","escape"].some(a=>t.includes(a))||e.includes("名人堂")||e.includes("課程介紹")||e.includes("密室逃脫")||e.includes("諾貝爾")||e.includes("愛因斯坦")||e.includes("哈伯")||e.includes("達爾文")||e.includes("韋格納")||e.includes("克立克")||e.includes("華生")||e.includes("林媽利")||e.includes("張衡")||e.includes("虎克")||e.includes("阿基米德")||e.includes("伽利略")||e.includes("居禮")?"fame-escape":n==="workshop"||t.includes("workshop")||t.includes("20260829")||e.includes("研習")||e.includes("簡子惠")||e.includes("三師爸")?"workshop":t.includes("classbuddy")||t.includes("voice-cloner")||t.includes("agent")||e.includes("工具箱")||e.includes("班級")||n==="computer"?"tools":t.includes("grade")||t.includes("nature")||t.includes("review")||n==="teaching"?"nature":(n==="investing"||t.includes("stock")||n==="other","other")}function S(i,n){const t=(i.id||"").toLowerCase(),e=(i.title||"").toLowerCase();return t.includes("course-intro")||e.includes("課程介紹")?"📋":t.includes("nobel")||e.includes("諾貝爾")?"💥":t.includes("einstein")||e.includes("愛因斯坦")?"⚛️":t.includes("hubble")||e.includes("哈伯")?"🔭":t.includes("darwin")||e.includes("達爾文")?"🐢":t.includes("wegener")||e.includes("韋格納")?"🧩":t.includes("dna")||t.includes("watson")||e.includes("雙螺旋")||e.includes("克立克")||e.includes("華生")?"🧬":t.includes("lin-mari")||e.includes("林媽利")?"💉":t.includes("zhang-heng")||e.includes("張衡")?"🐲":t.includes("hooke")||e.includes("虎克")?"🔬":t.includes("archimedes")||e.includes("阿基米德")?"👑":t.includes("galileo")||e.includes("伽利略")?"🔭":t.includes("curie")||e.includes("居禮")?"✨":t.includes("hall-of-fame")?"🏛️":t.includes("grade9-progress")?"⚡":t.includes("review")?"🎯":t.includes("classbuddy")?"🎒":t.includes("voice")?"🎙️":t.includes("jian")||e.includes("簡子惠")?"👩‍🏫":t.includes("sanshiba")||e.includes("三師爸")?"👨‍🏫":t.includes("workshop")||e.includes("研習")?"📝":t.includes("master-teachers")||e.includes("名師")?"🌟":t.includes("agang")||e.includes("阿剛")||e.includes("剛好整合")?"🪄":t.includes("ijun")||e.includes("奕鈞")||e.includes("備課室")?"📚":t.includes("portal")||t.includes("naturelab")?"🔬":t.includes("selector")?"📖":{nature:"🧪","fame-escape":"🏛️",tools:"🛠️",workshop:"📝",other:"💡"}[n]||"🚀"}async function j(){$(),L(),B(),h();const i=`./catalog.json?_t=${Date.now()}`;try{const n=await fetch(i,{cache:"no-store"});if(n.ok){const t=await n.json();q(t)}}catch{console.info("使用內建專案索引資料。")}}function $(){d.lastUpdated="2026-08-23",d.allProjects=[{id:"grade9-progress",title:"九年級進度",description:"國中三年級自然第一章直線運動互動教具總覽與各節實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"⚡"},{id:"naturelab-senior-review",title:"九年級複習",description:"理化 3-4 冊總複習互動題庫、概念挖空卷、Kahoot 挑戰與動態實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/review-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"🎯"},{id:"hall-of-fame-course-intro",title:"課程介紹",description:"世界名人堂課程介紹與上課規矩：課堂時間流程、平時成績與學習單計分方式、平板使用須知與加扣分規範。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/course-intro.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"📋"},{id:"nobel-hub",title:"阿爾弗雷德·諾貝爾",description:"炸藥之父與和平遺產。發明雷管與矽藻土黃色炸藥，設立諾貝爾獎。含 5 大線上互動教具與闢謠特輯。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/nobel.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"💥"},{id:"einstein-hub",title:"阿爾伯特·愛因斯坦",description:"現代物理學之父。提出狹義與廣義相對論、質能互換公式 E=mc²、解釋光電效應與布朗運動。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/einstein.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"⚛️"},{id:"hubble-hub",title:"愛德溫·哈伯",description:"星系天文學之父與觀測宇宙學開創者。發現河外星系，確立哈伯定律證明宇宙正在膨脹。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hubble.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔭"},{id:"darwin-hub",title:"查爾斯·達爾文",description:"演化論之父。搭乘小獵犬號環球科學考察，發表《物種起源》提出天擇說與適者生存。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/darwin.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🐢"},{id:"wegener-hub",title:"阿爾弗雷德·韋格納",description:"大陸漂移學說創始者。提出古生代「盤古大陸」假說，為現代板塊構造學說奠定先驅基石。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/wegener.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🧩"},{id:"watson-crick-hub",title:"華生與克里克 (DNA)",description:"DNA 雙螺旋結構解密者。結合 X 射線晶體繞射 Photo 51 與鹼基互補配對模型，揭開遺傳物質複製奧秘。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/dna.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🧬"},{id:"lin-mari-hub",title:"林媽利 醫師",description:"台灣輸血醫學之母與血型基因研究權威。建立台灣現代化醫院血庫與安全輸血作業準則。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/lin-mari.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"💉"},{id:"zhang-heng-hub",title:"張衡",description:"東漢通才科學大師。發明世界首台地震觀測儀「候風地動儀」，創製以水力運轉之水運渾天儀。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/zhang-heng.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🐲"},{id:"hooke-hub",title:"羅伯特·虎克",description:"顯微鏡之眼與物理力學大師。改良複合顯微鏡觀察軟木塞命名「細胞 (Cell)」，出版《微觀圖誌》。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hooke.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔬"},{id:"archimedes-hub",title:"阿基米德",description:"古希臘物理力學與數學之神。在浴缸中悟出阿基米德浮力原理 (Eureka!)，建立槓桿原理與螺旋抽水機。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/archimedes.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"👑"},{id:"galileo-hub",title:"伽利略·伽利萊",description:"近代科學與實驗物理學之父。首創以望遠鏡觀測天體支持日心說，提出單擺等時性與落體實驗。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/galileo.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔭"},{id:"curie-hub",title:"瑪麗·居禮 (居禮夫人)",description:"放射性研究傳奇先驅。史上首位女性諾貝爾獎得主、唯一獲物理與化學雙諾貝爾獎之科學家，發現元素釙與鐳。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/curie.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"✨"},{id:"classbuddy-classroom-toolbox",title:"班級互動工具箱",description:"提供班級抽籤、小組積分榜、倒數計時、趣味泡泡噪音監測與智慧名單同步。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/classroom-agent-kit/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎒"},{id:"workshop-20260829-jian-padlet",title:"20260829簡子惠 · Padlet 互動討論牆",description:"簡子惠老師 20260829 AI 融入教學研習 Padlet 互動討論牆與即時共作區。",homepageState:"linked",url:"https://padlet.com/azt156/20260829-ai-z14amg9xmuz0p1mj",categoryKey:"workshop",categoryTitle:"研習",icon:"👩‍🏫"},{id:"workshop-20260829-jian-notion",title:"20260829簡子惠 · Notion 研習講義筆記",description:"簡子惠老師 20260829 AI 融入教學研習 Notion 課程講義、實戰教材與重點整理。",homepageState:"linked",url:"https://azt156.notion.site/20260829-AI-3ca9ae758af38008bca0fd341bb26685",categoryKey:"workshop",categoryTitle:"研習",icon:"👩‍🏫"},{id:"workshop-20260829-sanshiba-padlet",title:"20260829三師爸 · Padlet 互動討論牆",description:"三師爸 20260829 AI Agent 課堂應用與實戰研習 Padlet 互動討論牆。",homepageState:"linked",url:"https://padlet.com/mathruffian/20260829-ai-agent-xowg4eol37wu4jml",categoryKey:"workshop",categoryTitle:"研習",icon:"👨‍🏫"},{id:"master-teachers-hub",title:"教育名師數位教學資源導航",description:"精選全台教育先驅與數位教學大師資源：阿剛老師「剛好整合所」與奕鈞老師「IJUN AI 備課室」。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/master-teachers-hub.html",categoryKey:"other",categoryTitle:"其他",icon:"🌟"},{id:"naturelab",title:"教師派發任務",description:"開始進行課程管理，即時查看學生學習紀錄與成果。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#portal",categoryKey:"other",categoryTitle:"其他",icon:"🔬"},{id:"naturelab-book-selector",title:"舊版互動式網頁",description:"選擇冊別與章節，依照學校課本單元循序學習。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#book-selector",categoryKey:"other",categoryTitle:"其他",icon:"📖"}]}function L(){const i=d.allProjects.length,n=d.allProjects.filter(l=>l.homepageState==="linked").length,t=document.getElementById("stat-total"),e=document.getElementById("stat-active"),s=document.getElementById("last-updated");t&&(t.textContent=`${i} 個專案`),e&&(e.textContent=`${n} 個可開啟`),s&&(s.textContent=d.lastUpdated);const a={all:i,nature:0,"fame-escape":0,tools:0,workshop:0,other:0};d.allProjects.forEach(l=>{a[l.categoryKey]!==void 0&&a[l.categoryKey]++}),Object.keys(a).forEach(l=>{const o=document.querySelector(`[data-count-for="${l}"]`);o&&(o.textContent=a[l])})}function h(){const i=document.getElementById("cards-container"),n=document.getElementById("empty-state"),t=document.getElementById("displayed-cards-count"),e=document.getElementById("current-category-heading"),s=document.getElementById("current-category-desc");if(!i)return;const a=d.allProjects.filter(o=>{const u=d.activeCategory==="all"||o.categoryKey===d.activeCategory,c=d.searchQuery.trim().toLowerCase(),p=!c||o.title.toLowerCase().includes(c)||o.description.toLowerCase().includes(c)||o.categoryTitle.toLowerCase().includes(c);return u&&p}),l=x[d.activeCategory]||x.all;if(e&&(e.innerHTML=`<span>${l.icon}</span><span>${d.searchQuery?`搜尋結果：「${d.searchQuery}」`:l.heading}</span>`),s&&(s.textContent=d.searchQuery?`共找到 ${a.length} 個相符的專案`:l.desc),t&&(t.textContent=a.length),i.innerHTML="",a.length===0){i.classList.add("hidden"),n&&n.classList.remove("hidden");return}i.classList.remove("hidden"),n&&n.classList.add("hidden"),a.forEach((o,u)=>{var g,b;const c=document.createElement("article"),p=o.homepageState==="linked"&&o.url,r=((g=x[o.categoryKey])==null?void 0:g.badgeClass)||"badge-theme-other";c.id=`card-${o.id}`,c.className="project-card bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in group",c.style.animationDelay=`${u*.04}s`,c.innerHTML=`
      <div class="space-y-3.5">
        <!-- 頂部標籤列：主題 Badge + 狀態 Badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${r}">
            <span>${((b=x[o.categoryKey])==null?void 0:b.icon)||"📂"}</span>
            <span>${o.categoryTitle}</span>
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${p?"status-badge-live":"status-badge-soon"}">
            ${p?'<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 已上線':"⏳ 準備中"}
          </span>
        </div>

        <!-- 專案標題與圖示 -->
        <div class="flex items-start gap-3 pt-1">
          <span class="text-2xl sm:text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
            ${o.icon}
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
              ${m(o.title)}
            </h3>
          </div>
        </div>

        <!-- 1~2 句功能說明 -->
        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          ${m(o.description)}
        </p>
      </div>

      <!-- 底部操作按鈕 -->
      <div class="pt-4 mt-3 border-t border-slate-100/80">
        ${p?`
          <a
            href="${m(o.url)}"
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
    `,i.appendChild(c)})}const E={textbook:{key:"textbook",name:"課本配套",icon:"📖",sections:[{id:"tb-1-1",name:"1-1 時間的測量",isOpenDefault:!0,items:[{page:"P.7～8 探索 1-1",title:"單擺變因控制虛擬實驗室",file:"pendulum-lab.html",icon:"⏱️",desc:"擺長、擺角與質量的控制變因探索，搭配自動 10 次計時碼錶與擺鐘調校任務。"},{page:"P.8 例題 1-1",title:"單擺圖表斜率解析器",file:"pendulum-graph-analyzer.html",icon:"📈",desc:"實體甲乙雙擺同步擺動與動態打點，切換標準斜率（週期）vs 翻轉陷阱坐標軸。"}]},{id:"tb-1-2",name:"1-2 位置與位移",items:[{page:"P.10～11 例題 1-2",title:"數線位移與路徑長互動沙盒",file:"displacement-sandbox.html",icon:"↔️",desc:"正負數線點擊移動、位移向量箭頭（Δx）vs 累加足跡線（S）與折返跑例題。"}]},{id:"tb-1-3",name:"1-3 速度與速率",items:[{page:"P.12～14",title:"泳池折返跑與區間測速沙盒",file:"speed-velocity-sandbox.html",icon:"🏊",desc:"25m 泳池折返平均速度為零的視覺對比，搭配 8025m 國道隧道區間測速執法挑戰。"},{page:"P.15～16 例題 1-4",title:"x-t ↔ v-t 雙向動態轉換器與跑道",file:"motion-graph-simulator.html",icon:"🏎️",desc:"實體數線跑道、x-t 圖斜率與 v-t 圖階梯水平線三視圖實時同步連動。"},{page:"P.17 例題 1-5",title:"v-t 圖面積求位移與路徑長解析器",file:"vt-area-displacement-analyzer.html",icon:"📐",desc:"上方面積（正向位移）vs 下方面積（負向折返）動態填色與幾何公式拆解。"}]},{id:"tb-1-4",name:"1-4 等加速度運動",items:[{page:"P.18～20 探索 1-2",title:"打點計時器與紙帶分析實驗室",file:"ticker-tape-lab.html",icon:"📏",desc:"50Hz 打點計時器模擬、可拖曳透明直尺量測點距與逐點速度/加速度分析表。"},{page:"P.21 圖 1-19/20",title:"a 與 v 方向關係：推力與煞車沙盒",file:"acceleration-velocity-sandbox.html",icon:"🚀",desc:"賽車即時雙向量箭頭、推力火焰 vs 煞車煙霧，破解「負加速度必為減速」迷思。"},{page:"P.21 圖 1-21",title:"等加速度 v-t 圖斜率比較器",file:"vt-slope-comparator.html",icon:"📈",desc:"甲乙雙車同起跑線競速、斜率越大代表加速度越大，附時間/速度雙掃描射線。"},{page:"P.22～23 圖 1-22/23",title:"v-t ↔ a-t 雙向對照與閃頻實驗室",file:"vt-at-converter-lab.html",icon:"⚡",desc:"甲車（加速斜線/正水平線）vs 乙車（減速斜線/負水平線）閃頻照片軌跡對照。"},{page:"P.24 例題 1-7",title:"例題 1-7：穿過時間軸折返解析器",file:"vt-crossing-axis-analyzer.html",icon:"🎯",desc:"斜直線穿過時間軸的物理意義：正向減速 (0~10s) ➔ 速度為零折返點 (t=10s) ➔ 負向加速。"},{page:"P.24 例題 1-8",title:"例題 1-8：a-t 階梯與速度累積儀",file:"at-ladder-velocity-accumulator.html",icon:"🪜",desc:"a-t 階梯面積＝速度變化量（Δv = a × Δt）；實時同步生成 v-t 圖與賽車跑道。"},{page:"P.25 圖 1-24/25",title:"波以耳真空管 vs 比薩斜塔實驗室",file:"boyle-vacuum-freefall-lab.html",icon:"🪶",desc:"大氣管 vs 真空管羽毛硬幣下落對比，可調氣壓幫浦與毫秒著地感應器。"},{page:"P.26 圖 1-26",title:"自由落體 g=9.8 閃頻與高度測量儀",file:"freefall-gravity-analyzer.html",icon:"🍎",desc:"重力加速度 g=9.8 速度階梯、閃頻等時點距比例 (1:3:5:7)、多天體引力與 v-t 面積求樓高。"}]}]},workbook:{key:"workbook",name:"習作題型",icon:"✏️",sections:[{id:"wb-1-1",name:"1-1 時間的測量",items:[{page:"習作 P.3 題2-3",title:"三人三球單擺同頻 vs 擺長週期減半",file:"pendulum-mass-length-lab.html",icon:"⏱️",desc:"30g/40g/50g 三球質量無關同頻擺動 (T₁=T₂=T₃)；擺長 1/4 倍週期減半對比。"}]},{id:"wb-1-2",name:"1-2 位置與位移",items:[{page:"習作 P.3 第4題",title:"三人數線：觀測者基準點動態切換器",file:"relative-position-observer-lab.html",icon:"🎯",desc:"一鍵切換小碩/小雄/小麗為基準點，動態計算東/西方相對方向與距離。"},{page:"習作 P.3 第5題",title:"網格迷宮螞蟻爬行：位移 vs 路徑長",file:"ant-grid-displacement-lab.html",icon:"🐜",desc:"1cm 方格網上自由繪製路徑，實時計算足跡路徑長（S）與起訖點位移向量（Δx）。"},{page:"習作 P.4 第6題",title:"x-t 圖山峰山谷：折返點動態掃描儀",file:"xt-peaks-valleys-turnaround-lab.html",icon:"📈",desc:"喬丹南北跑道與 x-t 折線圖同步掃描，實時偵測波峰與波谷 3 次改變運動方向。"},{page:"習作 P.4 第7題 (會考)",title:"直排輪直線甲 vs S形乙：雙軌跡沙盒",file:"roller-skating-trajectory-lab.html",icon:"🛼",desc:"P點到Q點：位移大小 甲＝乙（最短直線）；S形蛇行幅度可調，路徑長 甲＜乙。"}]},{id:"wb-1-3",name:"1-3 速度與速率",items:[{page:"習作 P.4 第9題 (會考)",title:"Google Maps 地圖導航 4大物理量對照儀",file:"navigation-displacement-speed-lab.html",icon:"🗺️",desc:"瀑布步道到大草原：步行 vs 開車位移完全相同；路徑長、時間、速率與速度全對比。"},{page:"習作 P.5 第10題",title:"奧運 50m 泳池 100m 自由式折返挑戰",file:"olympic-swim-displacement-speed-lab.html",icon:"🏊",desc:"折返回到原點全程位移＝0m；路徑長 100m，平均速率 2.13 m/s ＞ 2 m/s。"},{page:"習作 P.5 第11題",title:"小雯與沛沛散步：x-t 圖相遇 vs 速度斜率",file:"xt-intersection-chase-lab.html",icon:"🏃",desc:"2秒相遇交點 (3m) 破盲；斜率三角形解析沛沛速度 (+1.5 m/s) ＞ 小雯 (+0.5 m/s)。"},{page:"習作 P.5 第13題 (會考)",title:"四車 v-t 圖與實體跑道車距變化實驗室",file:"four-cars-vt-distance-lab.html",icon:"🏎️",desc:"甲正等速/乙靜止/丙反向/丁正加速；雷射測距雷達解析丙丁背向行駛車距越來越遠。"},{page:"習作 P.6 第14題",title:"x-t 圖四時段：正向/靜止/折返模擬儀",file:"xt-four-segments-motion-lab.html",icon:"🏃",desc:"0~2s 正向 ➔ 2~3s 水平靜止 (v=0) ➔ 3~7s 負向折返 ➔ 7~10s 再度正向動態對照。"},{page:"習作 P.6 第16題",title:"物理量方向性羅盤分類器 (向量vs純量)",file:"physics-quantities-vector-scalar-lab.html",icon:"🧭",desc:"360° 羅盤探測位移/速度/加速度/位置（向量）vs 路徑長/速率/時間/質量（純量）。"},{page:"習作 P.7 第19題",title:"x-t vs v-t 四圖同構對照儀 (乙＝丙)",file:"motion-graphs-equivalence-matcher.html",icon:"📈",desc:"甲(x-t水平靜止)/乙(x-t斜線等速)/丙(v-t水平等速)/丁(v-t斜線等加速)；一鍵配對乙＝丙。"},{page:"習作 P.8 素養活用篇",title:"搭火車去旅行：時刻表速率 vs 速度與進站v-t",file:"train-travel-speed-velocity-lab.html",icon:"🚆",desc:"臺南至屏東路徑長 67.6km ➔ 區間丙平均速率 45km/h；彎道位移小 ➔ 平均速度約 35km/h。"},{page:"習作 P.9 素養活用篇",title:"200m 短跑競藝：彎道路徑長 vs 極速加速度",file:"track-200m-sprint-lab.html",icon:"🏃",desc:"200m是彎道路徑長；55~100m (t1~t2) 達最高速率；彎道方向改變屬於加速度運動！"}]},{id:"wb-1-4",name:"1-4 等加速度運動",items:[{page:"習作 P.6 題組17-18",title:"四條紙帶甲乙丙丁：打點痕跡解析",file:"four-tapes-ticker-timer-lab.html",icon:"📏",desc:"甲乙等速（乙 2.0cm ＞ 甲 1.5cm 速度較快）；丙減速、丁加速（點距漸大速度漸快）。"},{page:"習作 P.7 第20題",title:"自由落體質量無關：鐵球vs橡皮擦同步落地",file:"freefall-mass-independence-lab.html",icon:"🍎",desc:"400g 鐵球 vs 40g 橡皮擦 78.4m 樓頂釋放，g=9.8m/s² 恆定，4秒同時精準著地！"},{page:"習作 P.7 題組21-23",title:"自駕電動車 v-t 性能測試與南向折返",file:"autonomous-ev-vt-track-lab.html",icon:"🏎️",desc:"0~2s正加速/2~4s等速/4~6s煞車/6s折返/6~8s南向加速；4~8s連續等加速度完整診斷。"}]}]},exams:{key:"exams",name:"考卷檢討",icon:"📄",sections:[{id:"ex-unit1",name:"單元卷 01 (1-1 ~ 1-2)",items:[{page:"單元卷 01 卷第1、8題",title:"公園甲乙雙秋千：繩長 vs 擺動週期競速",file:"park-swings-length-period-lab.html",icon:"🌳",desc:"長繩甲 (3.6m) vs 短繩乙 (0.9m)；同擺角下甲週期較長；繩長 4 倍 ➔ 週期剛好 2 倍！"},{page:"單元卷 01 卷第3題",title:"單擺實驗數據擬合與任意次數時間預測器",file:"pendulum-data-fit-predictor.html",icon:"⏱️",desc:"10次(15.1s)➔50次(75.0s)；單擺等時性 T=1.50s；動態散佈圖擬合直線秒算 15 次需 22.5 秒！"},{page:"單元卷 01 卷第4題",title:"電動牙刷 vs 聲波頻率：每分鐘次數 ➔ Hz 與週期",file:"vibration-frequency-period-converter.html",icon:"🪥",desc:"每分鐘 12000 次 ➔ 頻率 f = 200 Hz；週期 T = 1/200 秒；實時示波器與生活生物頻率換算。"},{page:"單元卷 01 卷第9、10、11題",title:"次數-時間圖 A/B區斜率 ＋ 三人三擺多變因對決",file:"pendulum-slope-multi-variable-lab.html",icon:"📈",desc:"擺長增加 ➔ 週期變大 ➔ 斜率落入 B 區；三人三擺極限競速，證明唯有擺長決定週期！"},{page:"單元卷 01 卷第15題",title:"五點平面坐標矩陣：折線路徑長 vs 畢氏位移",file:"five-points-plane-coords-lab.html",icon:"🗺️",desc:"甲乙丙丁戊五點；丁➔甲➔乙➔丙路徑長 7cm (非5cm)；乙到丁畢氏斜邊位移 3√2 cm！"},{page:"單元卷 01 卷第16題",title:"阿海 2D 羅盤漫步：東4➔北3➔西8 向量位移",file:"compass-vector-walk-lab.html",icon:"🧭",desc:"東4➔北3➔西8；總路徑長 15km；淨位移 (西4, 北3) ➔ 3-4-5 畢氏定理直線位移 5 公里！"},{page:"單元卷 01 卷第18題",title:"走廊班長位置坐標 +5：正負雙向距離 d=4",file:"corridor-monitor-position-lab.html",icon:"🏫",desc:"班長在 +5；距離為 4 ➔ 向左(5-4=+1) 或 向右(5+4=+9)；雙解雷達直觀破盲！"},{page:"單元卷 01 卷第19題＋題組2",title:"小葵圓形水池漫步：一圈 vs 半圈 vs 任意弧",file:"circular-pond-walk-lab.html",icon:"🌊",desc:"半徑 R 水池跑一圈 ➔ 位移＝0，路徑長＝2πR；跑半圈 ➔ 位移＝直徑 2R，路徑長＝πR！"},{page:"單元卷 01 卷第21題",title:"園遊會遙控車：直線單向行駛 vs 直線折返",file:"rc-car-displacement-path-lab.html",icon:"🏎️",desc:"前進 10m ➔ 倒車 4m：位移 6m ≠ 路徑長 14m！破除「直線運動位移必等於路徑長」之迷思！"},{page:"單元卷 01 卷第22題",title:"小惠小明小美 3-4-5 方位矩陣：參考點＋方向＋距離",file:"observer-reference-matrix-lab.html",icon:"🧭",desc:"位置三大要素：參考點、方向、距離！從小明看小惠在「北方 3m」；從小美看小惠在「西北方 5m」！"},{page:"單元卷 01 卷第23題",title:"數線瓢蟲爬行大賽：4 條路徑起訖位移 vs 路徑長",file:"ladybug-number-line-walk-lab.html",icon:"🐞",desc:"C(-4)➔B(+3) 位移 ＋7 奪冠；位移只看起訖點（Δx = x末 - x初），與折返路徑長無關！"},{page:"單元卷 01 卷第24題",title:"阿吉推箱上斜面：斜面長 5m vs 水平 4m ＋ 垂直 3m",file:"inclined-plane-push-box-lab.html",icon:"📦",desc:"高3m、長5m ➔ 水平位移4m、垂直位移3m、斜面路徑長5m (非4+3=7m)！"}]},{id:"ex-unit2",name:"單元卷 02 (1-3 ~ 1-4)",items:[{page:"單元卷 02 卷第9、2題",title:"咖啡廳往返書店調和平均 ＋ 黃伯伯爬山位移歸零",file:"roundtrip-harmonic-speed-velocity-lab.html",icon:"☕",desc:"相距 12km (3km/h & 6km/h) ➔ 平均速率 4km/h (調和非4.5)；原路下山位移為零 ➔ 平均速度 0m/s！"},{page:"單元卷 02 卷第4題",title:"卡車筆直公路煞車減速：v-t 圖梯形面積與 175m 位移",file:"truck-braking-vt-area-lab.html",icon:"🚚",desc:"初速 25m/s 減速至 10m/s 耗時 10s；梯形面積 (10+25)×10/2 ＝ 長方形 100m ＋ 三角形 75m ＝ 175m！"},{page:"單元卷 02 卷第7題",title:"小螞蟻 2D 方格漫步：P(4,3)➔Q(8,6) 畢氏位移與速度",file:"ant-grid-velocity-lab.html",icon:"🐜",desc:"Δx=4cm, Δy=3cm ➔ 直線位移 5cm；10 秒爬完 ➔ 平均速度大小 0.5 cm/s！"},{page:"單元卷 02 卷第12、11題",title:"小智折返跑 v-t 穿軸 ＋ 小華購物 x-t 停步",file:"vt-crossover-xt-shopping-lab.html",icon:"🏃",desc:"v-t 圖穿過時間軸橫軸 3 次 ➔ 速度方向改變 3 次；x-t 水平線停留 2 次，回原點平均速度 0！"},{page:"單元卷 02 卷第13題",title:"甲乙丙三車闖 200m 隧道：v-t 圖面積積分賽跑儀",file:"tunnel-200m-vt-area-race-lab.html",icon:"🏎️",desc:"通過 200m 隧道 ➔ 誰的 v-t 累積面積最快滿 200m 誰先出！丙車初速高早期面積大 ➔ 丙車奪冠！"},{page:"單元卷 02 卷第17、10題",title:"20Hz 打點紙帶掃描 ＋ x-t 斜率比較",file:"ticker-20hz-xt-slope-lab.html",icon:"📏",desc:"20Hz 時間間隔 0.05s，點距均勻為等速 (選C)；x-t 斜率最平緩者速率最慢 (選C)！"},{page:"單元卷 02 卷第22、18題",title:"減速跑道三向量雷達：位移與速度永遠同向 vs 加速度反向",file:"deceleration-three-vectors-lab.html",icon:"🎯",desc:"向前減速時位移與速度恆同向向前 (選C)；加速度反向向後拖拽；加速度單位為 m/s²！"},{page:"單元卷 02 卷第24、19題",title:"10秒自由落體 500m 摩天大樓 ＋ 跑車破百加速度計",file:"freefall-500m-supercar-accel-lab.html",icon:"🏢",desc:"落體 10s 高度 h=1/2gt²=500m (末速 100m/s)；跑車 2 秒加速到 100m/s ➔ a = 50 m/s²！"},{page:"單元卷 02 卷第25、21題",title:"v-t ↔ a-t 多段折線微分器 ＋ 第 30 秒等速 a=0 解析器",file:"vt-to-at-multi-stage-lab.html",icon:"📊",desc:"v-t 斜率轉 a-t 階梯圖 (正階梯→零→負階梯·選C)；第 30 秒為等速水平線 ➔ a＝0 m/s² (選C)！"},{page:"單元卷 02 卷第4頁題組1",title:"滑冰選手繞一圈 200m：位移 0 vs 路徑長 200m",file:"skater-circular-track-lab.html",icon:"⛸️",desc:"繞環形冰道一圈 200m 回到起點 A：位移＝0 (起訖點重合·選C)；路徑長＝200m；v-t 圖先升後降 (選A)！"},{page:"單元卷 02 卷第4頁題組2",title:"晴天 4s(32m, a=4) vs 雨天 8s(64m, a=2) 濕滑路面煞車比較儀",file:"weather-braking-distance-lab.html",icon:"🚗",desc:"初速 16m/s：晴天 a=4(4s·32m)；雨天濕滑 a=2(時間翻倍8s·距離翻倍64m)！"}]},{id:"ex-unit3",name:"綜合卷 03 (全章綜合)",items:[{page:"綜合卷 03 卷第6題",title:"小偉小瑩小哈三車競騎：等速 vs 靜止 vs 變速追逐",file:"three-cyclists-race-lab.html",icon:"🚴",desc:"小偉衝至10m後停留；小瑩等速2m/s穩健騎行 (5s末同達10m·位移相同·選A)；小哈變速達12m！"},{page:"綜合卷 03 卷第7題",title:"阿布 100m 操場跑 1/6 圈：60° 正三角形位移 100m",file:"circular-track-onesixth-lab.html",icon:"🏃",desc:"跑 1/6 圈 ➔ 圓心角 60° 構成邊長 100m 正三角形 ➔ 位移＝100m (選A)；路徑長＝104.7m！"},{page:"綜合卷 03 卷第8題",title:"四隻動物 2D 方格坐標：參考點切換與方位雷達",file:"four-animals-grid-radar-lab.html",icon:"🧭",desc:"位置三要素：參考點＋方向＋距離！蚱蜢在螞蟻西南方距離為 3√2 ≈ 4.24cm (非3cm·選D)！"},{page:"綜合卷 03 卷第9題",title:"沛沛直線纜車 vs 小雯蜿蜒山路：山頂會合",file:"cablecar-mountain-displacement-lab.html",icon:"🚠",desc:"同起點出發同至山頂：起訖點相同 ➔ 兩人位移完全相同 (選B)；小雯繞山路徑長遠大於沛沛！"},{page:"綜合卷 03 卷第10題",title:"48m 大樓升降機：上升 6m/s (8s) ＋ 下降 8m/s (6s) ＝ 14s",file:"elevator-roundtrip-time-lab.html",icon:"🏗️",desc:"爬升 48m (6m/s) 耗時 8s；下降 48m (8m/s) 耗時 6s ➔ 升降一趟總耗時 8＋6＝14 秒 (選C)！"},{page:"綜合卷 03 卷第12題",title:"x-t 折線 ➔ v-t 正負階梯微分儀：前進、停留、折返",file:"xt-to-vt-steps-lab.html",icon:"📈",desc:"x-t 正斜率前進 ➔ v-t 正值階梯；x-t 水平線停留 ➔ v-t 零值；x-t 負斜率折返 ➔ v-t 負值階梯 (選B)！"},{page:"綜合卷 03 卷第13題",title:"A、B 雙車追逐 x-t 領先與交會：t=0 A車在前方",file:"dual-car-xt-chase-lab.html",icon:"🚗",desc:"t=0 時 A 車在前方 x₀>0，B 車自原點加速起跑 ➔ t=0 時 A 車在前方 (選B)；t₁ 速率相等；t₂ 相遇交會！"},{page:"綜合卷 03 卷第16題",title:"法國 360km/h 子彈列車 400m 煞停：a = -12.5 m/s²",file:"bullet-train-braking-lab.html",icon:"🚄",desc:"360km/h ＝ 100m/s，400m 煞停 ➔ a ＝ (0²-100²)/(2×400) ＝ －12.5 m/s² (選B)；需時 8 秒！"},{page:"綜合卷 03 卷第18題",title:"5kg 磚塊 vs 10kg 鐵球落體等時儀：質量無關 3 秒落地",file:"galileo-freefall-mass-lab.html",icon:"🧱",desc:"不計阻力下自由落體 g=9.8m/s² 與質量無關！5kg 磚塊需 3s，10kg 鐵球亦為 3s (選B)！"},{page:"綜合卷 03 卷第6頁題組2",title:"威利颱風 2D 格點坐標 ＋ 畢氏 3-4-5 位移 500km",file:"typhoon-grid-displacement-lab.html",icon:"🌀",desc:"以臺東(0,0)為參考點：A點坐標(3,-1) (選B)；移動至B(-1,2) ➔ 畢氏位移 √(400²+300²)＝500km (選C)！"},{page:"綜合卷 03 卷第6頁題組3",title:"龜兔賽跑 x-t 圖：途中 3 次相遇 ＋ 烏龜奪冠平均速度",file:"tortoise-hare-race-lab.html",icon:"🐢",desc:"烏龜等速直線；兔子暴衝➔樹下睡覺(水平線)➔狂追！途中相遇 3 次 (選C)；50分烏龜平均速度較大 (選A)！"},{page:"綜合卷 03 卷第6頁題組4",title:"台灣高鐵 2.5 分鐘破 300km/h ＋ 梯形 v-t 圖巡航解析器",file:"thsrc-trapezoid-vt-lab.html",icon:"🚄",desc:"常用加速度 2.0 km/h/s ➔ 破 300km/h 需 2.5 分鐘 (選A)；加速→等速→減速呈現「等腰梯形 v-t 圖」(選B)！"}]}]}},P={book3:{key:"book3",name:"第 3 冊（八上理化）",icon:"📘",sections:[{id:"rev-u1",name:"單元 1 基本測量",items:[{page:"P.4 重點 1~3",title:"基本測量、天平歸零與密度 D=M/V",file:"review-hub.html#unit-1",icon:"⚖️",desc:"進入實驗室安全守則、量筒估計值、天平校準螺盤歸零與 M-V 密度正比關係。"}]},{id:"rev-u2",name:"單元 2 物質的世界",items:[{page:"P.17 重點 1~3",title:"純物質混合物、水溶液濃度與空氣製備",file:"review-hub.html#unit-2",icon:"🧪",desc:"重量與體積百分濃度、溶解度飽和、雙氧水製氧與碳酸鈣製二氧化碳。"}]},{id:"rev-u3",name:"單元 3 波動與聲音",items:[{page:"P.32 重點 1~3",title:"波的性質 v=fλ、聲速回聲與聲音三要素",file:"review-hub.html#unit-3",icon:"🌊",desc:"橫波縱波波長週期、傳播介質、響度音調音色與超音波應用。"},{page:"P.63 題組1~3",title:"國家音樂廳聲學反射與吸音實驗室",file:"concert-hall-acoustics-lab.html",icon:"🎭",desc:"音樂廳聲學反射板 vs 吸音地毯動態模擬。"}]},{id:"rev-u4",name:"單元 4 光與顏色",isOpenDefault:!0,items:[{page:"P.45 重點 1",title:"針孔成像原理與物距像距動態實驗室",file:"pinhole-imaging-lab.html",icon:"🕯️",desc:"針孔倒立實像、物距 vs 像距大小變化與雙孔成像。"},{page:"P.47 重點 2",title:"平面鏡反射定律與視線成像實驗室",file:"mirror-sightline-lab.html",icon:"🪞",desc:"入射角等於反射角、正立等大對稱虛像與雙眼視線追蹤。"},{page:"P.47 重點 2",title:"反射定律角度精準量角器測量實驗室",file:"reflection-angle-lab.html",icon:"📐",desc:"360° 法線角度、反射角=入射角互動拖曳量測。"},{page:"P.49 重點 3",title:"水中筷子折射與視深效應實驗室",file:"apparent-depth-lab.html",icon:"🥢",desc:"光從水入空氣偏離法線、水底變淺視深原理。"},{page:"P.51 重點 3",title:"凸透鏡物距焦點成像軌跡動態實驗室",file:"lens-focal-lab.html",icon:"🔍",desc:"2f外/2f上/f~2f/焦點內成像作圖與照相機/放大鏡原理。"},{page:"P.52 重點 3",title:"雙凸透鏡水折射聚光模擬實驗室",file:"concave-water-refraction-lab.html",icon:"💧",desc:"不同介質折射率與透鏡會聚發散模擬。"},{page:"P.53 重點 4",title:"眼睛 vs 照相機光學構造與近視遠視矯正",file:"eye-camera-vision-lab.html",icon:"👁️",desc:"水晶體調焦、凹透鏡矯正近視 vs 凸透鏡矯正遠視。"},{page:"P.60 第16題",title:"角膜塑型片與近視眼聚焦光學實驗室",file:"orthok-eye-optics-lab.html",icon:"👁️",desc:"角膜弧度重塑與視網膜清晰對焦模擬。"},{page:"P.55 重點 5",title:"三稜鏡色散與波長折射率光譜實驗室",file:"dispersion-refraction-lab.html",icon:"🌈",desc:"白光色散紅橙黃綠藍靛紫、紅光偏折小 vs 紫光偏折大。"},{page:"P.55 重點 5",title:"多層彩色玻璃紙濾光重疊與吸收實驗室",file:"color-filter-overlap-lab.html",icon:"🟩",desc:"紅綠藍三原色濾光片重疊與盆栽濾鏡透光。"},{page:"P.55 重點 5",title:"彩色方格吸光與反射光譜實驗室",file:"color-grid-absorb-lab.html",icon:"🎨",desc:"物體顏色由反射光決定，吸收其餘色光。"},{page:"P.55 重點 5",title:"大腦顏色感知與色光互補動態實驗室",file:"color-perception-lab.html",icon:"🧠",desc:"視覺暫留、補色殘像與 RGB 三原色加色法。"},{page:"P.55 重點 5",title:"物體表面顏色反射與吸收實驗室",file:"color-reflection-lab.html",icon:"☀️",desc:"白光/紅光/綠光照射下各色物體呈現之顏色。"},{page:"P.61 題組3~4",title:"糖水濃度梯度雷射光奇幻彎曲實驗室",file:"sugar-refraction-curve-lab.html",icon:"🧪",desc:"非均勻介質折射率連續變化導致光線下彎。"},{page:"P.62 第1題",title:"光亮湯匙面鏡凹面聚光 vs 凸面廣角實驗室",file:"spoon-curved-mirror-lab.html",icon:"🥄",desc:"凹面鏡倒立實像/正立放大虛像 vs 凸面鏡正立縮小廣角虛像。"},{page:"P.62 第2題",title:"海鯤號潛望鏡雙 45° 平面鏡光路實驗室",file:"periscope-submarine-lab.html",icon:"🚢",desc:"雙平面鏡兩次 90° 全反射光路與正立等大影像。"}]},{id:"rev-u5",name:"單元 5 溫度與熱量",items:[{page:"P.64 重點 1~3",title:"溫標換算、熱量公式 H=M·S·ΔT 與熱傳播",file:"review-hub.html#unit-5",icon:"🔥",desc:"攝氏與華氏溫標、比熱定義、熱膨脹與傳導對流輻射。"}]},{id:"rev-u6",name:"單元 6 物質的構造",items:[{page:"P.79 重點 1~2",title:"元素與週期表、原子結構與化學式",file:"review-hub.html#unit-6",icon:"⚛️",desc:"金屬非金屬性質、質子中子電子、原子序質量數與分子式。"}]}]},book4:{key:"book4",name:"第 4 冊（八下理化）",icon:"📗",sections:[{id:"rev-u7",name:"單元 7 化學反應與氧化還原",items:[{page:"P.95 重點 1~3",title:"質量守恆定律、平衡化學式與金屬活性",file:"review-hub.html#unit-7",icon:"💥",desc:"原子重新排列、莫耳數計量、氧化劑還原劑與對氧活性大小。"}]},{id:"rev-u8",name:"單元 8 酸鹼鹽",items:[{page:"P.110 重點 1~4",title:"電解質電離說、常見酸鹼、pH值與酸鹼中和",file:"review-hub.html#unit-8",icon:"🧂",desc:"強弱電解質、指示劑變色範圍、酸+鹼→鹽+水放熱反應。"}]},{id:"rev-u9",name:"單元 9 反應速率與化學平衡",items:[{page:"P.127 重點 1~2",title:"碰撞學說影響因素與動態平衡移動",file:"review-hub.html#unit-9",icon:"⏱️",desc:"濃度面積溫度催化劑對速率影響、正反應等於逆反應動態平衡。"}]},{id:"rev-u10",name:"單元 10 有機化合物",items:[{page:"P.139 重點 1~4",title:"有機烷醇酸酯、聚合物塑膠與肥皂皂化",file:"review-hub.html#unit-10",icon:"🧴",desc:"乾餾木材、酯化反應、熱塑性熱固性聚合物與肥皂去污乳化。"}]},{id:"rev-u11",name:"單元 11 力與壓力",items:[{page:"P.154 重點 1~4",title:"虎克定律、摩擦力、液體大氣壓與阿基米德浮力",file:"review-hub.html#unit-11",icon:"⚓",desc:"兩力平衡、最大靜摩擦力、帕斯卡原理、托里切利與浮體沉體浮力。"}]}]},special:{key:"special",name:"素養專題與題庫",icon:"✨",sections:[{id:"rev-spec-all",name:"總複習核心題庫與素養專題",items:[{page:"總覽大廳",title:"理化 3-4 冊總複習互動題庫大廳",file:"review-hub.html",icon:"🎯",desc:"11 個核心單元、550+ 挖空練習、330+ 隨堂挑戰與 12 生活素養議題。"},{page:"生活素養",title:"12 大會考生活素養專題速查",file:"review-hub.html#literacy-all",icon:"📰",desc:"好蛋壞蛋、PM2.5、都卜勒超聲波、洋蔥式穿法、哈柏法製氨等素養題。"},{page:"概念挖空",title:"50 格核心概念挖空速記卷",file:"review-hub.html#fill-blanks",icon:"📝",desc:"精選會考必背 50 格高頻關鍵字挖空練習。"},{page:"Kahoot",title:"會考必勝 30 題隨堂快速測驗",file:"review-hub.html#kahoot-quiz",icon:"🏆",desc:"課堂互動搶答 30 題單選挑戰與即時詳解。"}]}]}};function B(){["nature","fame-escape","tools","workshop","other"].forEach(n=>{const t=document.querySelector(`[data-subnav-for="${n}"]`);if(!t)return;if(n==="nature"){let s=`
        <!-- ========================================== -->
        <!-- 1. 九年級進度 巢狀群組 -->
        <!-- ========================================== -->
        <div class="nested-group mb-2">
          <button
            type="button"
            class="nested-parent-toggle w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-sky-50/80 hover:text-sky-600 hover:bg-sky-100 border border-sky-200/90 transition-all text-left shadow-sm"
            data-nested-toggle="grade9-progress-sub"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm flex-shrink-0">⚡</span>
              <span class="truncate font-black text-slate-800">九年級進度</span>
              <span class="text-[10px] bg-sky-200/80 text-sky-900 px-1.5 py-0.5 rounded-full font-bold">66</span>
            </span>
            <svg class="nested-arrow w-3.5 h-3.5 text-slate-500 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          <div id="grade9-progress-sub" class="nested-subnav is-open space-y-1.5 pl-1 pt-1">
            <!-- 九年級進度 · 課程介紹直接入口按鈕 -->
            <button
              type="button"
              class="nested-item-btn mb-1.5 bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200 text-amber-950 font-bold"
              data-embed-title="九年級進度 · 課程介紹及上課規矩"
              data-embed-icon="📋"
              data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/course-intro.html"
              data-embed-desc="國中三年級自然科課程介紹：45分鐘時間節奏、重要模擬考與段考日程表、段考與平時成績評定與上課生活常規。"
              title="點擊在右側開啟「九年級進度 · 課程介紹及上課規矩」"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-[10px] text-amber-800 font-black bg-amber-200/90 border border-amber-300 px-1.5 py-0.5 rounded flex-shrink-0">導引</span>
                <span class="truncate text-[11.5px] font-bold text-slate-800">📋 課程介紹及上課規矩</span>
              </span>
              <span class="text-[10px] text-amber-600 font-mono font-bold flex-shrink-0">→</span>
            </button>
      `;Object.keys(E).forEach((a,l)=>{const o=E[a],u=l===0;s+=`
          <div class="nested-sub-group">
            <button
              type="button"
              class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.2 rounded-lg text-[11.5px] font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
              data-sub-toggle="sub-${a}"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span>${o.icon}</span>
                <span>${o.name}</span>
              </span>
              <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 ${u?"is-rotated":""} transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </button>

            <div id="sub-${a}" class="nested-subnav ${u?"is-open":""} space-y-0.5 pl-1.5">
        `,o.sections.forEach(c=>{const p=!!c.isOpenDefault;s+=`
            <div class="nested-section-group">
              <button
                type="button"
                class="nested-sec-toggle w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
                data-sec-toggle="sec-${c.id}"
              >
                <span class="truncate font-medium text-sky-950">${m(c.name)}</span>
                <svg class="sec-arrow w-2 h-2 text-slate-400 ${p?"is-rotated":""} transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sec-${c.id}" class="nested-subnav ${p?"is-open":""} space-y-0.5 pl-2 border-l border-sky-200">
          `,c.items.forEach(r=>{const g=`https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/${r.file}`;s+=`
              <button
                type="button"
                class="nested-item-btn"
                data-embed-title="${m(r.page)} · ${m(r.title)}"
                data-embed-icon="${r.icon||"🔬"}"
                data-embed-url="${g}"
                data-embed-desc="${m(r.desc||"")}"
                title="點擊在右側開啟「${m(r.page)} ${m(r.title)}」"
              >
                <span class="flex items-center gap-1 truncate">
                  <span class="text-[10px] text-sky-600 font-bold bg-sky-50 border border-sky-200 px-1 py-0.5 rounded flex-shrink-0">${m(r.page)}</span>
                  <span class="truncate text-[11px] text-slate-600">${m(r.title)}</span>
                </span>
                <span class="text-[9px] text-slate-400 font-mono flex-shrink-0">→</span>
              </button>
            `}),s+=`
              </div>
            </div>
          `}),s+=`
            </div>
          </div>
        `}),s+=`
          </div>
        </div>

        <!-- ========================================== -->
        <!-- 2. 九年級複習 巢狀群組 (完全比照九年級進度) -->
        <!-- ========================================== -->
        <div class="nested-group mb-1">
          <button
            type="button"
            class="nested-parent-toggle w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-amber-50/80 hover:text-amber-600 hover:bg-amber-100 border border-amber-200/90 transition-all text-left shadow-sm"
            data-nested-toggle="grade9-review-sub"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm flex-shrink-0">🎯</span>
              <span class="truncate font-black text-slate-800">九年級複習</span>
              <span class="text-[10px] bg-amber-200/80 text-amber-900 px-1.5 py-0.5 rounded-full font-bold">11單元</span>
            </span>
            <svg class="nested-arrow w-3.5 h-3.5 text-slate-500 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          <div id="grade9-review-sub" class="nested-subnav is-open space-y-1.5 pl-1 pt-1">
      `,Object.keys(P).forEach((a,l)=>{const o=P[a],u=l===0;s+=`
          <div class="nested-sub-group">
            <button
              type="button"
              class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.2 rounded-lg text-[11.5px] font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-all text-left"
              data-sub-toggle="sub-rev-${a}"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span>${o.icon}</span>
                <span>${o.name}</span>
              </span>
              <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 ${u?"is-rotated":""} transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </button>

            <div id="sub-rev-${a}" class="nested-subnav ${u?"is-open":""} space-y-0.5 pl-1.5">
        `,o.sections.forEach(c=>{const p=!!c.isOpenDefault;s+=`
            <div class="nested-section-group">
              <button
                type="button"
                class="nested-sec-toggle w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-600 hover:text-amber-600 hover:bg-amber-50 transition-all text-left"
                data-sec-toggle="sec-${c.id}"
              >
                <span class="truncate font-medium text-slate-900">${m(c.name)}</span>
                <svg class="sec-arrow w-2 h-2 text-slate-400 ${p?"is-rotated":""} transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sec-${c.id}" class="nested-subnav ${p?"is-open":""} space-y-0.5 pl-2 border-l border-amber-200">
          `,c.items.forEach(r=>{const g=`https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/${r.file}`;s+=`
              <button
                type="button"
                class="nested-item-btn"
                data-embed-title="${m(r.page)} · ${m(r.title)}"
                data-embed-icon="${r.icon||"🎯"}"
                data-embed-url="${g}"
                data-embed-desc="${m(r.desc||"")}"
                title="點擊在右側開啟「${m(r.page)} ${m(r.title)}」"
              >
                <span class="flex items-center gap-1 truncate">
                  <span class="text-[10px] text-amber-700 font-bold bg-amber-50 border border-amber-200 px-1 py-0.5 rounded flex-shrink-0">${m(r.page)}</span>
                  <span class="truncate text-[11px] text-slate-600">${m(r.title)}</span>
                </span>
                <span class="text-[9px] text-slate-400 font-mono flex-shrink-0">→</span>
              </button>
            `}),s+=`
              </div>
            </div>
          `}),s+=`
            </div>
          </div>
        `}),s+=`
          </div>
        </div>
      `,t.innerHTML=s;return}if(n==="workshop"){const s=`
        <!-- ========================================== -->
        <!-- 日期分類下拉選單：2026/08/29 研習 -->
        <!-- ========================================== -->
        <div class="nested-group mb-2">
          <!-- 日期母下拉按鈕 -->
          <button
            type="button"
            class="nested-parent-toggle w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold text-teal-900 bg-teal-50/90 hover:bg-teal-100/90 border border-teal-200 transition-all text-left shadow-xs"
            data-nested-toggle="workshop-date-20260829"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm flex-shrink-0">📅</span>
              <span class="truncate font-black text-slate-800">2026/08/29 研習</span>
              <span class="text-[10px] bg-teal-200/80 text-teal-900 px-1.5 py-0.5 rounded-full font-bold">3</span>
            </span>
            <svg class="nested-arrow w-3.5 h-3.5 text-slate-500 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          <!-- 該日期底下的場次/講師子下拉清單 -->
          <div id="workshop-date-20260829" class="nested-subnav is-open space-y-1.5 pl-1 pt-1.5">
            
            <!-- 子標籤 1：20260829簡子惠 -->
            <div class="nested-sub-group">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-sky-50/80 hover:bg-sky-100/90 border border-sky-200/80 transition-all text-left"
                data-sub-toggle="sub-jian-20260829"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span class="text-xs flex-shrink-0">👩‍🏫</span>
                  <span class="truncate text-[11.5px] font-bold text-slate-800">20260829簡子惠</span>
                  <span class="text-[9px] bg-sky-200/80 text-sky-800 px-1.5 py-0.2 rounded-full font-bold">2</span>
                </span>
                <svg class="sub-arrow w-3 h-3 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sub-jian-20260829" class="nested-subnav is-open space-y-0.5 pl-2 pt-0.5 border-l border-sky-200">
                <button
                  type="button"
                  class="nested-item-btn"
                  data-embed-title="20260829簡子惠 · Padlet 互動討論牆"
                  data-embed-icon="📌"
                  data-embed-url="https://padlet.com/azt156/20260829-ai-z14amg9xmuz0p1mj"
                  data-embed-desc="簡子惠老師 20260829 AI 融入教學研習 Padlet 互動討論牆與即時共作區。"
                  title="點擊開啟「20260829簡子惠 Padlet 互動討論牆」"
                >
                  <span class="flex items-center gap-1 truncate">
                    <span class="text-[10px] text-pink-700 font-bold bg-pink-50 border border-pink-200 px-1 py-0.5 rounded flex-shrink-0">Padlet</span>
                    <span class="truncate text-[11px] text-slate-600">互動討論牆</span>
                  </span>
                  <span class="text-[9px] text-slate-400 font-mono flex-shrink-0">→</span>
                </button>

                <button
                  type="button"
                  class="nested-item-btn"
                  data-embed-title="20260829簡子惠 · Notion 研習講義筆記"
                  data-embed-icon="📝"
                  data-embed-url="https://azt156.notion.site/20260829-AI-3ca9ae758af38008bca0fd341bb26685"
                  data-embed-desc="簡子惠老師 20260829 AI 融入教學研習 Notion 課程講義與實作筆記。"
                  title="點擊開啟「20260829簡子惠 Notion 研習講義筆記」"
                >
                  <span class="flex items-center gap-1 truncate">
                    <span class="text-[10px] text-slate-800 font-bold bg-slate-100 border border-slate-300 px-1 py-0.5 rounded flex-shrink-0">Notion</span>
                    <span class="truncate text-[11px] text-slate-600">研習講義筆記</span>
                  </span>
                  <span class="text-[10px] text-sky-600 font-mono font-bold flex-shrink-0">↗</span>
                </button>
              </div>
            </div>

            <!-- 子標籤 2：20260829三師爸 -->
            <div class="nested-sub-group">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-indigo-50/80 hover:bg-indigo-100/90 border border-indigo-200/80 transition-all text-left"
                data-sub-toggle="sub-sanshiba-20260829"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span class="text-xs flex-shrink-0">👨‍🏫</span>
                  <span class="truncate text-[11.5px] font-bold text-slate-800">20260829三師爸</span>
                  <span class="text-[9px] bg-indigo-200/80 text-indigo-800 px-1.5 py-0.2 rounded-full font-bold">1</span>
                </span>
                <svg class="sub-arrow w-3 h-3 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sub-sanshiba-20260829" class="nested-subnav is-open space-y-0.5 pl-2 pt-0.5 border-l border-indigo-200">
                <button
                  type="button"
                  class="nested-item-btn"
                  data-embed-title="20260829三師爸 · Padlet 互動討論牆"
                  data-embed-icon="📌"
                  data-embed-url="https://padlet.com/mathruffian/20260829-ai-agent-xowg4eol37wu4jml"
                  data-embed-desc="三師爸 20260829 AI Agent 課堂應用與實戰研習 Padlet 互動討論牆。"
                  title="點擊開啟「20260829三師爸 Padlet 互動討論牆」"
                >
                  <span class="flex items-center gap-1 truncate">
                    <span class="text-[10px] text-pink-700 font-bold bg-pink-50 border border-pink-200 px-1 py-0.5 rounded flex-shrink-0">Padlet</span>
                    <span class="truncate text-[11px] text-slate-600">互動討論牆</span>
                  </span>
                  <span class="text-[9px] text-slate-400 font-mono flex-shrink-0">→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      `;t.innerHTML=s;return}if(n==="other"){const s=`
        <!-- ========================================== -->
        <!-- 教育名師數位教學資源導航 巢狀下拉群組 -->
        <!-- ========================================== -->
        <div class="nested-group mb-1.5">
          <button
            type="button"
            class="nested-parent-toggle w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-amber-50/80 hover:text-amber-700 hover:bg-amber-100/90 border border-amber-200/90 transition-all text-left shadow-sm"
            data-nested-toggle="master-teachers-sub"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm flex-shrink-0">🌟</span>
              <span class="truncate font-black text-slate-800">教育名師數位資源導航</span>
              <span class="text-[10px] bg-amber-200/80 text-amber-900 px-1.5 py-0.5 rounded-full font-bold">2</span>
            </span>
            <svg class="nested-arrow w-3.5 h-3.5 text-slate-500 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          <div id="master-teachers-sub" class="nested-subnav is-open space-y-1 pl-1 pt-1">
            <button
              type="button"
              class="nested-item-btn"
              data-embed-title="剛好整合所｜阿剛老師"
              data-embed-icon="🪄"
              data-embed-url="https://filedn.com/laMtL9jmKf7JrDEQG0A6OPy/html/00-%E5%89%9B%E5%A5%BD%E6%95%B4%E5%90%88%E9%A0%81%E5%85%A5%E5%8F%A3%E7%B6%B2/index-GAS-share.html#home"
              data-embed-desc="阿剛老師數位教學與行政資源入口網：四大數位宇宙（教學魔法整合箱、剛好備課所、工具所、行政所）。"
              title="點擊在右側開啟「剛好整合所｜阿剛老師」"
            >
              <span class="flex items-center gap-1 truncate">
                <span class="text-[10px] text-indigo-700 font-bold bg-indigo-50 border border-indigo-200 px-1 py-0.5 rounded flex-shrink-0">阿剛老師</span>
                <span class="truncate text-[11px] text-slate-600">剛好整合所 入口網</span>
              </span>
              <span class="text-[9px] text-slate-400 font-mono flex-shrink-0">→</span>
            </button>

            <button
              type="button"
              class="nested-item-btn"
              data-embed-title="奕鈞老師數位教學備課室｜IJUN AI"
              data-embed-icon="📚"
              data-embed-url="https://www.ijun-ai.com/"
              data-embed-desc="專注於 AI教學、國文教學與國文 AI 教學創新！提供各科 AI 備課神器、AI Agent 實戰教材與研習邀約。"
              title="點擊在右側開啟「奕鈞老師數位教學備課室｜IJUN AI」"
            >
              <span class="flex items-center gap-1 truncate">
                <span class="text-[10px] text-amber-800 font-bold bg-amber-50 border border-amber-200 px-1 py-0.5 rounded flex-shrink-0">奕鈞老師</span>
                <span class="truncate text-[11px] text-slate-600">IJUN AI 備課室</span>
              </span>
              <span class="text-[9px] text-slate-400 font-mono flex-shrink-0">→</span>
            </button>
          </div>
        </div>

        <!-- 其餘專案：教師派發任務 & 舊版互動式網頁 -->
        <button
          type="button"
          data-project-target="naturelab"
          class="subnav-item w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
          title="點擊查看「教師派發任務」"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-sm flex-shrink-0">🔬</span>
            <span class="truncate font-medium">教師派發任務</span>
          </span>
          <span class="text-[10px] text-slate-400 font-mono">→</span>
        </button>

        <button
          type="button"
          data-project-target="naturelab-book-selector"
          class="subnav-item w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
          title="點擊查看「舊版互動式網頁」"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-sm flex-shrink-0">📖</span>
            <span class="truncate font-medium">舊版互動式網頁</span>
          </span>
          <span class="text-[10px] text-slate-400 font-mono">→</span>
        </button>
      `;t.innerHTML=s;return}const e=d.allProjects.filter(s=>s.categoryKey===n);if(e.length===0){t.innerHTML='<div class="text-[11px] text-slate-400 px-3 py-1">暫無專案</div>';return}t.innerHTML=e.map(s=>`
      <button
        type="button"
        data-project-target="${s.id}"
        class="subnav-item w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
        title="點擊查看「${m(s.title)}」"
      >
        <span class="flex items-center gap-1.5 truncate">
          <span class="text-sm flex-shrink-0">${s.icon}</span>
          <span class="truncate font-medium">${m(s.title)}</span>
        </span>
        <span class="text-[10px] text-slate-400 font-mono">→</span>
      </button>
    `).join("")}),document.querySelectorAll(".subnav-item").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-project-target");T(e)})}),document.querySelectorAll(".nested-parent-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-nested-toggle"),s=document.getElementById(e),a=n.querySelector(".nested-arrow");if(s){const l=s.classList.contains("is-open");s.classList.toggle("is-open",!l),a&&a.classList.toggle("is-rotated",!l)}})}),document.querySelectorAll(".nested-sub-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-sub-toggle"),s=document.getElementById(e),a=n.querySelector(".sub-arrow");if(s){const l=s.classList.contains("is-open");s.classList.toggle("is-open",!l),a&&a.classList.toggle("is-rotated",!l)}})}),document.querySelectorAll(".nested-sec-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-sec-toggle"),s=document.getElementById(e),a=n.querySelector(".sec-arrow");if(s){const l=s.classList.contains("is-open");s.classList.toggle("is-open",!l),a&&a.classList.toggle("is-rotated",!l)}})}),document.querySelectorAll(".nested-item-btn").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-embed-title"),s=n.getAttribute("data-embed-icon")||"🔬",a=n.getAttribute("data-embed-url"),l=n.getAttribute("data-embed-desc");document.querySelectorAll(".subnav-item, .nested-item-btn").forEach(o=>o.classList.remove("active-subitem")),n.classList.add("active-subitem"),I({id:"naturelab-tool-embed",title:e,icon:s,url:a,description:l})})})}function T(i){var e;const n=d.allProjects.find(s=>s.id===i);if(!n)return;d.activeCategory=n.categoryKey,w(n.categoryKey);const t=document.getElementById("filter-active-count");t&&(t.textContent=((e=x[n.categoryKey])==null?void 0:e.name)||n.categoryKey),document.querySelectorAll(".subnav-item").forEach(s=>{const a=s.getAttribute("data-project-target")===i;s.classList.toggle("active-subitem",a)}),n.url?I(n):(y(),h())}function K(i){if(!i)return!1;const n=i.toLowerCase();return n.includes("notion.site")||n.includes("notion.so")}function I(i){const n=document.getElementById("category-header-row"),t=document.getElementById("cards-container"),e=document.getElementById("empty-state"),s=document.getElementById("embed-viewer-container"),a=document.getElementById("embed-iframe-wrapper"),l=document.getElementById("embed-iframe"),o=document.getElementById("embed-external-card"),u=document.getElementById("embed-item-title"),c=document.getElementById("embed-item-icon"),p=document.getElementById("embed-external-link"),r=document.getElementById("embed-card-icon"),g=document.getElementById("embed-card-title"),b=document.getElementById("embed-card-desc"),f=document.getElementById("embed-card-launch-btn"),v=document.getElementById("embed-card-launch-text");if(n&&n.classList.add("hidden"),t&&t.classList.add("hidden"),e&&e.classList.add("hidden"),s&&s.classList.remove("hidden"),u&&(u.textContent=i.title),c&&(c.textContent=i.icon),p&&(p.href=i.url),K(i.url)||i.noIframe)a&&a.classList.add("hidden"),l&&(l.src="about:blank"),o&&o.classList.remove("hidden"),r&&(r.textContent=i.icon||"📝"),g&&(g.textContent=i.title),b&&(b.textContent=i.description||"點擊下方按鈕在新分頁中完整閱讀與操作此外部資源。"),f&&(f.href=i.url),v&&(i.url.includes("notion")?v.textContent="🚀 在新分頁開啟 Notion 講義筆記":v.textContent="🚀 在新分頁全螢幕開啟資源");else if(o&&o.classList.add("hidden"),a&&a.classList.remove("hidden"),l)try{const k=new URL(i.url,window.location.href);k.searchParams.set("_t",Date.now()),l.src=k.toString()}catch{l.src=i.url}s==null||s.scrollIntoView({behavior:"smooth",block:"start"})}function y(){const i=document.getElementById("category-header-row"),n=document.getElementById("embed-viewer-container"),t=document.getElementById("embed-iframe"),e=document.getElementById("embed-external-card"),s=document.getElementById("embed-iframe-wrapper");i&&i.classList.remove("hidden"),n&&n.classList.add("hidden"),e&&e.classList.add("hidden"),s&&s.classList.remove("hidden"),t&&(t.src="about:blank"),document.querySelectorAll(".subnav-item, .nested-item-btn").forEach(a=>a.classList.remove("active-subitem")),h()}function w(i){const n=document.querySelectorAll(".category-subnav");document.querySelectorAll(".filter-btn").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-filter")===i)}),n.forEach(e=>{const s=e.getAttribute("data-subnav-for"),a=e.closest(".category-group"),l=a?a.querySelector(".chevron-arrow"):null;s===i?(e.classList.add("is-open"),l&&l.classList.add("is-rotated")):(e.classList.remove("is-open"),l&&l.classList.remove("is-rotated"))})}function O(){const i=document.getElementById("embed-back-btn");i&&i.addEventListener("click",()=>{y()});const n=document.querySelectorAll(".filter-btn"),t=document.getElementById("filter-active-count");n.forEach(l=>{l.addEventListener("click",o=>{var b;const u=l.getAttribute("data-filter")||"all",c=d.activeCategory===u,p=l.closest(".category-group"),r=p?p.querySelector(".category-subnav"):null,g=p?p.querySelector(".chevron-arrow"):null;if(c&&r&&u!=="all"){const f=r.classList.contains("is-open");r.classList.toggle("is-open",!f),g&&g.classList.toggle("is-rotated",!f);return}d.activeCategory=u,t&&(t.textContent=((b=x[u])==null?void 0:b.name)||u),document.querySelectorAll(".subnav-item").forEach(f=>f.classList.remove("active-subitem")),y(),w(u),h()})});const e=document.getElementById("search-input"),s=document.getElementById("clear-search-btn");e&&e.addEventListener("input",l=>{d.searchQuery=l.target.value,s&&s.classList.toggle("hidden",!d.searchQuery),y(),h()}),s&&s.addEventListener("click",()=>{e&&(e.value="",d.searchQuery="",s.classList.add("hidden"),y(),h(),e.focus())});const a=document.getElementById("reset-filter-btn");a&&a.addEventListener("click",()=>{d.activeCategory="all",d.searchQuery="",e&&(e.value=""),s&&s.classList.add("hidden"),t&&(t.textContent="全部"),y(),w("all"),h()})}function q(i){d.allProjects=[],d.lastUpdated=i.lastUpdated||i.generatedAt||new Date().toISOString().split("T")[0],(i.categories||[]).forEach(n=>{(n.sites||[]).forEach(t=>{var o,u;const e=A(t,n.id),s=((o=x[e])==null?void 0:o.name)||n.title||"其他",a=S(t,e);let l=null;t.homepageState==="linked"&&(l=t.url||t.deployments&&((u=t.deployments[0])==null?void 0:u.url)||null),d.allProjects.push({id:t.id,title:t.title,description:t.description||"",status:t.status||"active",homepageState:t.homepageState||"linked",url:l,categoryKey:e,categoryTitle:s,icon:a})})}),L(),B(),h()}function m(i){return String(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function C(){O(),j()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",C):C();

(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const i={allProjects:[],activeCategory:"all",searchQuery:"",lastUpdated:"--"},h={all:{name:"全部專案",icon:"🌟",heading:"全部專案展示",desc:"點選左側分類標籤或搜尋關鍵字即時篩選。"},nature:{name:"國中自然與實驗",icon:"🧪",badgeClass:"badge-theme-nature",heading:"國中自然與動態實驗室",desc:"收錄國中理化與地球科學動態互動教具、總複習題庫與章節實驗室。"},"life-master":{name:"生活達人秀show",icon:"🌟",badgeClass:"badge-theme-life-master",heading:"生活達人秀show 專區",desc:"國三科學探索校定課程：收錄牛頓、焦耳、霍金三大科學巨擘生平傳奇、核心定律、講義教材與學習單。"},"fame-escape":{name:"世界名人堂",icon:"🏛️",badgeClass:"badge-theme-fame",heading:"世界名人堂專區",desc:"收錄 12 位跨世代先驅科學家生平傳奇、課堂數位互動教具與密室逃脫解謎。"},tools:{name:"實用工具箱",icon:"🛠️",badgeClass:"badge-theme-tools",heading:"班級互動與數位工具箱",desc:"抽籤、計時、課堂積分、噪音監測與本機 AI Agent 實用工具。"},workshop:{name:"研習",icon:"📝",badgeClass:"badge-theme-workshop",heading:"研習課程與資源",desc:"收錄各場次教師專業研習、AI 融入教學互動討論牆與精選講義筆記。"},other:{name:"其他",icon:"💡",badgeClass:"badge-theme-other",heading:"其他專案展示",desc:"跨領域個人創作、教師專區與其他專案。"}};function B(o,n){const t=(o.id||"").toLowerCase(),e=(o.title||"").toLowerCase();return t==="naturelab"||t.includes("book-selector")||t.includes("master-teachers")||t.includes("agang")||t.includes("ijun")||e.includes("教師派發")||e.includes("派課")||e.includes("舊版")||e.includes("阿剛")||e.includes("奕鈞")||e.includes("名師")?"other":t.includes("grade9")||t.includes("naturelab")||t.includes("nature")&&!t.includes("escape")||t.includes("review")||e.includes("九年級")||e.includes("直線運動")?"nature":t.includes("knsh")||t.includes("loilo")||t.includes("tool")||t.includes("classbuddy")||t.includes("voice-cloner")||t.includes("agent")||e.includes("工具箱")||e.includes("班級")||e.includes("康軒")||e.includes("loilo")||n==="computer"?"tools":t.includes("life-master")||e.includes("生活達人秀")?"life-master":["hall-of-fame","course-intro","nobel","einstein","hubble","darwin","wegener","watson","crick","dna","lin-mari","zhang-heng","hooke","archimedes","galileo","curie","escape"].some(a=>t.includes(a))||e.includes("名人堂")||e.includes("世界名人堂")||e.includes("密室逃脫")||e.includes("諾貝爾")||e.includes("愛因斯坦")||e.includes("哈伯")||e.includes("達爾文")||e.includes("韋格納")||e.includes("克立克")||e.includes("華生")||e.includes("林媽利")||e.includes("張衡")||e.includes("虎克")||e.includes("阿基米德")||e.includes("伽利略")||e.includes("居禮")?"fame-escape":n==="workshop"||t.includes("workshop")||t.includes("20260829")||e.includes("研習")||e.includes("簡子惠")||e.includes("三師爸")?"workshop":n==="teaching"?"nature":(n==="investing"||t.includes("stock")||n==="other","other")}function I(o,n){const t=(o.id||"").toLowerCase(),e=(o.title||"").toLowerCase();return t.includes("life-master")||e.includes("生活達人秀")?"🌟":t.includes("knsh")||e.includes("康軒")?"📖":t.includes("loilo")||e.includes("loilo")||e.includes("loilonote")?"📱":t.includes("course-intro")||e.includes("課程介紹")?"📋":t.includes("nobel")||e.includes("諾貝爾")?"💥":t.includes("einstein")||e.includes("愛因斯坦")?"⚛️":t.includes("hubble")||e.includes("哈伯")?"🔭":t.includes("darwin")||e.includes("達爾文")?"🐢":t.includes("wegener")||e.includes("韋格納")?"🧩":t.includes("dna")||t.includes("watson")||e.includes("雙螺旋")||e.includes("克立克")||e.includes("華生")?"🧬":t.includes("lin-mari")||e.includes("林媽利")?"💉":t.includes("zhang-heng")||e.includes("張衡")?"🐲":t.includes("hooke")||e.includes("虎克")?"🔬":t.includes("archimedes")||e.includes("阿基米德")?"👑":t.includes("galileo")||e.includes("伽利略")?"🔭":t.includes("curie")||e.includes("居禮")?"✨":t.includes("hall-of-fame")?"🏛️":t.includes("grade9-progress")?"⚡":t.includes("review")?"🎯":t.includes("classbuddy")?"🎒":t.includes("voice")?"🎙️":t.includes("jian")||e.includes("簡子惠")?"👩‍🏫":t.includes("sanshiba")||e.includes("三師爸")?"👨‍🏫":t.includes("workshop")||e.includes("研習")?"📝":t.includes("master-teachers")||e.includes("名師")?"🌟":t.includes("agang")||e.includes("阿剛")||e.includes("剛好整合")?"🪄":t.includes("ijun")||e.includes("奕鈞")||e.includes("備課室")?"📚":t.includes("portal")||t.includes("naturelab")?"🔬":t.includes("selector")?"📖":{nature:"🧪","life-master":"🌟","fame-escape":"🏛️",tools:"🛠️",workshop:"📝",other:"💡"}[n]||"🚀"}async function A(){S(),P(),L(),g();const o=`./catalog.json?_t=${Date.now()}`;try{const n=await fetch(o,{cache:"no-store"});if(n.ok){const t=await n.json();F(t)}}catch{console.info("使用內建專案索引資料。")}}function S(){i.lastUpdated="2026-08-23",i.allProjects=[{id:"grade9-progress",title:"九年級進度",description:"國中三年級自然第一章直線運動互動教具總覽與各節實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"⚡"},{id:"naturelab-senior-review",title:"九年級複習",description:"理化 3-4 冊總複習互動題庫、概念挖空卷、Kahoot 挑戰與動態實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/review-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"🎯"},{id:"life-master-show-hub",title:"生活達人秀show",description:"國三科學探索校定課程「生活達人秀show」：收錄牛頓、焦耳、霍金三大科學巨擘生平傳奇、核心定律、講義教材、學習單與精選影音。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/life-master-show.html",categoryKey:"life-master",categoryTitle:"生活達人秀show",icon:"🌟"},{id:"hall-of-fame-course-intro",title:"課程介紹",description:"世界名人堂課程介紹與上課規矩：課堂時間流程、平時成績與學習單計分方式、平板使用須知與加扣分規範。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/course-intro.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"📋"},{id:"nobel-hub",title:"阿爾弗雷德·諾貝爾",description:"炸藥之父與和平遺產。發明雷管與矽藻土黃色炸藥，設立諾貝爾獎。含 5 大線上互動教具與闢謠特輯。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/nobel.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"💥"},{id:"einstein-hub",title:"阿爾伯特·愛因斯坦",description:"現代物理學之父。提出狹義與廣義相對論、質能互換公式 E=mc²、解釋光電效應與布朗運動。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/einstein.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"⚛️"},{id:"hubble-hub",title:"愛德溫·哈伯",description:"星系天文學之父與觀測宇宙學開創者。發現河外星系，確立哈伯定律證明宇宙正在膨脹。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hubble.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔭"},{id:"darwin-hub",title:"查爾斯·達爾文",description:"演化論之父。搭乘小獵犬號環球科學考察，發表《物種起源》提出天擇說與適者生存。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/darwin.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🐢"},{id:"wegener-hub",title:"阿爾弗雷德·韋格納",description:"大陸漂移學說創始者。提出古生代「盤古大陸」假說，為現代板塊構造學說奠定先驅基石。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/wegener.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🧩"},{id:"watson-crick-hub",title:"華生與克里克 (DNA)",description:"DNA 雙螺旋結構解密者。結合 X 射線晶體繞射 Photo 51 與鹼基互補配對模型，揭開遺傳物質複製奧秘。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/dna.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🧬"},{id:"lin-mari-hub",title:"林媽利 醫師",description:"台灣輸血醫學之母與血型基因研究權威。建立台灣現代化醫院血庫與安全輸血作業準則。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/lin-mari.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"💉"},{id:"zhang-heng-hub",title:"張衡",description:"東漢通才科學大師。發明世界首台地震觀測儀「候風地動儀」，創製以水力運轉之水運渾天儀。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/zhang-heng.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🐲"},{id:"hooke-hub",title:"羅伯特·虎克",description:"顯微鏡之眼與物理力學大師。改良複合顯微鏡觀察軟木塞命名「細胞 (Cell)」，出版《微觀圖誌》。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hooke.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔬"},{id:"archimedes-hub",title:"阿基米德",description:"古希臘物理力學與數學之神。在浴缸中悟出阿基米德浮力原理 (Eureka!)，建立槓桿原理與螺旋抽水機。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/archimedes.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"👑"},{id:"galileo-hub",title:"伽利略·伽利萊",description:"近代科學與實驗物理學之父。首創以望遠鏡觀測天體支持日心說，提出單擺等時性與落體實驗。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/galileo.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🔭"},{id:"curie-hub",title:"瑪麗·居禮 (居禮夫人)",description:"放射性研究傳奇先驅。史上首位女性諾貝爾獎得主、唯一獲物理與化學雙諾貝爾獎之科學家，發現元素釙與鐳。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/curie.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"✨"},{id:"tool-knsh-ebook",title:"康軒電子書網頁版",description:"康軒945Cloud 國中自然與各科教師 Web 電子書教學平台（需教師帳號登入）。",homepageState:"linked",url:"https://945cloud.knsh.com.tw/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"📖"},{id:"tool-loilonote",title:"LoiLoNote 數位教學平台",description:"LoiLoNote 課堂數位互動、任務卡派發、作業繳交與全班發表平台。",homepageState:"linked",url:"https://loilonote.app/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"📱"},{id:"classbuddy-classroom-toolbox",title:"班級互動工具箱",description:"提供班級抽籤、小組積分榜、倒數計時、趣味泡泡噪音監測與智慧名單同步的班級教學工具箱。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/classroom-agent-kit/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎒"},{id:"workshop-20260829-jian-padlet",title:"20260829簡子惠 · Padlet 互動討論牆",description:"簡子惠老師 20260829 AI 融入教學研習 Padlet 互動討論牆與即時共作區。",homepageState:"linked",url:"https://padlet.com/azt156/20260829-ai-z14amg9xmuz0p1mj",categoryKey:"workshop",categoryTitle:"研習",icon:"👩‍🏫"},{id:"workshop-20260829-jian-notion",title:"20260829簡子惠 · Notion 研習講義筆記",description:"簡子惠老師 20260829 AI 融入教學研習 Notion 課程講義、實戰教材與重點整理。",homepageState:"linked",url:"https://azt156.notion.site/20260829-AI-3ca9ae758af38008bca0fd341bb26685",categoryKey:"workshop",categoryTitle:"研習",icon:"👩‍🏫"},{id:"workshop-20260829-sanshiba-padlet",title:"20260829三師爸 · Padlet 互動討論牆",description:"三師爸 20260829 AI Agent 課堂應用與實戰研習 Padlet 互動討論牆。",homepageState:"linked",url:"https://padlet.com/mathruffian/20260829-ai-agent-xowg4eol37wu4jml",categoryKey:"workshop",categoryTitle:"研習",icon:"👨‍🏫"},{id:"master-teachers-hub",title:"教育名師數位教學資源導航",description:"精選全台教育先驅與數位教學大師資源：阿剛老師「剛好整合所」與奕鈞老師「IJUN AI 備課室」。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/master-teachers-hub.html",categoryKey:"other",categoryTitle:"其他",icon:"🌟"},{id:"naturelab",title:"教師派發任務",description:"開始進行課程管理，即時查看學生學習紀錄與成果。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#portal",categoryKey:"other",categoryTitle:"其他",icon:"🔬"},{id:"naturelab-book-selector",title:"舊版互動式網頁",description:"選擇冊別與章節，依照學校課本單元循序學習。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#book-selector",categoryKey:"other",categoryTitle:"其他",icon:"📖"}]}function P(){const o=i.allProjects.length,n=i.allProjects.filter(l=>l.homepageState==="linked").length,t=document.getElementById("stat-total"),e=document.getElementById("stat-active"),s=document.getElementById("last-updated");t&&(t.textContent=`${o} 個專案`),e&&(e.textContent=`${n} 個可開啟`),s&&(s.textContent=i.lastUpdated);const a={all:o,nature:0,"life-master":0,"fame-escape":0,tools:0,workshop:0,other:0};i.allProjects.forEach(l=>{a[l.categoryKey]!==void 0&&a[l.categoryKey]++}),Object.keys(a).forEach(l=>{const r=document.querySelector(`[data-count-for="${l}"]`);r&&(r.textContent=a[l])})}function g(){const o=document.getElementById("cards-container"),n=document.getElementById("empty-state"),t=document.getElementById("displayed-cards-count"),e=document.getElementById("current-category-heading"),s=document.getElementById("current-category-desc");if(!o)return;const a=i.allProjects.filter(r=>{const c=i.activeCategory==="all"||r.categoryKey===i.activeCategory,d=i.searchQuery.trim().toLowerCase(),u=!d||r.title.toLowerCase().includes(d)||r.description.toLowerCase().includes(d)||r.categoryTitle.toLowerCase().includes(d);return c&&u}),l=h[i.activeCategory]||h.all;if(e&&(e.innerHTML=`<span>${l.icon}</span><span>${i.searchQuery?`搜尋結果：「${i.searchQuery}」`:l.heading}</span>`),s&&(s.textContent=i.searchQuery?`共找到 ${a.length} 個相符的專案`:l.desc),t&&(t.textContent=a.length),o.innerHTML="",a.length===0){o.classList.add("hidden"),n&&n.classList.remove("hidden");return}o.classList.remove("hidden"),n&&n.classList.add("hidden"),a.forEach((r,c)=>{var b,f;const d=document.createElement("article"),u=r.homepageState==="linked"&&r.url,p=((b=h[r.categoryKey])==null?void 0:b.badgeClass)||"badge-theme-other";d.id=`card-${r.id}`,d.className="project-card bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in group",d.style.animationDelay=`${c*.04}s`,d.innerHTML=`
      <div class="space-y-3.5">
        <!-- 頂部標籤列：主題 Badge + 狀態 Badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${p}">
            <span>${((f=h[r.categoryKey])==null?void 0:f.icon)||"📂"}</span>
            <span>${r.categoryTitle}</span>
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${u?"status-badge-live":"status-badge-soon"}">
            ${u?'<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 已上線':"⏳ 準備中"}
          </span>
        </div>

        <!-- 專案標題與圖示 -->
        <div class="flex items-start gap-3 pt-1">
          <span class="text-2xl sm:text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
            ${r.icon}
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
              ${m(r.title)}
            </h3>
          </div>
        </div>

        <!-- 1~2 句功能說明 -->
        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          ${m(r.description)}
        </p>
      </div>

      <!-- 底部操作按鈕 -->
      <div class="pt-4 mt-3 border-t border-slate-100/80">
        ${u?`
          <a
            href="${m(r.url)}"
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
    `,o.appendChild(d)})}const j={textbook:{key:"textbook",name:"課本配套",icon:"📖",sections:[{id:"tb-1-1",name:"1-1 時間的測量",isOpenDefault:!0,items:[{page:"P.7～8 探索 1-1",title:"單擺變因控制虛擬實驗室",file:"pendulum-lab.html",icon:"⏱️",desc:"擺長、擺角與質量的控制變因探索，搭配自動 10 次計時碼錶與擺鐘調校任務。"},{page:"P.8 例題 1-1",title:"單擺圖表斜率解析器",file:"pendulum-graph-analyzer.html",icon:"📈",desc:"實體甲乙雙擺同步擺動與動態打點，切換標準斜率（週期）vs 翻轉陷阱坐標軸。"}]},{id:"tb-1-2",name:"1-2 位置與位移",items:[{page:"P.10～11 例題 1-2",title:"數線位移與路徑長互動沙盒",file:"displacement-sandbox.html",icon:"↔️",desc:"正負數線點擊移動、位移向量箭頭（Δx）vs 累加足跡線（S）與折返跑例題。"}]},{id:"tb-1-3",name:"1-3 速度與速率",items:[{page:"P.12～14",title:"泳池折返跑與區間測速沙盒",file:"speed-velocity-sandbox.html",icon:"🏊",desc:"25m 泳池折返平均速度為零的視覺對比，搭配 8025m 國道隧道區間測速執法挑戰。"},{page:"P.15～16 例題 1-4",title:"x-t ↔ v-t 雙向動態轉換器與跑道",file:"motion-graph-simulator.html",icon:"🏎️",desc:"實體數線跑道、x-t 圖斜率與 v-t 圖階梯水平線三視圖實時同步連動。"},{page:"P.17 例題 1-5",title:"v-t 圖面積求位移與路徑長解析器",file:"vt-area-displacement-analyzer.html",icon:"📐",desc:"上方面積（正向位移）vs 下方面積（負向折返）動態填色與幾何公式拆解。"}]},{id:"tb-1-4",name:"1-4 等加速度運動",items:[{page:"P.18～20 探索 1-2",title:"打點計時器與紙帶分析實驗室",file:"ticker-tape-lab.html",icon:"📏",desc:"50Hz 打點計時器模擬、可拖曳透明直尺量測點距與逐點速度/加速度分析表。"},{page:"P.21 圖 1-19/20",title:"a 與 v 方向關係：推力與煞車沙盒",file:"acceleration-velocity-sandbox.html",icon:"🚀",desc:"賽車即時雙向量箭頭、推力火焰 vs 煞車煙霧，破解「負加速度必為減速」迷思。"},{page:"P.21 圖 1-21",title:"等加速度 v-t 圖斜率比較器",file:"vt-slope-comparator.html",icon:"📈",desc:"甲乙雙車同起跑線競速、斜率越大代表加速度越大，附時間/速度雙掃描射線。"},{page:"P.22～23 圖 1-22/23",title:"v-t ↔ a-t 雙向對照與閃頻實驗室",file:"vt-at-converter-lab.html",icon:"⚡",desc:"甲車（加速斜線/正水平線）vs 乙車（減速斜線/負水平線）閃頻照片軌跡對照。"},{page:"P.24 例題 1-7",title:"例題 1-7：穿過時間軸折返解析器",file:"vt-crossing-axis-analyzer.html",icon:"🎯",desc:"斜直線穿過時間軸的物理意義：正向減速 (0~10s) ➔ 速度為零折返點 (t=10s) ➔ 負向加速。"},{page:"P.24 例題 1-8",title:"例題 1-8：a-t 階梯與速度累積儀",file:"at-ladder-velocity-accumulator.html",icon:"🪜",desc:"a-t 階梯面積＝速度變化量（Δv = a × Δt）；實時同步生成 v-t 圖與賽車跑道。"},{page:"P.25 圖 1-24/25",title:"波以耳真空管 vs 比薩斜塔實驗室",file:"boyle-vacuum-freefall-lab.html",icon:"🪶",desc:"大氣管 vs 真空管羽毛硬幣下落對比，可調氣壓幫浦與毫秒著地感應器。"},{page:"P.26 圖 1-26",title:"自由落體 g=9.8 閃頻與高度測量儀",file:"freefall-gravity-analyzer.html",icon:"🍎",desc:"重力加速度 g=9.8 速度階梯、閃頻等時點距比例 (1:3:5:7)、多天體引力與 v-t 面積求樓高。"}]}]},workbook:{key:"workbook",name:"習作題型",icon:"✏️",sections:[{id:"wb-1-1",name:"1-1 時間的測量",items:[{page:"習作 P.3 題2-3",title:"三人三球單擺同頻 vs 擺長週期減半",file:"pendulum-mass-length-lab.html",icon:"⏱️",desc:"30g/40g/50g 三球質量無關同頻擺動 (T₁=T₂=T₃)；擺長 1/4 倍週期減半對比。"}]},{id:"wb-1-2",name:"1-2 位置與位移",items:[{page:"習作 P.3 第4題",title:"三人數線：觀測者基準點動態切換器",file:"relative-position-observer-lab.html",icon:"🎯",desc:"一鍵切換小碩/小雄/小麗為基準點，動態計算東/西方相對方向與距離。"},{page:"習作 P.3 第5題",title:"網格迷宮螞蟻爬行：位移 vs 路徑長",file:"ant-grid-displacement-lab.html",icon:"🐜",desc:"1cm 方格網上自由繪製路徑，實時計算足跡路徑長（S）與起訖點位移向量（Δx）。"},{page:"習作 P.4 第6題",title:"x-t 圖山峰山谷：折返點動態掃描儀",file:"xt-peaks-valleys-turnaround-lab.html",icon:"📈",desc:"喬丹南北跑道與 x-t 折線圖同步掃描，實時偵測波峰與波谷 3 次改變運動方向。"},{page:"習作 P.4 第7題 (會考)",title:"直排輪直線甲 vs S形乙：雙軌跡沙盒",file:"roller-skating-trajectory-lab.html",icon:"🛼",desc:"P點到Q點：位移大小 甲＝乙（最短直線）；S形蛇行幅度可調，路徑長 甲＜乙。"}]},{id:"wb-1-3",name:"1-3 速度與速率",items:[{page:"習作 P.4 第9題 (會考)",title:"Google Maps 地圖導航 4大物理量對照儀",file:"navigation-displacement-speed-lab.html",icon:"🗺️",desc:"瀑布步道到大草原：步行 vs 開車位移完全相同；路徑長、時間、速率與速度全對比。"},{page:"習作 P.5 第10題",title:"奧運 50m 泳池 100m 自由式折返挑戰",file:"olympic-swim-displacement-speed-lab.html",icon:"🏊",desc:"折返回到原點全程位移＝0m；路徑長 100m，平均速率 2.13 m/s ＞ 2 m/s。"},{page:"習作 P.5 第11題",title:"小雯與沛沛散步：x-t 圖相遇 vs 速度斜率",file:"xt-intersection-chase-lab.html",icon:"🏃",desc:"2秒相遇交點 (3m) 破盲；斜率三角形解析沛沛速度 (+1.5 m/s) ＞ 小雯 (+0.5 m/s)。"},{page:"習作 P.5 第13題 (會考)",title:"四車 v-t 圖與實體跑道車距變化實驗室",file:"four-cars-vt-distance-lab.html",icon:"🏎️",desc:"甲正等速/乙靜止/丙反向/丁正加速；雷射測距雷達解析丙丁背向行駛車距越來越遠。"},{page:"習作 P.6 第14題",title:"x-t 圖四時段：正向/靜止/折返模擬儀",file:"xt-four-segments-motion-lab.html",icon:"🏃",desc:"0~2s 正向 ➔ 2~3s 水平靜止 (v=0) ➔ 3~7s 負向折返 ➔ 7~10s 再度正向動態對照。"},{page:"習作 P.6 第16題",title:"物理量方向性羅盤分類器 (向量vs純量)",file:"physics-quantities-vector-scalar-lab.html",icon:"🧭",desc:"360° 羅盤探測位移/速度/加速度/位置（向量）vs 路徑長/速率/時間/質量（純量）。"},{page:"習作 P.7 第19題",title:"x-t vs v-t 四圖同構對照儀 (乙＝丙)",file:"motion-graphs-equivalence-matcher.html",icon:"📈",desc:"甲(x-t水平靜止)/乙(x-t斜線等速)/丙(v-t水平等速)/丁(v-t斜線等加速)；一鍵配對乙＝丙。"},{page:"習作 P.8 素養活用篇",title:"搭火車去旅行：時刻表速率 vs 速度與進站v-t",file:"train-travel-speed-velocity-lab.html",icon:"🚆",desc:"臺南至屏東路徑長 67.6km ➔ 區間丙平均速率 45km/h；彎道位移小 ➔ 平均速度約 35km/h。"},{page:"習作 P.9 素養活用篇",title:"200m 短跑競藝：彎道路徑長 vs 極速加速度",file:"track-200m-sprint-lab.html",icon:"🏃",desc:"200m是彎道路徑長；55~100m (t1~t2) 達最高速率；彎道方向改變屬於加速度運動！"}]},{id:"wb-1-4",name:"1-4 等加速度運動",items:[{page:"習作 P.6 題組17-18",title:"四條紙帶甲乙丙丁：打點痕跡解析",file:"four-tapes-ticker-timer-lab.html",icon:"📏",desc:"甲乙等速（乙 2.0cm ＞ 甲 1.5cm 速度較快）；丙減速、丁加速（點距漸大速度漸快）。"},{page:"習作 P.7 第20題",title:"自由落體質量無關：鐵球vs橡皮擦同步落地",file:"freefall-mass-independence-lab.html",icon:"🍎",desc:"400g 鐵球 vs 40g 橡皮擦 78.4m 樓頂釋放，g=9.8m/s² 恆定，4秒同時精準著地！"},{page:"習作 P.7 題組21-23",title:"自駕電動車 v-t 性能測試與南向折返",file:"autonomous-ev-vt-track-lab.html",icon:"🏎️",desc:"0~2s正加速/2~4s等速/4~6s煞車/6s折返/6~8s南向加速；4~8s連續等加速度完整診斷。"}]}]},exams:{key:"exams",name:"考卷檢討",icon:"📄",sections:[{id:"ex-unit1",name:"單元卷 01 (1-1 ~ 1-2)",items:[{page:"單元卷 01 卷第1、8題",title:"公園甲乙雙秋千：繩長 vs 擺動週期競速",file:"park-swings-length-period-lab.html",icon:"🌳",desc:"長繩甲 (3.6m) vs 短繩乙 (0.9m)；同擺角下甲週期較長；繩長 4 倍 ➔ 週期剛好 2 倍！"},{page:"單元卷 01 卷第3題",title:"單擺實驗數據擬合與任意次數時間預測器",file:"pendulum-data-fit-predictor.html",icon:"⏱️",desc:"10次(15.1s)➔50次(75.0s)；單擺等時性 T=1.50s；動態散佈圖擬合直線秒算 15 次需 22.5 秒！"},{page:"單元卷 01 卷第4題",title:"電動牙刷 vs 聲波頻率：每分鐘次數 ➔ Hz 與週期",file:"vibration-frequency-period-converter.html",icon:"🪥",desc:"每分鐘 12000 次 ➔ 頻率 f = 200 Hz；週期 T = 1/200 秒；實時示波器與生活生物頻率換算。"},{page:"單元卷 01 卷第9、10、11題",title:"次數-時間圖 A/B區斜率 ＋ 三人三擺多變因對決",file:"pendulum-slope-multi-variable-lab.html",icon:"📈",desc:"擺長增加 ➔ 週期變大 ➔ 斜率落入 B 區；三人三擺極限競速，證明唯有擺長決定週期！"},{page:"單元卷 01 卷第15題",title:"五點平面坐標矩陣：折線路徑長 vs 畢氏位移",file:"five-points-plane-coords-lab.html",icon:"🗺️",desc:"甲乙丙丁戊五點；丁➔甲➔乙➔丙路徑長 7cm (非5cm)；乙到丁畢氏斜邊位移 3√2 cm！"},{page:"單元卷 01 卷第16題",title:"阿海 2D 羅盤漫步：東4➔北3➔西8 向量位移",file:"compass-vector-walk-lab.html",icon:"🧭",desc:"東4➔北3➔西8；總路徑長 15km；淨位移 (西4, 北3) ➔ 3-4-5 畢氏定理直線位移 5 公里！"},{page:"單元卷 01 卷第18題",title:"走廊班長位置坐標 +5：正負雙向距離 d=4",file:"corridor-monitor-position-lab.html",icon:"🏫",desc:"班長在 +5；距離為 4 ➔ 向左(5-4=+1) 或 向右(5+4=+9)；雙解雷達直觀破盲！"},{page:"單元卷 01 卷第19題＋題組2",title:"小葵圓形水池漫步：一圈 vs 半圈 vs 任意弧",file:"circular-pond-walk-lab.html",icon:"🌊",desc:"半徑 R 水池跑一圈 ➔ 位移＝0，路徑長＝2πR；跑半圈 ➔ 位移＝直徑 2R，路徑長＝πR！"},{page:"單元卷 01 卷第21題",title:"園遊會遙控車：直線單向行駛 vs 直線折返",file:"rc-car-displacement-path-lab.html",icon:"🏎️",desc:"前進 10m ➔ 倒車 4m：位移 6m ≠ 路徑長 14m！破除「直線運動位移必等於路徑長」之迷思！"},{page:"單元卷 01 卷第22題",title:"小惠小明小美 3-4-5 方位矩陣：參考點＋方向＋距離",file:"observer-reference-matrix-lab.html",icon:"🧭",desc:"位置三大要素：參考點、方向、距離！從小明看小惠在「北方 3m」；從小美看小惠在「西北方 5m」！"},{page:"單元卷 01 卷第23題",title:"數線瓢蟲爬行大賽：4 條路徑起訖位移 vs 路徑長",file:"ladybug-number-line-walk-lab.html",icon:"🐞",desc:"C(-4)➔B(+3) 位移 ＋7 奪冠；位移只看起訖點（Δx = x末 - x初），與折返路徑長無關！"},{page:"單元卷 01 卷第24題",title:"阿吉推箱上斜面：斜面長 5m vs 水平 4m ＋ 垂直 3m",file:"inclined-plane-push-box-lab.html",icon:"📦",desc:"高3m、長5m ➔ 水平位移4m、垂直位移3m、斜面路徑長5m (非4+3=7m)！"}]},{id:"ex-unit2",name:"單元卷 02 (1-3 ~ 1-4)",items:[{page:"單元卷 02 卷第9、2題",title:"咖啡廳往返書店調和平均 ＋ 黃伯伯爬山位移歸零",file:"roundtrip-harmonic-speed-velocity-lab.html",icon:"☕",desc:"相距 12km (3km/h & 6km/h) ➔ 平均速率 4km/h (調和非4.5)；原路下山位移為零 ➔ 平均速度 0m/s！"},{page:"單元卷 02 卷第4題",title:"卡車筆直公路煞車減速：v-t 圖梯形面積與 175m 位移",file:"truck-braking-vt-area-lab.html",icon:"🚚",desc:"初速 25m/s 減速至 10m/s 耗時 10s；梯形面積 (10+25)×10/2 ＝ 長方形 100m ＋ 三角形 75m ＝ 175m！"},{page:"單元卷 02 卷第7題",title:"小螞蟻 2D 方格漫步：P(4,3)➔Q(8,6) 畢氏位移與速度",file:"ant-grid-velocity-lab.html",icon:"🐜",desc:"Δx=4cm, Δy=3cm ➔ 直線位移 5cm；10 秒爬完 ➔ 平均速度大小 0.5 cm/s！"},{page:"單元卷 02 卷第12、11題",title:"小智折返跑 v-t 穿軸 ＋ 小華購物 x-t 停步",file:"vt-crossover-xt-shopping-lab.html",icon:"🏃",desc:"v-t 圖穿過時間軸橫軸 3 次 ➔ 速度方向改變 3 次；x-t 水平線停留 2 次，回原點平均速度 0！"},{page:"單元卷 02 卷第13題",title:"甲乙丙三車闖 200m 隧道：v-t 圖面積積分賽跑儀",file:"tunnel-200m-vt-area-race-lab.html",icon:"🏎️",desc:"通過 200m 隧道 ➔ 誰的 v-t 累積面積最快滿 200m 誰先出！丙車初速高早期面積大 ➔ 丙車奪冠！"},{page:"單元卷 02 卷第17、10題",title:"20Hz 打點紙帶掃描 ＋ x-t 斜率比較",file:"ticker-20hz-xt-slope-lab.html",icon:"📏",desc:"20Hz 時間間隔 0.05s，點距均勻為等速 (選C)；x-t 斜率最平緩者速率最慢 (選C)！"},{page:"單元卷 02 卷第22、18題",title:"減速跑道三向量雷達：位移與速度永遠同向 vs 加速度反向",file:"deceleration-three-vectors-lab.html",icon:"🎯",desc:"向前減速時位移與速度恆同向向前 (選C)；加速度反向向後拖拽；加速度單位為 m/s²！"},{page:"單元卷 02 卷第24、19題",title:"10秒自由落體 500m 摩天大樓 ＋ 跑車破百加速度計",file:"freefall-500m-supercar-accel-lab.html",icon:"🏢",desc:"落體 10s 高度 h=1/2gt²=500m (末速 100m/s)；跑車 2 秒加速到 100m/s ➔ a = 50 m/s²！"},{page:"單元卷 02 卷第25、21題",title:"v-t ↔ a-t 多段折線微分器 ＋ 第 30 秒等速 a=0 解析器",file:"vt-to-at-multi-stage-lab.html",icon:"📊",desc:"v-t 斜率轉 a-t 階梯圖 (正階梯→零→負階梯·選C)；第 30 秒為等速水平線 ➔ a＝0 m/s² (選C)！"},{page:"單元卷 02 卷第4頁題組1",title:"滑冰選手繞一圈 200m：位移 0 vs 路徑長 200m",file:"skater-circular-track-lab.html",icon:"⛸️",desc:"繞環形冰道一圈 200m 回到起點 A：位移＝0 (起訖點重合·選C)；路徑長＝200m；v-t 圖先升後降 (選A)！"},{page:"單元卷 02 卷第4頁題組2",title:"晴天 4s(32m, a=4) vs 雨天 8s(64m, a=2) 濕滑路面煞車比較儀",file:"weather-braking-distance-lab.html",icon:"🚗",desc:"初速 16m/s：晴天 a=4(4s·32m)；雨天濕滑 a=2(時間翻倍8s·距離翻倍64m)！"}]},{id:"ex-unit3",name:"綜合卷 03 (全章綜合)",items:[{page:"綜合卷 03 卷第6題",title:"小偉小瑩小哈三車競騎：等速 vs 靜止 vs 變速追逐",file:"three-cyclists-race-lab.html",icon:"🚴",desc:"小偉衝至10m後停留；小瑩等速2m/s穩健騎行 (5s末同達10m·位移相同·選A)；小哈變速達12m！"},{page:"綜合卷 03 卷第7題",title:"阿布 100m 操場跑 1/6 圈：60° 正三角形位移 100m",file:"circular-track-onesixth-lab.html",icon:"🏃",desc:"跑 1/6 圈 ➔ 圓心角 60° 構成邊長 100m 正三角形 ➔ 位移＝100m (選A)；路徑長＝104.7m！"},{page:"綜合卷 03 卷第8題",title:"四隻動物 2D 方格坐標：參考點切換與方位雷達",file:"four-animals-grid-radar-lab.html",icon:"🧭",desc:"位置三要素：參考點＋方向＋距離！蚱蜢在螞蟻西南方距離為 3√2 ≈ 4.24cm (非3cm·選D)！"},{page:"綜合卷 03 卷第9題",title:"沛沛直線纜車 vs 小雯蜿蜒山路：山頂會合",file:"cablecar-mountain-displacement-lab.html",icon:"🚠",desc:"同起點出發同至山頂：起訖點相同 ➔ 兩人位移完全相同 (選B)；小雯繞山路徑長遠大於沛沛！"},{page:"綜合卷 03 卷第10題",title:"48m 大樓升降機：上升 6m/s (8s) ＋ 下降 8m/s (6s) ＝ 14s",file:"elevator-roundtrip-time-lab.html",icon:"🏗️",desc:"爬升 48m (6m/s) 耗時 8s；下降 48m (8m/s) 耗時 6s ➔ 升降一趟總耗時 8＋6＝14 秒 (選C)！"},{page:"綜合卷 03 卷第12題",title:"x-t 折線 ➔ v-t 正負階梯微分儀：前進、停留、折返",file:"xt-to-vt-steps-lab.html",icon:"📈",desc:"x-t 正斜率前進 ➔ v-t 正值階梯；x-t 水平線停留 ➔ v-t 零值；x-t 負斜率折返 ➔ v-t 負值階梯 (選B)！"},{page:"綜合卷 03 卷第13題",title:"A、B 雙車追逐 x-t 領先與交會：t=0 A車在前方",file:"dual-car-xt-chase-lab.html",icon:"🚗",desc:"t=0 時 A 車在前方 x₀>0，B 車自原點加速起跑 ➔ t=0 時 A 車在前方 (選B)；t₁ 速率相等；t₂ 相遇交會！"},{page:"綜合卷 03 卷第16題",title:"法國 360km/h 子彈列車 400m 煞停：a = -12.5 m/s²",file:"bullet-train-braking-lab.html",icon:"🚄",desc:"360km/h ＝ 100m/s，400m 煞停 ➔ a ＝ (0²-100²)/(2×400) ＝ －12.5 m/s² (選B)；需時 8 秒！"},{page:"綜合卷 03 卷第18題",title:"5kg 磚塊 vs 10kg 鐵球落體等時儀：質量無關 3 秒落地",file:"galileo-freefall-mass-lab.html",icon:"🧱",desc:"不計阻力下自由落體 g=9.8m/s² 與質量無關！5kg 磚塊需 3s，10kg 鐵球亦為 3s (選B)！"},{page:"綜合卷 03 卷第6頁題組2",title:"威利颱風 2D 格點坐標 ＋ 畢氏 3-4-5 位移 500km",file:"typhoon-grid-displacement-lab.html",icon:"🌀",desc:"以臺東(0,0)為參考點：A點坐標(3,-1) (選B)；移動至B(-1,2) ➔ 畢氏位移 √(400²+300²)＝500km (選C)！"},{page:"綜合卷 03 卷第6頁題組3",title:"龜兔賽跑 x-t 圖：途中 3 次相遇 ＋ 烏龜奪冠平均速度",file:"tortoise-hare-race-lab.html",icon:"🐢",desc:"烏龜等速直線；兔子暴衝➔樹下睡覺(水平線)➔狂追！途中相遇 3 次 (選C)；50分烏龜平均速度較大 (選A)！"},{page:"綜合卷 03 卷第6頁題組4",title:"台灣高鐵 2.5 分鐘破 300km/h ＋ 梯形 v-t 圖巡航解析器",file:"thsrc-trapezoid-vt-lab.html",icon:"🚄",desc:"常用加速度 2.0 km/h/s ➔ 破 300km/h 需 2.5 分鐘 (選A)；加速→等速→減速呈現「等腰梯形 v-t 圖」(選B)！"}]}]}};function L(){["nature","life-master","fame-escape","tools","workshop","other"].forEach(n=>{const t=document.querySelector(`[data-subnav-for="${n}"]`);if(!t)return;if(n==="nature"){let s=`
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
      `;Object.keys(j).forEach((a,l)=>{const r=j[a],c=l===0;s+=`
          <div class="nested-sub-group">
            <button
              type="button"
              class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.2 rounded-lg text-[11.5px] font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
              data-sub-toggle="sub-${a}"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span>${r.icon}</span>
                <span>${r.name}</span>
              </span>
              <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 ${c?"is-rotated":""} transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
            </button>

            <div id="sub-${a}" class="nested-subnav ${c?"is-open":""} space-y-0.5 pl-1.5">
        `,r.sections.forEach(d=>{const u=!!d.isOpenDefault;s+=`
            <div class="nested-section-group">
              <button
                type="button"
                class="nested-sec-toggle w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
                data-sec-toggle="sec-${d.id}"
              >
                <span class="truncate font-medium text-sky-950">${m(d.name)}</span>
                <svg class="sec-arrow w-2 h-2 text-slate-400 ${u?"is-rotated":""} transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sec-${d.id}" class="nested-subnav ${u?"is-open":""} space-y-0.5 pl-2 border-l border-sky-200">
          `,d.items.forEach(p=>{const b=`https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/${p.file}`;s+=`
              <button
                type="button"
                class="nested-item-btn"
                data-embed-title="${m(p.page)} · ${m(p.title)}"
                data-embed-icon="${p.icon||"🔬"}"
                data-embed-url="${b}"
                data-embed-desc="${m(p.desc||"")}"
                title="點擊在右側開啟「${m(p.page)} ${m(p.title)}」"
              >
                <span class="flex items-center gap-1 truncate">
                  <span class="text-[10px] text-sky-600 font-bold bg-sky-50 border border-sky-200 px-1 py-0.5 rounded flex-shrink-0">${m(p.page)}</span>
                  <span class="truncate text-[11px] text-slate-600">${m(p.title)}</span>
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
        <!-- 2. 九年級複習 巢狀群組 (11個單元 PDF 原生全螢幕直開) -->
        <!-- ========================================== -->
        <div class="nested-group mb-1">
          <button
            type="button"
            class="nested-parent-toggle w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-amber-50/80 hover:text-amber-600 hover:bg-amber-100 border border-amber-200/90 transition-all text-left shadow-sm"
            data-nested-toggle="grade9-review-sub"
          >
            <span class="flex items-center gap-1.5">
              <span class="text-sm flex-shrink-0">🎯</span>
              <span class="font-black text-slate-800 text-xs">九年級複習</span>
            </span>
            <svg class="nested-arrow w-3.5 h-3.5 text-slate-500 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          <div id="grade9-review-sub" class="nested-subnav is-open space-y-1.5 pl-1 pt-1">
            
            <!-- 📘 第 3 冊（八上理化）PDF 群組 -->
            <div class="nested-sub-group">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-sky-50/80 hover:bg-sky-100/90 border border-sky-200/80 transition-all text-left"
                data-sub-toggle="sub-rev-book3-pdf"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span class="text-xs flex-shrink-0">📘</span>
                  <span class="truncate text-[11.5px] font-bold text-slate-800">第 3 冊（八上理化）</span>
                  <span class="text-[9px] bg-sky-200/80 text-sky-800 px-1.5 py-0.2 rounded-full font-bold">6單元</span>
                </span>
                <svg class="sub-arrow w-3 h-3 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sub-rev-book3-pdf" class="nested-subnav is-open space-y-0.5 pl-2 pt-0.5 border-l border-sky-200">
                <a
                  href="./assets/review-pdf/unit-01.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-sky-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 1 基本測量 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-sky-700 font-bold bg-sky-100 border border-sky-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 1 基本測量</span>
                    </span>
                    <span class="text-[10px] text-sky-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-02.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-sky-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 2 物質的世界 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-sky-700 font-bold bg-sky-100 border border-sky-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 2 物質的世界</span>
                    </span>
                    <span class="text-[10px] text-sky-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-03.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-sky-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 3 波動與聲音 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-sky-700 font-bold bg-sky-100 border border-sky-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 3 波動與聲音</span>
                    </span>
                    <span class="text-[10px] text-sky-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-04.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-sky-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 4 光與顏色 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-sky-700 font-bold bg-sky-100 border border-sky-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 4 光與顏色</span>
                    </span>
                    <span class="text-[10px] text-sky-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-05.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-sky-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 5 溫度與熱量 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-sky-700 font-bold bg-sky-100 border border-sky-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 5 溫度與熱量</span>
                    </span>
                    <span class="text-[10px] text-sky-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-06.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-sky-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 6 物質的構造 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-sky-700 font-bold bg-sky-100 border border-sky-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 6 物質的構造</span>
                    </span>
                    <span class="text-[10px] text-sky-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>
              </div>
            </div>

            <!-- 📗 第 4 冊（八下理化）PDF 群組 -->
            <div class="nested-sub-group">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200/80 transition-all text-left"
                data-sub-toggle="sub-rev-book4-pdf"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span class="text-xs flex-shrink-0">📗</span>
                  <span class="truncate text-[11.5px] font-bold text-slate-800">第 4 冊（八下理化）</span>
                  <span class="text-[9px] bg-emerald-200/80 text-emerald-800 px-1.5 py-0.2 rounded-full font-bold">5單元</span>
                </span>
                <svg class="sub-arrow w-3 h-3 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sub-rev-book4-pdf" class="nested-subnav is-open space-y-0.5 pl-2 pt-0.5 border-l border-emerald-200">
                <a
                  href="./assets/review-pdf/unit-07.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-emerald-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 7 化學反應與氧化還原 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-emerald-700 font-bold bg-emerald-100 border border-emerald-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 7 化學反應與氧化還原</span>
                    </span>
                    <span class="text-[10px] text-emerald-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-08.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-emerald-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 8 酸鹼鹽 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-emerald-700 font-bold bg-emerald-100 border border-emerald-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 8 酸鹼鹽</span>
                    </span>
                    <span class="text-[10px] text-emerald-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-09.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-emerald-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 9 反應速率與化學平衡 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-emerald-700 font-bold bg-emerald-100 border border-emerald-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 9 反應速率與化學平衡</span>
                    </span>
                    <span class="text-[10px] text-emerald-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-10.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-emerald-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 10 有機化合物 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-emerald-700 font-bold bg-emerald-100 border border-emerald-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 10 有機化合物</span>
                    </span>
                    <span class="text-[10px] text-emerald-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>

                <a
                  href="./assets/review-pdf/unit-11.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nested-item-btn block w-full py-1 px-2 rounded-md hover:bg-emerald-50 transition-colors"
                  title="在新分頁全螢幕開啟「單元 11 力與壓力 (PDF 教用版)」"
                >
                  <span class="flex items-center justify-between gap-1 w-full">
                    <span class="flex items-center gap-1 truncate">
                      <span class="text-[9.5px] text-emerald-700 font-bold bg-emerald-100 border border-emerald-200 px-1 py-0.2 rounded flex-shrink-0">PDF</span>
                      <span class="truncate text-[11px] font-medium text-slate-700">單元 11 力與壓力</span>
                    </span>
                    <span class="text-[10px] text-emerald-500 font-mono flex-shrink-0">↗</span>
                  </span>
                </a>
              </div>
            </div>

            <!-- 📑 理化 3-4 冊 全冊解答 PDF -->
            <a
              href="./assets/review-pdf/unit-ans.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="nested-item-btn block w-full py-1.5 px-2.5 rounded-xl bg-indigo-50/80 hover:bg-indigo-100/90 border border-indigo-200/80 transition-all shadow-2xs group mt-1"
              title="在新分頁全螢幕開啟「理化 3-4 冊 全冊解答 (PDF)」"
            >
              <span class="flex items-center justify-between gap-1.5 w-full">
                <span class="flex items-center gap-1.5 truncate">
                  <span class="text-[10px] text-indigo-800 font-black bg-indigo-200/80 border border-indigo-300 px-1.5 py-0.2 rounded flex-shrink-0">解答</span>
                  <span class="truncate text-[11.5px] font-bold text-slate-800 group-hover:text-indigo-900">📑 3-4 冊全冊解答 (PDF)</span>
                </span>
                <span class="text-[10px] text-indigo-600 font-mono font-bold flex-shrink-0">↗</span>
              </span>
            </a>

            <!-- 🎯 線上題庫大廳 下拉式選單 -->
            <div class="nested-sub-group mt-1">
              <button
                type="button"
                class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200/80 transition-all text-left"
                data-sub-toggle="sub-rev-online-hub"
              >
                <span class="flex items-center gap-1.5 truncate">
                  <span class="text-xs flex-shrink-0">🎯</span>
                  <span class="truncate text-[11.5px] font-bold text-slate-800">線上題庫大廳</span>
                </span>
                <svg class="sub-arrow w-3 h-3 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </button>

              <div id="sub-rev-online-hub" class="nested-subnav space-y-0.5 pl-2 pt-0.5 border-l border-amber-200">
                <!-- 題庫總覽大廳 -->
                <button
                  type="button"
                  class="nested-item-btn w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-all text-left"
                  data-embed-title="理化 3-4 冊 總複習互動題庫大廳"
                  data-embed-icon="🎯"
                  data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/review-hub.html"
                  data-embed-desc="11 個核心單元、概念挖空、Kahoot 挑戰與生活素養專題。"
                  title="點擊在右側開啟「總複習互動題庫大廳」"
                >
                  <span class="flex items-center gap-1 truncate">
                    <span class="text-[9.5px] text-amber-700 font-bold bg-amber-100 border border-amber-200 px-1 py-0.2 rounded flex-shrink-0">總覽</span>
                    <span class="truncate text-[11px] text-slate-700 font-medium">🌟 3-4 冊題庫大廳</span>
                  </span>
                  <span class="text-[10px] text-slate-400 font-mono flex-shrink-0">→</span>
                </button>

                <!-- 8上光學實驗室專題 -->
                <button
                  type="button"
                  class="nested-item-btn w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 transition-all text-left"
                  data-embed-title="光學互動實驗室總覽"
                  data-embed-icon="💡"
                  data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/optics-hub.html"
                  data-embed-desc="包含透鏡成像、折射反射與光學儀器等互動教具總覽。"
                  title="點擊在右側開啟「光學互動實驗室總覽」"
                >
                  <span class="flex items-center gap-1 truncate">
                    <span class="text-[9.5px] text-amber-700 font-bold bg-amber-100 border border-amber-200 px-1 py-0.2 rounded flex-shrink-0">光學</span>
                    <span class="truncate text-[11px] text-slate-700 font-medium">💡 光學互動實驗室</span>
                  </span>
                  <span class="text-[10px] text-slate-400 font-mono flex-shrink-0">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `,t.innerHTML=s;return}if(n==="life-master"){const s=`
        <!-- 生活達人秀專區總覽入口 -->
        <button
          type="button"
          class="nested-item-btn mb-1.5 bg-sky-50/80 hover:bg-sky-100/90 border border-sky-200 text-sky-950 font-bold"
          data-embed-title="生活達人秀show · 國三科學探索學習殿堂"
          data-embed-icon="🌟"
          data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/life-master-show.html"
          data-embed-desc="國三科學探索校定課程「生活達人秀show」：收錄牛頓、焦耳、霍金三大科學巨擘生平傳奇、核心定律、講義教材與學習單。"
          title="點擊在右側開啟「生活達人秀show」專區首頁"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-[10px] text-sky-800 font-black bg-sky-200/90 border border-sky-300 px-1.5 py-0.5 rounded flex-shrink-0">專區</span>
            <span class="truncate text-[11.5px] font-bold text-slate-800">🌟 生活達人秀總覽大廳</span>
          </span>
          <span class="text-[10px] text-sky-600 font-mono font-bold flex-shrink-0">→</span>
        </button>

        <!-- 1. 🍎 艾薩克·牛頓 -->
        <div class="nested-sub-group mb-1">
          <button
            type="button"
            class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[11.5px] font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition-all text-left bg-white border border-slate-200/70"
            data-sub-toggle="sub-life-newton"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm">🍎</span>
              <span class="font-bold text-slate-800">艾薩克·牛頓</span>
              <span class="text-[9.5px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-semibold">力學與萬有引力</span>
            </span>
            <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div id="sub-life-newton" class="nested-subnav is-open space-y-1 pl-1.5 pt-1">
            <button
              type="button"
              class="nested-item-btn"
              data-embed-title="艾薩克·牛頓 · 人物傳奇與課堂問答"
              data-embed-icon="🍎"
              data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/life-master-show.html"
              data-embed-desc="古典物理力學之父：三大運動定律、萬有引力、微積分與光學色散實驗。"
              title="點擊在右側開啟「牛頓生平傳奇與問答」"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-xs">✨</span>
                <span class="truncate">牛頓生平傳奇與問答</span>
              </span>
              <span class="text-[10px] text-amber-600 font-mono">→</span>
            </button>
            <a
              href="https://hungjuiying0606-dotcom.github.io/personal-main-hub/assets/life-master-show/newton-slides.pdf"
              target="_blank"
              class="subnav-direct-btn w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50/80 transition-all text-left border border-slate-100"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-xs">📑</span>
                <span class="truncate">牛頓單元講義與簡報 PDF</span>
              </span>
              <span class="text-[10px] text-amber-600 font-mono">↗</span>
            </a>
          </div>
        </div>

        <!-- 2. ☕ 詹姆斯·焦耳 -->
        <div class="nested-sub-group mb-1">
          <button
            type="button"
            class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[11.5px] font-bold text-slate-700 hover:text-teal-700 hover:bg-teal-50 transition-all text-left bg-white border border-slate-200/70"
            data-sub-toggle="sub-life-joule"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm">☕</span>
              <span class="font-bold text-slate-800">詹姆斯·焦耳</span>
              <span class="text-[9.5px] bg-teal-100 text-teal-800 px-1 py-0.2 rounded font-semibold">熱功當量</span>
            </span>
            <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div id="sub-life-joule" class="nested-subnav is-open space-y-1 pl-1.5 pt-1">
            <button
              type="button"
              class="nested-item-btn"
              data-embed-title="詹姆斯·焦耳 · 熱功當量與學習單探究"
              data-embed-icon="☕"
              data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/life-master-show.html"
              data-embed-desc="能量守恆大師：打破熱質說、精密測定熱功當量與焦耳定律。"
              title="點擊在右側開啟「焦耳生平與熱功當量」"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-xs">✨</span>
                <span class="truncate">焦耳生平與能量守恆</span>
              </span>
              <span class="text-[10px] text-teal-600 font-mono">→</span>
            </button>
            <a
              href="https://hungjuiying0606-dotcom.github.io/personal-main-hub/assets/life-master-show/joule-worksheet.pdf"
              target="_blank"
              class="subnav-direct-btn w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50/80 transition-all text-left border border-slate-100"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-xs">📝</span>
                <span class="truncate">焦耳熱功當量學習單 PDF</span>
              </span>
              <span class="text-[10px] text-teal-600 font-mono">↗</span>
            </a>
          </div>
        </div>

        <!-- 3. 🌌 史蒂芬·霍金 -->
        <div class="nested-sub-group mb-1">
          <button
            type="button"
            class="nested-sub-toggle w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[11.5px] font-bold text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition-all text-left bg-white border border-slate-200/70"
            data-sub-toggle="sub-life-hawking"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-sm">🌌</span>
              <span class="font-bold text-slate-800">史蒂芬·霍金</span>
              <span class="text-[9.5px] bg-purple-100 text-purple-800 px-1 py-0.2 rounded font-semibold">黑洞與時間簡史</span>
            </span>
            <svg class="sub-arrow w-2.5 h-2.5 text-slate-400 is-rotated transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div id="sub-life-hawking" class="nested-subnav is-open space-y-1 pl-1.5 pt-1">
            <button
              type="button"
              class="nested-item-btn"
              data-embed-title="史蒂芬·霍金 · 黑洞時空與生命奇蹟"
              data-embed-icon="🌌"
              data-embed-url="https://hungjuiying0606-dotcom.github.io/personal-main-hub/life-master-show.html"
              data-embed-desc="當代傳奇宇宙學家：黑洞奇異點、霍金輻射、《時間簡史》與帕運仰望星空。"
              title="點擊在右側開啟「霍金生平與宇宙探索」"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-xs">✨</span>
                <span class="truncate">霍金生平與宇宙探索</span>
              </span>
              <span class="text-[10px] text-purple-600 font-mono">→</span>
            </button>
            <a
              href="https://hungjuiying0606-dotcom.github.io/personal-main-hub/assets/life-master-show/hawking-slides.pdf"
              target="_blank"
              class="subnav-direct-btn w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-700 hover:text-purple-600 hover:bg-purple-50/80 transition-all text-left border border-slate-100"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-xs">📑</span>
                <span class="truncate">霍金宇宙學簡報 PDF</span>
              </span>
              <span class="text-[10px] text-purple-600 font-mono">↗</span>
            </a>
            <a
              href="https://hungjuiying0606-dotcom.github.io/personal-main-hub/assets/life-master-show/hawking-worksheet.pdf"
              target="_blank"
              class="subnav-direct-btn w-full flex items-center justify-between px-2 py-1 rounded-md text-[11px] font-medium text-slate-700 hover:text-purple-600 hover:bg-purple-50/80 transition-all text-left border border-slate-100"
            >
              <span class="flex items-center gap-1.5 truncate">
                <span class="text-xs">📝</span>
                <span class="truncate">霍金觀後感學習單 PDF</span>
              </span>
              <span class="text-[10px] text-purple-600 font-mono">↗</span>
            </a>
          </div>
        </div>

        <!-- 4. 📑 全冊講義 -->
        <a
          href="https://hungjuiying0606-dotcom.github.io/personal-main-hub/assets/life-master-show/science-explore-all.pdf"
          target="_blank"
          class="nested-item-btn mt-1.5 bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 font-bold"
          title="全螢幕開啟國三科學探索全冊講義 PDF"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-[10px] text-emerald-700 font-black bg-emerald-200/90 border border-emerald-300 px-1.5 py-0.5 rounded flex-shrink-0">全冊</span>
            <span class="truncate text-[11.5px] font-bold text-slate-800">📑 國三科學探索講義 (全)</span>
          </span>
          <span class="text-[10px] text-emerald-600 font-mono font-bold flex-shrink-0">↗</span>
        </a>
      `;t.innerHTML=s;return}if(n==="tools"){const s=`
        <!-- 康軒電子書網頁版 -->
        <button
          type="button"
          class="nested-item-btn mb-1.5 bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200 text-amber-950 font-bold"
          data-embed-title="康軒電子書網頁版"
          data-embed-icon="📖"
          data-embed-url="https://945cloud.knsh.com.tw/"
          data-embed-desc="康軒945Cloud 國中自然與各科教師 Web 電子書教學平台（需教師帳號登入）。"
          title="點擊開啟「康軒電子書網頁版」"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-[10px] text-amber-800 font-black bg-amber-200/90 border border-amber-300 px-1.5 py-0.5 rounded flex-shrink-0">康軒雲</span>
            <span class="truncate text-xs font-bold text-slate-800">📖 康軒電子書網頁版</span>
          </span>
          <span class="text-[10px] text-amber-600 font-mono font-bold flex-shrink-0">↗</span>
        </button>

        <!-- LoiLoNote 數位教學平台 -->
        <button
          type="button"
          class="nested-item-btn mb-1.5 bg-sky-50/80 hover:bg-sky-100/90 border border-sky-200 text-sky-950 font-bold"
          data-embed-title="LoiLoNote 數位教學平台"
          data-embed-icon="📱"
          data-embed-url="https://loilonote.app/"
          data-embed-desc="LoiLoNote 課堂數位互動、任務卡派發、作業繳交與全班發表平台。"
          title="點擊開啟「LoiLoNote 數位教學平台」"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-[10px] text-sky-800 font-black bg-sky-200/90 border border-sky-300 px-1.5 py-0.5 rounded flex-shrink-0">LoiLo</span>
            <span class="truncate text-xs font-bold text-slate-800">📱 LoiLoNote 數位教學平台</span>
          </span>
          <span class="text-[10px] text-sky-600 font-mono font-bold flex-shrink-0">↗</span>
        </button>

        <!-- 班級互動工具箱 -->
        <button
          type="button"
          class="nested-item-btn mb-1.5 bg-rose-50/80 hover:bg-rose-100/90 border border-rose-200 text-rose-950 font-bold"
          data-embed-title="班級互動工具箱"
          data-embed-icon="🎒"
          data-embed-url="https://hungjuiying0606-dotcom.github.io/classroom-agent-kit/"
          data-embed-desc="提供班級抽籤、小組積分榜、倒數計時、趣味泡泡噪音監測與智慧名單同步的班級教學工具箱。"
          title="點擊開啟「班級互動工具箱」"
        >
          <span class="flex items-center gap-1.5 truncate">
            <span class="text-[10px] text-rose-800 font-black bg-rose-200/90 border border-rose-300 px-1.5 py-0.5 rounded flex-shrink-0">班級</span>
            <span class="truncate text-xs font-bold text-slate-800">🎒 班級互動工具箱</span>
          </span>
          <span class="text-[10px] text-rose-600 font-mono font-bold flex-shrink-0">→</span>
        </button>
      `;t.innerHTML=s;return}if(n==="workshop"){const s=`
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
      `;t.innerHTML=s;return}const e=i.allProjects.filter(s=>s.categoryKey===n);if(e.length===0){t.innerHTML='<div class="text-[11px] text-slate-400 px-3 py-1">暫無專案</div>';return}t.innerHTML=e.map(s=>`
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
    `).join("")}),document.querySelectorAll(".subnav-item").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-project-target");T(e)})}),document.querySelectorAll(".nested-parent-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-nested-toggle"),s=document.getElementById(e),a=n.querySelector(".nested-arrow");if(s){const l=s.classList.contains("is-open");s.classList.toggle("is-open",!l),a&&a.classList.toggle("is-rotated",!l)}})}),document.querySelectorAll(".nested-sub-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-sub-toggle"),s=document.getElementById(e),a=n.querySelector(".sub-arrow");if(s){const l=s.classList.contains("is-open");s.classList.toggle("is-open",!l),a&&a.classList.toggle("is-rotated",!l)}})}),document.querySelectorAll(".nested-sec-toggle").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-sec-toggle"),s=document.getElementById(e),a=n.querySelector(".sec-arrow");if(s){const l=s.classList.contains("is-open");s.classList.toggle("is-open",!l),a&&a.classList.toggle("is-rotated",!l)}})}),document.querySelectorAll(".nested-item-btn").forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation();const e=n.getAttribute("data-embed-title"),s=n.getAttribute("data-embed-icon")||"🔬",a=n.getAttribute("data-embed-url"),l=n.getAttribute("data-embed-desc");document.querySelectorAll(".subnav-item, .nested-item-btn").forEach(r=>r.classList.remove("active-subitem")),n.classList.add("active-subitem"),C({id:"naturelab-tool-embed",title:e,icon:s,url:a,description:l})})})}function T(o){var e;const n=i.allProjects.find(s=>s.id===o);if(!n)return;i.activeCategory=n.categoryKey,w(n.categoryKey);const t=document.getElementById("filter-active-count");t&&(t.textContent=((e=h[n.categoryKey])==null?void 0:e.name)||n.categoryKey),document.querySelectorAll(".subnav-item").forEach(s=>{const a=s.getAttribute("data-project-target")===o;s.classList.toggle("active-subitem",a)}),n.url?C(n):(y(),g())}function D(o){if(!o)return!1;const n=o.toLowerCase();return n.includes("notion.site")||n.includes("notion.so")||n.includes("knsh.com.tw")||n.includes("loilonote.app")}function C(o){const n=document.getElementById("category-header-row"),t=document.getElementById("cards-container"),e=document.getElementById("empty-state"),s=document.getElementById("embed-viewer-container"),a=document.getElementById("embed-iframe-wrapper"),l=document.getElementById("embed-iframe"),r=document.getElementById("embed-external-card"),c=document.getElementById("embed-item-title"),d=document.getElementById("embed-item-icon"),u=document.getElementById("embed-external-link"),p=document.getElementById("embed-card-icon"),b=document.getElementById("embed-card-title"),f=document.getElementById("embed-card-desc"),x=document.getElementById("embed-card-launch-btn"),v=document.getElementById("embed-card-launch-text");if(n&&n.classList.add("hidden"),t&&t.classList.add("hidden"),e&&e.classList.add("hidden"),s&&s.classList.remove("hidden"),c&&(c.textContent=o.title),d&&(d.textContent=o.icon),u&&(u.href=o.url),D(o.url)||o.noIframe)a&&a.classList.add("hidden"),l&&(l.src="about:blank"),r&&r.classList.remove("hidden"),p&&(p.textContent=o.icon||"📝"),b&&(b.textContent=o.title),f&&(f.textContent=o.description||"點擊下方按鈕在新分頁中完整閱讀與操作此外部資源。"),x&&(x.href=o.url),v&&(o.url.includes("notion")?v.textContent="🚀 在新分頁開啟 Notion 講義筆記":o.url.includes("knsh")?v.textContent="🚀 前往康軒國中電子書網頁版（需登入）":o.url.includes("loilonote")?v.textContent="🚀 前往 LoiLoNote 數位教學平台":v.textContent="🚀 在新分頁全螢幕開啟資源");else if(r&&r.classList.add("hidden"),a&&a.classList.remove("hidden"),l)try{const k=new URL(o.url,window.location.href);k.searchParams.set("_t",Date.now()),l.src=k.toString()}catch{l.src=o.url}s==null||s.scrollIntoView({behavior:"smooth",block:"start"})}function y(){const o=document.getElementById("category-header-row"),n=document.getElementById("embed-viewer-container"),t=document.getElementById("embed-iframe"),e=document.getElementById("embed-external-card"),s=document.getElementById("embed-iframe-wrapper");o&&o.classList.remove("hidden"),n&&n.classList.add("hidden"),e&&e.classList.add("hidden"),s&&s.classList.remove("hidden"),t&&(t.src="about:blank"),document.querySelectorAll(".subnav-item, .nested-item-btn").forEach(a=>a.classList.remove("active-subitem")),g()}function w(o){const n=document.querySelectorAll(".category-subnav");document.querySelectorAll(".filter-btn").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-filter")===o)}),n.forEach(e=>{const s=e.getAttribute("data-subnav-for"),a=e.closest(".category-group"),l=a?a.querySelector(".chevron-arrow"):null;s===o?(e.classList.add("is-open"),l&&l.classList.add("is-rotated")):(e.classList.remove("is-open"),l&&l.classList.remove("is-rotated"))})}function $(){const o=document.getElementById("embed-back-btn");o&&o.addEventListener("click",()=>{y()});const n=document.querySelectorAll(".filter-btn"),t=document.getElementById("filter-active-count");n.forEach(l=>{l.addEventListener("click",r=>{var f;const c=l.getAttribute("data-filter")||"all",d=i.activeCategory===c,u=l.closest(".category-group"),p=u?u.querySelector(".category-subnav"):null,b=u?u.querySelector(".chevron-arrow"):null;if(d&&p&&c!=="all"){const x=p.classList.contains("is-open");p.classList.toggle("is-open",!x),b&&b.classList.toggle("is-rotated",!x);return}i.activeCategory=c,t&&(t.textContent=((f=h[c])==null?void 0:f.name)||c),document.querySelectorAll(".subnav-item").forEach(x=>x.classList.remove("active-subitem")),y(),w(c),g()})});const e=document.getElementById("search-input"),s=document.getElementById("clear-search-btn");e&&e.addEventListener("input",l=>{i.searchQuery=l.target.value,s&&s.classList.toggle("hidden",!i.searchQuery),y(),g()}),s&&s.addEventListener("click",()=>{e&&(e.value="",i.searchQuery="",s.classList.add("hidden"),y(),g(),e.focus())});const a=document.getElementById("reset-filter-btn");a&&a.addEventListener("click",()=>{i.activeCategory="all",i.searchQuery="",e&&(e.value=""),s&&s.classList.add("hidden"),t&&(t.textContent="全部"),y(),w("all"),g()})}function F(o){i.allProjects=[],i.lastUpdated=o.lastUpdated||o.generatedAt||new Date().toISOString().split("T")[0],(o.categories||[]).forEach(n=>{(n.sites||[]).forEach(t=>{var r,c;const e=B(t,n.id),s=((r=h[e])==null?void 0:r.name)||n.title||"其他",a=I(t,e);let l=null;t.homepageState==="linked"&&(l=t.url||t.deployments&&((c=t.deployments[0])==null?void 0:c.url)||null),i.allProjects.push({id:t.id,title:t.title,description:t.description||"",status:t.status||"active",homepageState:t.homepageState||"linked",url:l,categoryKey:e,categoryTitle:s,icon:a})})}),P(),L(),g()}function m(o){return String(o||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function E(){$(),A()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E();

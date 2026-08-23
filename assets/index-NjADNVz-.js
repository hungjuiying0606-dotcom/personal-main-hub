(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{x()});const i={allProjects:[],activeCategory:"all",searchQuery:"",lastUpdated:"--"},u={all:{name:"全部專案",icon:"🌟",heading:"全部專案展示",desc:"點選左側分類標籤或搜尋關鍵字即時篩選。"},nature:{name:"國中自然與實驗",icon:"🧪",badgeClass:"badge-theme-nature",heading:"國中自然與動態實驗室",desc:"收錄國中理化與地球科學動態互動教具、總複習題庫與章節實驗室。"},"fame-escape":{name:"名人堂與解謎",icon:"🏛️",badgeClass:"badge-theme-fame",heading:"世界名人堂與密室逃脫解謎",desc:"科學先驅人物誌、線上沉浸式閱讀理解與密室逃脫解謎遊戲。"},tools:{name:"實用工具箱",icon:"🛠️",badgeClass:"badge-theme-tools",heading:"班級互動與數位工具箱",desc:"抽籤、計時、課堂積分、噪音監測與本機 AI Agent 實用工具。"},other:{name:"其他",icon:"💡",badgeClass:"badge-theme-other",heading:"其他專案展示",desc:"跨領域個人創作、教師專區與其他專案。"}};function b(s,a){const e=(s.id||"").toLowerCase(),o=(s.title||"").toLowerCase();return e==="naturelab"||e.includes("book-selector")||o.includes("教師派發")||o.includes("派課")||o.includes("舊版")?"other":e.includes("hall-of-fame")||o.includes("名人堂")||e.includes("grade")||e.includes("nature")||e.includes("review")?"nature":e.includes("escape")||e.includes("einstein")||e.includes("nobel")||o.includes("密室逃脫")?"fame-escape":e.includes("classbuddy")||e.includes("voice-cloner")||e.includes("agent")||o.includes("工具箱")||o.includes("班級")?"tools":a==="investing"||e.includes("stock")||a==="other"||a==="computer"?"other":a==="teaching"?"nature":"other"}function v(s,a){const e=(s.id||"").toLowerCase();return e.includes("grade9-progress")?"⚡":e.includes("review")?"🎯":e.includes("hall-of-fame")?"🏛️":e.includes("nobel")?"🏅":e.includes("escape")||e.includes("einstein")?"🗝️":e.includes("classbuddy")?"🎒":e.includes("voice")?"🎙️":e.includes("stock")?"📈":e.includes("portal")||e.includes("naturelab")?"🔬":e.includes("selector")?"📖":{nature:"🧪","fame-escape":"🏛️",tools:"🛠️",other:"💡"}[a]||"🚀"}async function x(){const s="./catalog.json";try{const a=await fetch(s);if(!a.ok)throw new Error(`HTTP error ${a.status}`);const e=await a.json();C(e)}catch(a){console.warn("載入 catalog.json 失敗，使用內建備用資料：",a),E()}w(),L(),h()}function C(s){i.lastUpdated=s.lastUpdated||"2026-08-22";const a=s.categories||[],e=[];a.forEach(o=>{(o.sites||[]).forEach(t=>{var r;const n=b(t,o.id),l=v(t,n);e.push({id:t.id,title:t.title,description:t.description||"",status:t.status,homepageState:t.homepageState,order:t.order||0,url:t.url||null,categoryKey:n,categoryTitle:((r=u[n])==null?void 0:r.name)||o.title,icon:l})})}),i.allProjects=e}function E(){i.lastUpdated="2026-08-22",i.allProjects=[{id:"grade9-progress",title:"九年級進度",description:"國中三年級自然第一章直線運動互動教具總覽與各節實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"⚡"},{id:"naturelab-senior-review",title:"九年級複習",description:"理化 3-4 冊總複習互動題庫、概念挖空卷、Kahoot 挑戰與動態實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/review-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"🎯"},{id:"hall-of-fame-hub",title:"世界名人堂",description:"收錄 12 位先驅科學家、課堂數位互動教具、影音頻道與密室逃脫等 14 大核心資源。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hall-of-fame.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"🏛️"},{id:"classbuddy-classroom-toolbox",title:"班級互動工具箱",description:"提供班級抽籤、小組積分榜、倒數計時、趣味泡泡噪音監測與智慧名單同步。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/classroom-agent-kit/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎒"},{id:"naturelab",title:"教師派發任務",description:"開始進行課程管理，即時查看學生學習紀錄與成果。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#portal",categoryKey:"other",categoryTitle:"其他",icon:"🔬"},{id:"naturelab-book-selector",title:"舊版互動式網頁",description:"選擇冊別與章節，依照學校課本單元循序學習。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#book-selector",categoryKey:"other",categoryTitle:"其他",icon:"📖"},{id:"voice-cloner-agent",title:"Agent 代理複製你的聲音",description:"使用 VoxCPM2 在本機錄製參考聲音並生成語音的 AI Agent 工具包。",homepageState:"coming-soon",url:null,categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎙️"}]}function L(){const s=i.allProjects.length,a=i.allProjects.filter(l=>l.homepageState==="linked").length,e=document.getElementById("stat-total"),o=document.getElementById("stat-active"),t=document.getElementById("last-updated");e&&(e.textContent=`${s} 個專案`),o&&(o.textContent=`${a} 個可開啟`),t&&(t.textContent=i.lastUpdated);const n={all:s,nature:0,"fame-escape":0,tools:0,other:0};i.allProjects.forEach(l=>{n[l.categoryKey]!==void 0&&n[l.categoryKey]++}),Object.keys(n).forEach(l=>{const r=document.querySelector(`[data-count-for="${l}"]`);r&&(r.textContent=n[l])})}function h(){const s=document.getElementById("cards-container"),a=document.getElementById("empty-state"),e=document.getElementById("displayed-cards-count"),o=document.getElementById("current-category-heading"),t=document.getElementById("current-category-desc");if(!s)return;const n=i.allProjects.filter(r=>{const d=i.activeCategory==="all"||r.categoryKey===i.activeCategory,c=i.searchQuery.trim().toLowerCase(),g=!c||r.title.toLowerCase().includes(c)||r.description.toLowerCase().includes(c)||r.categoryTitle.toLowerCase().includes(c);return d&&g}),l=u[i.activeCategory]||u.all;if(o&&(o.innerHTML=`<span>${l.icon}</span><span>${i.searchQuery?`搜尋結果：「${i.searchQuery}」`:l.heading}</span>`),t&&(t.textContent=i.searchQuery?`共找到 ${n.length} 個相符的專案`:l.desc),e&&(e.textContent=n.length),s.innerHTML="",n.length===0){s.classList.add("hidden"),a&&a.classList.remove("hidden");return}s.classList.remove("hidden"),a&&a.classList.add("hidden"),n.forEach((r,d)=>{var m,p;const c=document.createElement("article"),g=r.homepageState==="linked"&&r.url,y=((m=u[r.categoryKey])==null?void 0:m.badgeClass)||"badge-theme-other";c.className="project-card bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in group",c.style.animationDelay=`${d*.04}s`,c.innerHTML=`
      <div class="space-y-3.5">
        <!-- 頂部標籤列：主題 Badge + 狀態 Badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${y}">
            <span>${((p=u[r.categoryKey])==null?void 0:p.icon)||"📂"}</span>
            <span>${r.categoryTitle}</span>
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${g?"status-badge-live":"status-badge-soon"}">
            ${g?'<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 已上線':"⏳ 準備中"}
          </span>
        </div>

        <!-- 專案標題與圖示 -->
        <div class="flex items-start gap-3 pt-1">
          <span class="text-2xl sm:text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
            ${r.icon}
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
              ${f(r.title)}
            </h3>
          </div>
        </div>

        <!-- 1~2 句功能說明 -->
        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          ${f(r.description)}
        </p>
      </div>

      <!-- 底部操作按鈕 -->
      <div class="pt-4 mt-3 border-t border-slate-100/80">
        ${g?`
          <a
            href="${f(r.url)}"
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
    `,s.appendChild(c)})}function w(){const s=document.querySelectorAll(".filter-btn"),a=document.getElementById("filter-active-count");s.forEach(n=>{n.addEventListener("click",l=>{var d;const r=n.getAttribute("data-filter")||"all";i.activeCategory=r,s.forEach(c=>c.classList.remove("active")),n.classList.add("active"),a&&(a.textContent=((d=u[r])==null?void 0:d.name)||r),h()})});const e=document.getElementById("search-input"),o=document.getElementById("clear-search-btn");e&&e.addEventListener("input",n=>{i.searchQuery=n.target.value,o&&o.classList.toggle("hidden",!i.searchQuery),h()}),o&&o.addEventListener("click",()=>{e&&(e.value="",i.searchQuery="",o.classList.add("hidden"),h(),e.focus())});const t=document.getElementById("reset-filter-btn");t&&t.addEventListener("click",()=>{i.activeCategory="all",i.searchQuery="",e&&(e.value=""),o&&o.classList.add("hidden"),s.forEach(n=>{n.classList.toggle("active",n.getAttribute("data-filter")==="all")}),a&&(a.textContent="全部"),h()})}function f(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}

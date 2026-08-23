(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const i={allProjects:[],activeCategory:"all",searchQuery:"",lastUpdated:"--"},f={all:{name:"全部專案",icon:"🌟",heading:"全部專案展示",desc:"點選左側分類標籤或搜尋關鍵字即時篩選。"},nature:{name:"國中自然與實驗",icon:"🧪",badgeClass:"badge-theme-nature",heading:"國中自然與動態實驗室",desc:"收錄國中理化與地球科學動態互動教具、總複習題庫與章節實驗室。"},"fame-escape":{name:"世界名人堂",icon:"🏛️",badgeClass:"badge-theme-fame",heading:"世界名人堂專區",desc:"收錄 12 位跨世代先驅科學家生平傳奇、課堂數位互動教具與密室逃脫解謎。"},tools:{name:"實用工具箱",icon:"🛠️",badgeClass:"badge-theme-tools",heading:"班級互動與數位工具箱",desc:"抽籤、計時、課堂積分、噪音監測與本機 AI Agent 實用工具。"},other:{name:"其他",icon:"💡",badgeClass:"badge-theme-other",heading:"其他專案展示",desc:"跨領域個人創作、教師專區與其他專案。"}};function C(s,o){const e=(s.id||"").toLowerCase(),n=(s.title||"").toLowerCase();return e==="naturelab"||e.includes("book-selector")||n.includes("教師派發")||n.includes("派課")||n.includes("舊版")?"other":e.includes("hall-of-fame")||e.includes("nobel")||e.includes("escape")||e.includes("einstein")||n.includes("名人堂")||n.includes("密室逃脫")?"fame-escape":e.includes("classbuddy")||e.includes("voice-cloner")||e.includes("agent")||n.includes("工具箱")||n.includes("班級")||o==="computer"?"tools":e.includes("grade")||e.includes("nature")||e.includes("review")||o==="teaching"?"nature":(o==="investing"||e.includes("stock")||o==="other","other")}function L(s,o){const e=(s.id||"").toLowerCase();return e.includes("grade9-progress")?"⚡":e.includes("review")?"🎯":e.includes("hall-of-fame")?"🏛️":e.includes("nobel")?"🏅":e.includes("escape")||e.includes("einstein")?"🗝️":e.includes("classbuddy")?"🎒":e.includes("voice")?"🎙️":e.includes("stock")?"📈":e.includes("portal")||e.includes("naturelab")?"🔬":e.includes("selector")?"📖":{nature:"🧪","fame-escape":"🏛️",tools:"🛠️",other:"💡"}[o]||"🚀"}async function w(){S(),x(),E(),m();const s="./catalog.json";try{const o=await fetch(s);if(o.ok){const e=await o.json();A(e)}}catch{console.info("使用內建專案索引資料。")}}function S(){i.lastUpdated="2026-08-22",i.allProjects=[{id:"grade9-progress",title:"九年級進度",description:"國中三年級自然第一章直線運動互動教具總覽與各節實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"⚡"},{id:"naturelab-senior-review",title:"九年級複習",description:"理化 3-4 冊總複習互動題庫、概念挖空卷、Kahoot 挑戰與動態實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/review-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"🎯"},{id:"hall-of-fame-hub",title:"世界名人堂",description:"世界名人堂專區：收錄 12 位先驅科學家、課堂數位互動教具、影音頻道與密室逃脫共 14 大核心資源。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hall-of-fame.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🏛️"},{id:"classbuddy-classroom-toolbox",title:"班級互動工具箱",description:"提供班級抽籤、小組積分榜、倒數計時、趣味泡泡噪音監測與智慧名單同步。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/classroom-agent-kit/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎒"},{id:"naturelab",title:"教師派發任務",description:"開始進行課程管理，即時查看學生學習紀錄與成果。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#portal",categoryKey:"other",categoryTitle:"其他",icon:"🔬"},{id:"naturelab-book-selector",title:"舊版互動式網頁",description:"選擇冊別與章節，依照學校課本單元循序學習。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#book-selector",categoryKey:"other",categoryTitle:"其他",icon:"📖"},{id:"voice-cloner-agent",title:"Agent 代理複製你的聲音",description:"使用 VoxCPM2 在本機錄製參考聲音並生成語音的 AI Agent 工具包。",homepageState:"coming-soon",url:null,categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎙️"}]}function x(){const s=i.allProjects.length,o=i.allProjects.filter(l=>l.homepageState==="linked").length,e=document.getElementById("stat-total"),n=document.getElementById("stat-active"),t=document.getElementById("last-updated");e&&(e.textContent=`${s} 個專案`),n&&(n.textContent=`${o} 個可開啟`),t&&(t.textContent=i.lastUpdated);const a={all:s,nature:0,"fame-escape":0,tools:0,other:0};i.allProjects.forEach(l=>{a[l.categoryKey]!==void 0&&a[l.categoryKey]++}),Object.keys(a).forEach(l=>{const r=document.querySelector(`[data-count-for="${l}"]`);r&&(r.textContent=a[l])})}function m(){const s=document.getElementById("cards-container"),o=document.getElementById("empty-state"),e=document.getElementById("displayed-cards-count"),n=document.getElementById("current-category-heading"),t=document.getElementById("current-category-desc");if(!s)return;const a=i.allProjects.filter(r=>{const u=i.activeCategory==="all"||r.categoryKey===i.activeCategory,c=i.searchQuery.trim().toLowerCase(),d=!c||r.title.toLowerCase().includes(c)||r.description.toLowerCase().includes(c)||r.categoryTitle.toLowerCase().includes(c);return u&&d}),l=f[i.activeCategory]||f.all;if(n&&(n.innerHTML=`<span>${l.icon}</span><span>${i.searchQuery?`搜尋結果：「${i.searchQuery}」`:l.heading}</span>`),t&&(t.textContent=i.searchQuery?`共找到 ${a.length} 個相符的專案`:l.desc),e&&(e.textContent=a.length),s.innerHTML="",a.length===0){s.classList.add("hidden"),o&&o.classList.remove("hidden");return}s.classList.remove("hidden"),o&&o.classList.add("hidden"),a.forEach((r,u)=>{var h,g;const c=document.createElement("article"),d=r.homepageState==="linked"&&r.url,y=((h=f[r.categoryKey])==null?void 0:h.badgeClass)||"badge-theme-other";c.id=`card-${r.id}`,c.className="project-card bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in group",c.style.animationDelay=`${u*.04}s`,c.innerHTML=`
      <div class="space-y-3.5">
        <!-- 頂部標籤列：主題 Badge + 狀態 Badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${y}">
            <span>${((g=f[r.categoryKey])==null?void 0:g.icon)||"📂"}</span>
            <span>${r.categoryTitle}</span>
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${d?"status-badge-live":"status-badge-soon"}">
            ${d?'<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 已上線':"⏳ 準備中"}
          </span>
        </div>

        <!-- 專案標題與圖示 -->
        <div class="flex items-start gap-3 pt-1">
          <span class="text-2xl sm:text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
            ${r.icon}
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
              ${p(r.title)}
            </h3>
          </div>
        </div>

        <!-- 1~2 句功能說明 -->
        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
          ${p(r.description)}
        </p>
      </div>

      <!-- 底部操作按鈕 -->
      <div class="pt-4 mt-3 border-t border-slate-100/80">
        ${d?`
          <a
            href="${p(r.url)}"
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
    `,s.appendChild(c)})}function E(){["nature","fame-escape","tools","other"].forEach(o=>{const e=document.querySelector(`[data-subnav-for="${o}"]`);if(!e)return;const n=i.allProjects.filter(t=>t.categoryKey===o);if(n.length===0){e.innerHTML='<div class="text-[11px] text-slate-400 px-3 py-1">暫無專案</div>';return}e.innerHTML=n.map(t=>`
      <button
        type="button"
        data-project-target="${t.id}"
        class="subnav-item w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
        title="點擊聚焦查看「${p(t.title)}」"
      >
        <span class="flex items-center gap-1.5 truncate">
          <span class="text-sm flex-shrink-0">${t.icon}</span>
          <span class="truncate font-medium">${p(t.title)}</span>
        </span>
        <span class="text-[10px] text-slate-400 font-mono">→</span>
      </button>
    `).join("")}),document.querySelectorAll(".subnav-item").forEach(o=>{o.addEventListener("click",e=>{e.stopPropagation();const n=o.getAttribute("data-project-target");k(n)})})}function k(s){var n;const o=i.allProjects.find(t=>t.id===s);if(!o)return;i.activeCategory=o.categoryKey,b(o.categoryKey);const e=document.getElementById("filter-active-count");e&&(e.textContent=((n=f[o.categoryKey])==null?void 0:n.name)||o.categoryKey),document.querySelectorAll(".subnav-item").forEach(t=>{const a=t.getAttribute("data-project-target")===s;t.classList.toggle("active-subitem",a)}),m(),setTimeout(()=>{const t=document.getElementById(`card-${s}`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),t.classList.remove("card-highlight-glow"),t.offsetWidth,t.classList.add("card-highlight-glow"))},50)}function b(s){const o=document.querySelectorAll(".category-subnav");document.querySelectorAll(".filter-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-filter")===s)}),o.forEach(n=>{const t=n.getAttribute("data-subnav-for"),a=n.closest(".category-group"),l=a?a.querySelector(".chevron-arrow"):null;t===s?(n.classList.add("is-open"),l&&l.classList.add("is-rotated")):(n.classList.remove("is-open"),l&&l.classList.remove("is-rotated"))})}function $(){const s=document.querySelectorAll(".filter-btn"),o=document.getElementById("filter-active-count");s.forEach(a=>{a.addEventListener("click",l=>{var h;const r=a.getAttribute("data-filter")||"all",u=i.activeCategory===r,c=a.closest(".category-group"),d=c?c.querySelector(".category-subnav"):null,y=c?c.querySelector(".chevron-arrow"):null;if(u&&d&&r!=="all"){const g=d.classList.contains("is-open");d.classList.toggle("is-open",!g),y&&y.classList.toggle("is-rotated",!g);return}i.activeCategory=r,o&&(o.textContent=((h=f[r])==null?void 0:h.name)||r),document.querySelectorAll(".subnav-item").forEach(g=>g.classList.remove("active-subitem")),b(r),m()})});const e=document.getElementById("search-input"),n=document.getElementById("clear-search-btn");e&&e.addEventListener("input",a=>{i.searchQuery=a.target.value,n&&n.classList.toggle("hidden",!i.searchQuery),m()}),n&&n.addEventListener("click",()=>{e&&(e.value="",i.searchQuery="",n.classList.add("hidden"),m(),e.focus())});const t=document.getElementById("reset-filter-btn");t&&t.addEventListener("click",()=>{i.activeCategory="all",i.searchQuery="",e&&(e.value=""),n&&n.classList.add("hidden"),o&&(o.textContent="全部"),document.querySelectorAll(".subnav-item").forEach(a=>a.classList.remove("active-subitem")),b("all"),m()})}function A(s){i.allProjects=[],i.lastUpdated=s.lastUpdated||s.generatedAt||new Date().toISOString().split("T")[0],(s.categories||[]).forEach(o=>{(o.sites||[]).forEach(e=>{var r,u;const n=C(e,o.id),t=((r=f[n])==null?void 0:r.name)||o.title||"其他",a=L(e,n);let l=null;e.homepageState==="linked"&&(l=e.url||e.deployments&&((u=e.deployments[0])==null?void 0:u.url)||null),i.allProjects.push({id:e.id,title:e.title,description:e.description||"",status:e.status||"active",homepageState:e.homepageState||"linked",url:l,categoryKey:n,categoryTitle:t,icon:a})})}),x(),E(),m()}function p(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function v(){$(),w()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{v()});const i={allProjects:[],activeCategory:"all",searchQuery:"",lastUpdated:"--"},f={all:{name:"全部專案",icon:"🌟",heading:"全部專案展示",desc:"點選左側分類標籤或搜尋關鍵字即時篩選。"},nature:{name:"國中自然與實驗",icon:"🧪",badgeClass:"badge-theme-nature",heading:"國中自然與動態實驗室",desc:"收錄國中理化與地球科學動態互動教具、總複習題庫與章節實驗室。"},"fame-escape":{name:"世界名人堂",icon:"🏛️",badgeClass:"badge-theme-fame",heading:"世界名人堂專區",desc:"收錄 12 位跨世代先驅科學家生平傳奇、課堂數位互動教具與密室逃脫解謎。"},tools:{name:"實用工具箱",icon:"🛠️",badgeClass:"badge-theme-tools",heading:"班級互動與數位工具箱",desc:"抽籤、計時、課堂積分、噪音監測與本機 AI Agent 實用工具。"},other:{name:"其他",icon:"💡",badgeClass:"badge-theme-other",heading:"其他專案展示",desc:"跨領域個人創作、教師專區與其他專案。"}};function C(s,t){const e=(s.id||"").toLowerCase(),o=(s.title||"").toLowerCase();return e==="naturelab"||e.includes("book-selector")||o.includes("教師派發")||o.includes("派課")||o.includes("舊版")?"other":e.includes("hall-of-fame")||e.includes("nobel")||e.includes("escape")||e.includes("einstein")||o.includes("名人堂")||o.includes("密室逃脫")?"fame-escape":e.includes("classbuddy")||e.includes("voice-cloner")||e.includes("agent")||o.includes("工具箱")||o.includes("班級")?"tools":e.includes("grade")||e.includes("nature")||e.includes("review")||t==="teaching"?"nature":(t==="investing"||e.includes("stock")||t==="other"||t==="computer","other")}function L(s,t){const e=(s.id||"").toLowerCase();return e.includes("grade9-progress")?"⚡":e.includes("review")?"🎯":e.includes("hall-of-fame")?"🏛️":e.includes("nobel")?"🏅":e.includes("escape")||e.includes("einstein")?"🗝️":e.includes("classbuddy")?"🎒":e.includes("voice")?"🎙️":e.includes("stock")?"📈":e.includes("portal")||e.includes("naturelab")?"🔬":e.includes("selector")?"📖":{nature:"🧪","fame-escape":"🏛️",tools:"🛠️",other:"💡"}[t]||"🚀"}async function v(){const s="./catalog.json";try{const t=await fetch(s);if(!t.ok)throw new Error(`HTTP error ${t.status}`);const e=await t.json();$(e)}catch(t){console.warn("載入 catalog.json 失敗，使用內建備用資料：",t),w(),x(),E(),m()}}function w(){i.lastUpdated="2026-08-22",i.allProjects=[{id:"grade9-progress",title:"九年級進度",description:"國中三年級自然第一章直線運動互動教具總覽與各節實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/chapter1-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"⚡"},{id:"naturelab-senior-review",title:"九年級複習",description:"理化 3-4 冊總複習互動題庫、概念挖空卷、Kahoot 挑戰與動態實驗室。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/review-hub.html",categoryKey:"nature",categoryTitle:"國中自然與實驗",icon:"🎯"},{id:"hall-of-fame-hub",title:"世界名人堂",description:"世界名人堂專區：收錄 12 位先驅科學家、課堂數位互動教具、影音頻道與密室逃脫共 14 大核心資源。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/hall-of-fame.html",categoryKey:"fame-escape",categoryTitle:"世界名人堂",icon:"🏛️"},{id:"classbuddy-classroom-toolbox",title:"班級互動工具箱",description:"提供班級抽籤、小組積分榜、倒數計時、趣味泡泡噪音監測與智慧名單同步。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/classroom-agent-kit/",categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎒"},{id:"naturelab",title:"教師派發任務",description:"開始進行課程管理，即時查看學生學習紀錄與成果。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#portal",categoryKey:"other",categoryTitle:"其他",icon:"🔬"},{id:"naturelab-book-selector",title:"舊版互動式網頁",description:"選擇冊別與章節，依照學校課本單元循序學習。",homepageState:"linked",url:"https://hungjuiying0606-dotcom.github.io/personal-main-hub/naturelab/#book-selector",categoryKey:"other",categoryTitle:"其他",icon:"📖"},{id:"voice-cloner-agent",title:"Agent 代理複製你的聲音",description:"使用 VoxCPM2 在本機錄製參考聲音並生成語音的 AI Agent 工具包。",homepageState:"coming-soon",url:null,categoryKey:"tools",categoryTitle:"實用工具箱",icon:"🎙️"}]}function x(){const s=i.allProjects.length,t=i.allProjects.filter(l=>l.homepageState==="linked").length,e=document.getElementById("stat-total"),o=document.getElementById("stat-active"),n=document.getElementById("last-updated");e&&(e.textContent=`${s} 個專案`),o&&(o.textContent=`${t} 個可開啟`),n&&(n.textContent=i.lastUpdated);const a={all:s,nature:0,"fame-escape":0,tools:0,other:0};i.allProjects.forEach(l=>{a[l.categoryKey]!==void 0&&a[l.categoryKey]++}),Object.keys(a).forEach(l=>{const r=document.querySelector(`[data-count-for="${l}"]`);r&&(r.textContent=a[l])})}function m(){const s=document.getElementById("cards-container"),t=document.getElementById("empty-state"),e=document.getElementById("displayed-cards-count"),o=document.getElementById("current-category-heading"),n=document.getElementById("current-category-desc");if(!s)return;const a=i.allProjects.filter(r=>{const d=i.activeCategory==="all"||r.categoryKey===i.activeCategory,c=i.searchQuery.trim().toLowerCase(),u=!c||r.title.toLowerCase().includes(c)||r.description.toLowerCase().includes(c)||r.categoryTitle.toLowerCase().includes(c);return d&&u}),l=f[i.activeCategory]||f.all;if(o&&(o.innerHTML=`<span>${l.icon}</span><span>${i.searchQuery?`搜尋結果：「${i.searchQuery}」`:l.heading}</span>`),n&&(n.textContent=i.searchQuery?`共找到 ${a.length} 個相符的專案`:l.desc),e&&(e.textContent=a.length),s.innerHTML="",a.length===0){s.classList.add("hidden"),t&&t.classList.remove("hidden");return}s.classList.remove("hidden"),t&&t.classList.add("hidden"),a.forEach((r,d)=>{var h,g;const c=document.createElement("article"),u=r.homepageState==="linked"&&r.url,y=((h=f[r.categoryKey])==null?void 0:h.badgeClass)||"badge-theme-other";c.id=`card-${r.id}`,c.className="project-card bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 flex flex-col justify-between shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in group",c.style.animationDelay=`${d*.04}s`,c.innerHTML=`
      <div class="space-y-3.5">
        <!-- 頂部標籤列：主題 Badge + 狀態 Badge -->
        <div class="flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${y}">
            <span>${((g=f[r.categoryKey])==null?void 0:g.icon)||"📂"}</span>
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
        ${u?`
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
    `,s.appendChild(c)})}function E(){["nature","fame-escape","tools","other"].forEach(t=>{const e=document.querySelector(`[data-subnav-for="${t}"]`);if(!e)return;const o=i.allProjects.filter(n=>n.categoryKey===t);if(o.length===0){e.innerHTML='<div class="text-[11px] text-slate-400 px-3 py-1">暫無專案</div>';return}e.innerHTML=o.map(n=>`
      <button
        type="button"
        data-project-target="${n.id}"
        class="subnav-item w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-all text-left"
        title="點擊聚焦查看「${p(n.title)}」"
      >
        <span class="flex items-center gap-1.5 truncate">
          <span class="text-sm flex-shrink-0">${n.icon}</span>
          <span class="truncate font-medium">${p(n.title)}</span>
        </span>
        <span class="text-[10px] text-slate-400 font-mono">→</span>
      </button>
    `).join("")}),document.querySelectorAll(".subnav-item").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation();const o=t.getAttribute("data-project-target");S(o)})})}function S(s){var o;const t=i.allProjects.find(n=>n.id===s);if(!t)return;i.activeCategory=t.categoryKey,b(t.categoryKey);const e=document.getElementById("filter-active-count");e&&(e.textContent=((o=f[t.categoryKey])==null?void 0:o.name)||t.categoryKey),document.querySelectorAll(".subnav-item").forEach(n=>{const a=n.getAttribute("data-project-target")===s;n.classList.toggle("active-subitem",a)}),m(),setTimeout(()=>{const n=document.getElementById(`card-${s}`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),n.classList.remove("card-highlight-glow"),n.offsetWidth,n.classList.add("card-highlight-glow"))},50)}function b(s){const t=document.querySelectorAll(".category-subnav");document.querySelectorAll(".filter-btn").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-filter")===s)}),t.forEach(o=>{const n=o.getAttribute("data-subnav-for"),a=o.closest(".category-group"),l=a?a.querySelector(".chevron-arrow"):null;n===s?(o.classList.add("is-open"),l&&l.classList.add("is-rotated")):(o.classList.remove("is-open"),l&&l.classList.remove("is-rotated"))})}function k(){const s=document.querySelectorAll(".filter-btn"),t=document.getElementById("filter-active-count");s.forEach(a=>{a.addEventListener("click",l=>{var h;const r=a.getAttribute("data-filter")||"all",d=i.activeCategory===r,c=a.closest(".category-group"),u=c?c.querySelector(".category-subnav"):null,y=c?c.querySelector(".chevron-arrow"):null;if(d&&u&&r!=="all"){const g=u.classList.contains("is-open");u.classList.toggle("is-open",!g),y&&y.classList.toggle("is-rotated",!g);return}i.activeCategory=r,t&&(t.textContent=((h=f[r])==null?void 0:h.name)||r),document.querySelectorAll(".subnav-item").forEach(g=>g.classList.remove("active-subitem")),b(r),m()})});const e=document.getElementById("search-input"),o=document.getElementById("clear-search-btn");e&&e.addEventListener("input",a=>{i.searchQuery=a.target.value,o&&o.classList.toggle("hidden",!i.searchQuery),m()}),o&&o.addEventListener("click",()=>{e&&(e.value="",i.searchQuery="",o.classList.add("hidden"),m(),e.focus())});const n=document.getElementById("reset-filter-btn");n&&n.addEventListener("click",()=>{i.activeCategory="all",i.searchQuery="",e&&(e.value=""),o&&o.classList.add("hidden"),t&&(t.textContent="全部"),document.querySelectorAll(".subnav-item").forEach(a=>a.classList.remove("active-subitem")),b("all"),m()})}function $(s){i.allProjects=[],i.lastUpdated=s.generatedAt||new Date().toISOString().split("T")[0],(s.categories||[]).forEach(t=>{(t.sites||[]).forEach(e=>{var r;if(!e.showOnHomepage)return;const o=C(e,t.id),n=((r=f[o])==null?void 0:r.name)||t.title||"其他",a=L(e,o);let l=null;if(e.homepageState==="linked"){const d=(e.deployments||[]).find(c=>c.isPrimary)||(e.deployments||[])[0];l=(d==null?void 0:d.url)||e.url||null}i.allProjects.push({id:e.id,title:e.title,description:e.description,homepageState:e.homepageState,url:l,categoryKey:o,categoryTitle:n,icon:a})})}),x(),E(),m()}function p(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}document.addEventListener("DOMContentLoaded",()=>{k(),v()});

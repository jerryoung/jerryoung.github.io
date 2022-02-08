document.addEventListener("DOMContentLoaded",function(){let o,i,c,f,t=!1;function L(){var e=GLOBAL_CONFIG.highlight;if(e){var t=e.highlightCopy,n=e.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink;const l=e.highlightHeightLimit,d=t||n||void 0!==o,c="highlighjs"===e.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if((d||l)&&c.length){const r="prismjs"===e.plugin;let s="",a="";const u=!0===o?"closed":"",m=(void 0!==o&&(s=`<i class="fas fa-angle-down expand ${u}"></i>`),t&&(a='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),e=>{const t=e.parentNode,n=(t.classList.add("copy-true"),window.getSelection()),o=document.createRange();r?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);n.toString();e=e.lastChild;if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const i=e.previousElementSibling;i.innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(()=>{i.style.opacity=0},700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport;n.removeAllRanges(),t.classList.remove("copy-true")}),h=e=>{const t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach(e=>{e.style.display="block"}):t.forEach(e=>{e.style.display="none"})},f=function(e){const t=e.target.classList;t.contains("expand")?h(this):t.contains("copy-button")&&m(this)},g=function(){this.classList.toggle("expand-done")};function i(e,t,n){const o=document.createDocumentFragment();if(d){const i=document.createElement("div");i.className="highlight-tools "+u,i.innerHTML=s+e+a,i.addEventListener("click",f),o.appendChild(i)}if(l&&t.offsetHeight>l+30){const c=document.createElement("div");c.className="code-expand-btn",c.innerHTML='<i class="fas fa-angle-double-down"></i>',c.addEventListener("click",g),o.appendChild(c)}"hl"===n?t.insertBefore(o,t.firstChild):t.parentNode.insertBefore(o,t)}n?r?c.forEach(function(e){var t=`<div class="code-lang">${e.getAttribute("data-language")?e.getAttribute("data-language"):"Code"}</div>`;btf.wrap(e,"figure",{class:"highlight"}),i(t,e)}):c.forEach(function(e){let t=e.getAttribute("class").split(" ")[1];i(`<div class="code-lang">${t="plain"!==t&&void 0!==t?t:"Code"}</div>`,e,"hl")}):r?c.forEach(function(e){btf.wrap(e,"figure",{class:"highlight"}),i("",e)}):c.forEach(function(e){i("",e,"hl")})}}}const g=e=>{if(e){o=document.getElementById("site-name").offsetWidth;const n=document.querySelectorAll("#menus .menus_item");i=0,n.length&&n.forEach(e=>{i+=e.offsetWidth});e=document.querySelector("#search-button");c=e?e.offsetWidth:0,f=document.getElementById("nav")}let t="";(t=window.innerWidth<768||o+i+c>f.offsetWidth-120)?f.classList.add("hide-menu"):f.classList.remove("hide-menu")},p={open:()=>{btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),t=!0},close:()=>{const e=document.body;e.style.overflow="",e.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),t=!1}};function b(){const i=document.getElementById("rightside"),c=window.innerHeight+56;if(document.body.scrollHeight<=c)return i.style.cssText="opacity: 1; transform: translateX(-58px)",0;let s=0,a=!0;const l=document.getElementById("page-header"),d="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow;window.scrollCollect=()=>btf.throttle(function(e){var t,n,o=window.scrollY||document.documentElement.scrollTop;n=(t=o)>s,s=t,56<o?(n?(l.classList.contains("nav-visible")&&l.classList.remove("nav-visible"),r&&!0===a&&(chatBtnHide(),a=!1)):(l.classList.contains("nav-visible")||l.classList.add("nav-visible"),d&&!1===a&&(chatBtnShow(),a=!0)),l.classList.add("nav-fixed"),"0"===window.getComputedStyle(i).getPropertyValue("opacity")&&(i.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===o&&l.classList.remove("nav-fixed","nav-visible"),i.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=c&&(i.style.cssText="opacity: 0.8; transform: translateX(-58px)")},200)(),window.addEventListener("scroll",scrollCollect)}function v(){const d=GLOBAL_CONFIG_SITE.isToc,r=GLOBAL_CONFIG.isAnchor,i=document.getElementById("article-container");if(i&&(d||r)){let e,c,t,s,a;if(d){const o=document.getElementById("card-toc"),m=(c=o.getElementsByClassName("toc-content")[0],e=c.querySelectorAll(".toc-link"),o.querySelector(".toc-percentage"));a=c.classList.contains("is-expand"),t=e=>{var t=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,t=n<t?t-n:document.documentElement.scrollHeight-n,n=Math.round(100*((e-o)/t)),e=100<n?100:n<=0?0:n;m.textContent=e},window.mobileToc={open:()=>{o.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:()=>{o.style.animation="toc-close .2s",setTimeout(()=>{o.style.cssText="opacity:''; animation: ''; right: ''"},100)}},c.addEventListener("click",e=>{e.preventDefault();const t=e.target.classList.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close()}),s=e=>{var e=e.getBoundingClientRect().top,t=c.scrollTop;e>document.documentElement.clientHeight-100&&(c.scrollTop=t+150),e<100&&(c.scrollTop=t-150)}}const u=i.querySelectorAll("h1,h2,h3,h4,h5,h6");let l="";const n=function(n){if(0===n)return!1;let o="",i="";if(u.forEach(function(e,t){n>btf.getEleTop(e)-80&&(e=e.id,o=e?"#"+encodeURI(e):"",i=t)}),l!==i&&(r&&btf.updateAnchor(o),l=i,d&&(c.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),""!==o))){const t=e[i];if(t.classList.add("active"),setTimeout(()=>{s(t)},0),!a){let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}};window.tocScrollFn=function(){return btf.throttle(function(){var e=window.scrollY||document.documentElement.scrollTop;d&&t(e),n(e)},100)()},window.addEventListener("scroll",tocScrollFn)}}function y(e){e.forEach(e=>{const t=e;e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})}const n={switchReadMode:()=>{const t=document.body,n=(t.classList.add("read-mode"),document.createElement("button"));n.type="button",n.className="fas fa-sign-out-alt exit-readmode",t.appendChild(n),n.addEventListener("click",function e(){t.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",e)})},switchDarkMode:()=>{"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(()=>window.disqusReset(),200),"function"==typeof runMermaid&&window.runMermaid()},showOrHideBtn:e=>{const t=document.getElementById("rightside-config-hide").classList;t.toggle("show"),e.classList.contains("show")&&(t.add("status"),setTimeout(()=>{t.remove("status")},300)),e.classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")},runMobileToc:()=>{"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close()}},E=(document.getElementById("rightside").addEventListener("click",function(e){var t=e.target.id?e.target:e.target.parentNode;switch(t.id){case"go-up":n.scrollToTop();break;case"rightside_config":n.showOrHideBtn(t);break;case"mobile-toc-button":n.runMobileToc();break;case"readmode":n.switchReadMode();break;case"darkmode":n.switchDarkMode();break;case"hide-aside-btn":n.hideAsideBtn()}}),{clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){const t=this.parentNode;if(!t.classList.contains("active")){const o=t.parentNode.nextElementSibling,i=btf.siblings(t,".active")[0],c=(i&&i.classList.remove("active"),t.classList.add("active"),this.getAttribute("data-href").replace("#","")),s=[...o.children];s.forEach(e=>{e.id===c?e.classList.add("active"):e.classList.remove("active")});var n=o.querySelectorAll(`#${c} .fj-gallery`);0<n.length&&btf.initJustifiedGallery(n)}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})}});if(window.refreshFn=function(){if(g(!0),f.classList.add("show"),GLOBAL_CONFIG_SITE.isPost){if(void 0!==GLOBAL_CONFIG.noticeOutdate){var e=GLOBAL_CONFIG.noticeOutdate,t=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const o=document.createElement("div"),i=(o.className="post-outdate-notice",o.textContent=e.messagePrev+" "+t+" "+e.messageNext,document.getElementById("article-container"));"top"===e.position?i.insertBefore(o,i.firstChild):i.appendChild(o)}}GLOBAL_CONFIG.relativeDate.post&&y(document.querySelectorAll("#post-meta time"))}else{if(GLOBAL_CONFIG.relativeDate.homepage&&y(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime){const c=document.getElementById("runtimeshow");c&&(t=c.getAttribute("data-publishDate"),c.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime)}{const s=document.getElementById("last-push-date");s&&(e=s.getAttribute("data-lastPushDate"),s.innerText=btf.diffDate(e,!0))}{const a=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");a.length&&a.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();this.classList.toggle("expand");const t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})})}}if(v(),GLOBAL_CONFIG_SITE.isHome){const l=document.getElementById("scroll-down");l&&l.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)})}L(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(e){const t=e.parentNode;var n=e.title||e.alt;if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center",o.textContent=n,t.insertBefore(o,e.nextSibling)}}),b();var r=document.querySelectorAll("#article-container .fj-gallery");if(r.length){var n=r;if(n.forEach(e=>{const t=e.querySelectorAll("img");t.forEach(e=>{var t=e.getAttribute("data-lazy-src");t&&(e.src=t),btf.wrap(e,"div",{class:"fj-gallery-item"})})}),window.fjGallery)setTimeout(()=>{btf.initJustifiedGallery(n)},100);else{const d=document.createElement("link");d.rel="stylesheet",d.href=GLOBAL_CONFIG.source.justifiedGallery.css,document.body.appendChild(d),getScript(""+GLOBAL_CONFIG.source.justifiedGallery.js).then(()=>{btf.initJustifiedGallery(n)})}}btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)"));{const u=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");u.length&&u.forEach(e=>{btf.wrap(e,"div",{class:"table-wrap"})})}{const m=document.querySelectorAll("#article-container .hide-button");m.length&&m.forEach(function(e){e.addEventListener("click",function(e){const t=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<t.querySelectorAll(".fj-gallery").length&&btf.initJustifiedGallery(t.querySelectorAll(".fj-gallery"))})})}E.clickFnOfTabs(),E.backToTop();{let e=!1;const h=document.querySelector("#comment-switch > .switch-btn");h&&h.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"}),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())})}document.getElementById("toggle-menu").addEventListener("click",()=>{p.open()})},refreshFn(),window.addEventListener("resize",()=>{g(!1),btf.isHidden(document.getElementById("toggle-menu"))&&t&&p.close()}),document.getElementById("menu-mask").addEventListener("click",e=>{p.close()}),document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright){const s=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{e.preventDefault();let t;var n=window.getSelection(0).toString();return t=n.length>s.limitCount?n+"\n\n\n"+s.languages.author+"\n"+s.languages.link+window.location.href+"\n"+s.languages.source+"\n"+s.languages.info:n,(e.clipboardData?e:window).clipboardData.setData("text",t)}}});
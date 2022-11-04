(function(){"use strict";var e={9457:function(e,t,n){var r=n(9963),o=n(6252);function i(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var a=n(3744);const u={},c=(0,a.Z)(u,[["render",i]]);var s=c,l=n(5205);(0,l.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(2201);const d=[{path:"/",name:"homepage",component:()=>n.e(835).then(n.bind(n,5835)),meta:{title:"Добро пожаловать"}},{path:"/MainPage",name:"MainPage",component:()=>Promise.all([n.e(313),n.e(337)]).then(n.bind(n,8920)),meta:{title:"Главная страница"}},{path:"/productPage/:id",name:"ProductPage",props:!0,component:()=>n.e(609).then(n.bind(n,3609)),meta:{title:"Страница рецепта"}},{path:"/Favourites",name:"Favourites",component:()=>n.e(79).then(n.bind(n,6323)),meta:{title:"Избранное"}},{path:"/RandomProducts",name:"RandomProducts",component:()=>Promise.all([n.e(313),n.e(140)]).then(n.bind(n,3256)),meta:{title:"Случайное блюдо"}},{path:"/Recipes",name:"Recipes",component:()=>n.e(287).then(n.bind(n,3877)),meta:{title:"Рецепты"}}],p=(0,f.p7)({history:(0,f.PO)("/"),routes:d});var m=p;const h="Не задан заголовок";p.beforeEach((e=>{document.title=e.meta.title||h}));n(7658);var v=n(3907),g=n(9669),b=n.n(g),T=n(3168);const O=new T.ZP({storage:window.localStorage});var y=(0,v.MT)({state:{products:[],favourites:[]},getters:{PRODUCTS(e){return e.products},PRODUCT_BY_ID(e){return t=>e.products.find((e=>e.id===t))},FAVOURITES(e){return e.favourites}},mutations:{SET_PRODUCTS_TO_STATE:(e,t)=>{e.products=t},SET_TO_FAVOURITES:(e,t)=>{if(e.favourites.length){let n=!1;e.favourites.map((function(e){e.id===t.id&&(alert("Этот товар был вами уже добавлен"),n=!0)})),n||e.favourites.push(t)}else e.favourites.push(t)},DELTE_PRODUCTS(e,{data:t,getters:n}){n.FAVOURITES.splice(t,1)}},actions:{async GET_PRODCUTS_FROM_DB({commit:e}){try{const t=await b()("http://localhost:3000/products",{method:"GET"});return e("SET_PRODUCTS_TO_STATE",t.data),t.data}catch(t){return console.log("Ошибка при получении продуктов"+t),t}},ADD_TO_FAVOURITES({commit:e},t){e("SET_TO_FAVOURITES",t)},DELTE_PRODUCTS_FROM_FAVOURITES({commit:e,getters:t},n){e("DELTE_PRODUCTS",{data:n,getters:t})}},modules:{},plugins:[O.plugin]});(0,r.ri)(s).use(y).use(m).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{79:"8dda7799",140:"97c6f6c5",287:"2dea0eaf",313:"63bca365",337:"0763a810",609:"5e4300cd",835:"5157e2df"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{79:"d126597d",140:"986ee8d5",287:"aaba1da2",337:"4437b9f2",609:"be3165c5",835:"bb78e2aa"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="selldish:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={79:1,140:1,287:1,337:1,609:1,835:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkselldish"]=self["webpackChunkselldish"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9457)}));r=n.O(r)})();
//# sourceMappingURL=app.678df39c.js.map
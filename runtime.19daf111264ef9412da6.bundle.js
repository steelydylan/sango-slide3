(()=>{"use strict";var e,t,r,n,o,a,i,d={},l={};function c(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return d[e].call(r.exports,r,r.exports,c),r.exports}c.m=d,e=[],c.O=(t,r,n,o)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],i=!0,d=0;d<r.length;d++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](r[d])))?r.splice(d--,1):(i=!1,o<a&&(a=o));if(i){e.splice(f--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},c.F={},c.E=e=>{Object.keys(c.F).map((t=>{c.F[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(o,a),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+"."+{209:"9acf1bbbd7a45d3bdd41",352:"2b97c0c160cbb3389c12",465:"0fcb8406dbb45f4cecd4",512:"7f4a0a64f19a04fd4e57",568:"3d84ed06579b2e52759b",582:"78de7f2bf5950cc4af9b",626:"dc3eb010e2463e0a26a8",846:"8c31e09f7f3e6bab735e",869:"bee44d9f685e7b6c2ec8",921:"104e1e8652d4c21c4298"}[e]+".bundle.js",c.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"73ddb0233b07f388a02f",209:"9acf1bbbd7a45d3bdd41",352:"2b97c0c160cbb3389c12",512:"7f4a0a64f19a04fd4e57",626:"dc3eb010e2463e0a26a8",736:"5c5485314a174e800305",846:"8c31e09f7f3e6bab735e"}[e]+".css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="sango-slide:",c.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,d;if(void 0!==r)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){i=s;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var u=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),d&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/sango-slide3/",a=e=>new Promise(((t,r)=>{var n=c.miniCssF(e),o=c.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,o.parentNode.removeChild(o),n(l)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),i={666:0},c.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{209:1,352:1,512:1,626:1,846:1}[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={666:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626|666)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},c.F.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(209|626|666)$/.test(t))){e[t]=null;var r=document.createElement("link");c.nc&&r.setAttribute("nonce",c.nc),r.rel="prefetch",r.as="script",r.href=c.p+c.u(t),document.head.appendChild(r)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,d]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(d)var f=d(c)}for(t&&t(r);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(f)},r=self.webpackChunksango_slide=self.webpackChunksango_slide||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
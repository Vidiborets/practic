parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uSqd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"GTqL":[function(require,module,exports) {
"use strict";var e=t(require("../../data/gallery"));function t(e){return e&&e.__esModule?e:{default:e}}const r=document.querySelector(".js-gallery"),i=document.querySelector("div.lightbox"),n=document.querySelector('button[data-action="close-lightbox"]'),l=document.querySelector("div.lightbox__overlay"),a=document.querySelector(".lightbox__image"),o=e=>e.map(e=>{let{original:t,preview:r,description:i}=e;return`\n            <li class="gallery__item">\n                <a\n                class="gallery__link"\n                href=${t}\n                >\n                    <img\n                        class="gallery__image"\n                        src=${r}\n                        data-source=${t}\n                        alt=${i}\n                    />\n                </a>\n        </li>\n    `}).join("");function c(t){t.preventDefault(),window.addEventListener("keydown",s),e.default.forEach(e=>{t.target.getAttribute("src")===e.preview&&(a.setAttribute("src",e.original),a.setAttribute("alt",e.description))}),i.classList.add("is-open")}function u(){window.removeEventListener("keydown",s),i.classList.remove("is-open"),a.src=""}function d(e){e.currentTarget===e.target&&u()}function s(e){"Escape"===e.code&&u(),"ArrowRight"===e.code&&g(),"ArrowLeft"===e.code&&f()}function g(){for(let t=0;t<e.default.length-1;t+=1)if(a.getAttribute("src")===e.default[t].original)return a.setAttribute("src",e.default[t+1].original),void a.setAttribute("alt",e.default[t+1].description)}function f(){for(let t=0;t<e.default.length-1;t+=1)if(a.getAttribute("src")===e.default[t].original)return a.setAttribute("src",e.default[t-1].original),void a.setAttribute("alt",e.default[t-1].description)}r.insertAdjacentHTML("afterbegin",o(e.default)),r.addEventListener("click",c),n.addEventListener("click",u),l.addEventListener("click",d);
},{"../../data/gallery":"uSqd"}]},{},["GTqL"], null)
//# sourceMappingURL=/practic/task-09.70d2520c.js.map
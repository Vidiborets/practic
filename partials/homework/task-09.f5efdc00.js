!function(){var t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];const e=document.querySelector(".js-gallery"),i=document.querySelector("div.lightbox"),o=document.querySelector('button[data-action="close-lightbox"]'),n=document.querySelector("div.lightbox__overlay"),a=document.querySelector(".lightbox__image");function p(){window.removeEventListener("keydown",r),i.classList.remove("is-open"),a.src=""}function r(e){"Escape"===e.code&&p(),"ArrowRight"===e.code&&function(){for(let e=0;e<t.length-1;e+=1)if(a.getAttribute("src")===t[e].original)return a.setAttribute("src",t[e+1].original),void a.setAttribute("alt",t[e+1].description)}(),"ArrowLeft"===e.code&&function(){for(let e=0;e<t.length-1;e+=1)if(a.getAttribute("src")===t[e].original)return a.setAttribute("src",t[e-1].original),void a.setAttribute("alt",t[e-1].description)}()}e.insertAdjacentHTML("afterbegin",t.map((({original:t,preview:e,description:i})=>`\n            <li class="gallery__item">\n                <a\n                class="gallery__link"\n                href=${t}\n                >\n                    <img\n                        class="gallery__image"\n                        src=${e}\n                        data-source=${t}\n                        alt=${i}\n                    />\n                </a>\n        </li>\n    `)).join("")),e.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",r),t.forEach((t=>{e.target.getAttribute("src")===t.preview&&(a.setAttribute("src",t.original),a.setAttribute("alt",t.description))})),i.classList.add("is-open")})),o.addEventListener("click",p),n.addEventListener("click",(function(t){t.currentTarget===t.target&&p()}))}();
//# sourceMappingURL=task-09.f5efdc00.js.map



{/* <script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.min.js"></script> */}


// const coorrdsOutputRef = document.querySelector('.js-coords')

// let mouseMoveCbInvocatCounter = 0

// // const trrotleOnMouseMove = _.throttle(onMouseMove,500)

// // window.addEventListener('mousemove',trrotleOnMouseMove)

// function onMouseMove(event){
//     mouseMoveCbInvocatCounter += 1

//     coorrdsOutputRef.textContent = `
//         Количество вызовов onMouseMove: ${mouseMoveCbInvocatCounter}
//         Х: ${event.clientX},
//         Y: ${event.clientY}
//     `
// }

// const inputEl = document.querySelector('.js-input')
// const outputEl = document.querySelector('.js-output')
// let inputChangeCounter = 0

// // const debounceOnInputChange = _.debounce(onChangeInput,300)

// // inputEl.addEventListener('input',debounceOnInputChange)

// function onChangeInput(event) {
//     inputChangeCounter += 1

//     outputEl.textContent = `
//         Кол-во вызовов onChangeInput: ${inputChangeCounter},
//         Значение: ${event.target.value}
//     `
// }


// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'JavaScript' },
//     { label: 'Node.js' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.js' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQl' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
//   ];


//     const refs = {
//       list: document.querySelector('.js-list'),
//       input: document.querySelector('#filter'),
//   }

// refs.input.addEventListener('input',_.debounce(onSearchElement,300))

// function markUpListTech(array) {
//     return array.map(item=>{
//        return `
//             <li>
//                 <p>${item.label}</p>
//             </li>
//        `
//     }).join('')
// }

// popularList(markUpListTech(tech))

// function onSearchElement(event) {
//     const filter = event.target.value.toLowerCase()
    
//     const filteredItems = tech.filter(t=>
//         t.label.toLowerCase().includes(filter)
//     )

//     popularList(markUpListTech(filteredItems))

// }

// function popularList(markUp) {
//     refs.list.innerHTML = markUp
// }

// const imageEl = document.querySelectorAll('img[loading="lazy"]')
// console.log(imageEl)
// imageEl.forEach(image =>{
//     image.addEventListener('load',onImageLoaded,{
//         once:true
//     })
// })

// function onImageLoaded(event) {
//     console.log('Картинка загрузилась')
//     event.target.classList.add('appear')
// }

// if('loading' in HTMLImageElement.prototype){
//     console.log('Браузер поддерживает')
//     const imagesElement = document.querySelectorAll('img[loading="lazy"]')
    
//     imagesElement.forEach(img => {
//         return img.src = img.dataset.src
//     })
    
//     console.log(imagesElement)
// }else{
//     console.log('Браузер не поддерживает')
// }

{/* <script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.min.js" integrity="sha256-WzuqEKxV9O7ODH5mbq3dUYcrjOknNnFia8zOyPhurXg=" crossorigin="anonymous"></script> */}
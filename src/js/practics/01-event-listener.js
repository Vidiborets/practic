// const targetBtn = document.querySelector('.js-target-btn')
// const addListenerBtn = document.querySelector('.js-add-listener')
// const removeListenerBtn = document.querySelector('.js-remove-listener')



// addListenerBtn.addEventListener('click',()=>{
//     console.log('Вешаю слешателя события на целевую кнопку')

//     targetBtn.addEventListener('click',()=>{
//         console.log('Клик по целевой кнопке')
//     })

// })

// function logMessage(){
//     console.log('Клик по целевой кнопке')
// }

// const form = document.querySelector('.js-register-form')

// form.addEventListener('submit',onFormSubmit)

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget)

//     formData.forEach((value,name)=>{
//         console.log(value)
//         console.log(name)

//     })

//     // const formElements = event.currentTarget.elements

//     // const mail = formElements.email.value
//     // const password = formElements.password.value
//     // const subscripition = formElements.subscription.value

//     // const formData = {
//     //     mail,
//     //     password,
//     //     subscripition,
//     // }

//     // console.log(formData)
// }
// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     licenseCheckbox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),
// }
// // refs.input.addEventListener('focus',onInputFocus)
// // refs.input.addEventListener('blur',onInputBlur)
// // refs.input.addEventListener('change',onInputChange)
// refs.input.addEventListener('input',onInputChange)
// refs.licenseCheckbox.addEventListener('change',onLicenseChange)

// function onInputFocus(){
//     console.log('Получил фокус')
// }

// function onInputBlur(){
//     console.log('Потерял фокус')
// }

// function onInputChange(event){
//    refs.nameLabel.textContent = event.currentTarget.value
// }

// function onLicenseChange(event){
//     refs.btn.disabled = !event.currentTarget.checked
  
//         // if (event.currentTarget.checked === true) {
//         //     refs.btn.removeAttribute('disabled') 
//         // }else{
//         // 
//         // }
//         // event.currentTarget.checked 
//         // ? refs.btn.removeAttribute('disabled')
//         // : refs.btn.setAttribute('disabled','disabled')
    
// }


// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear')
// }

// window.addEventListener('keydown',onKeyPress)
// refs.clearBtn.addEventListener('click',onClearPress)

// function onKeyPress(event) {
//     console.log(event.key)
//     refs.output.textContent += event.key
// }

// function onClearPress() {
//     refs.output.textContent = ''
// }

// Modal Window

// const refs = {
//     openModal: document.querySelector('[data-action="open-modal"]'),
//     closeModal: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('.js-backdrop')
// }

// refs.openModal.addEventListener('click',onOpenModal)
// refs.closeModal.addEventListener('click',onCloseModal)
// refs.backdrop.addEventListener('click',onBackDropClick)

// function onOpenModal() {
//     window.addEventListener('keydown',onEscapeClick)
//     document.body.classList.add('show-modal')
// }

// function onCloseModal() {
//     window.removeEventListener('keydown',onEscapeClick)
//     document.body.classList.remove('show-modal')
// }

// function onBackDropClick(event) {
//     if (event.currentTarget === event.target) {
//         onCloseModal()
//     }
// }

// function onEscapeClick(event){
//     if(event.code === 'Escape'){
//         onCloseModal()
//     }
// }

// Делегирование событий

// const container = document.querySelector('.js-container')
// container.addEventListener('click',onClick)

// function onClick(evt){
//     if(evt.target.nodeName !== 'BUTTON'){
//         return
//     }
//     console.log('Клик по кнопке')
// }

// Тэги

// const tagTarget = document.querySelector('.js-tags')
// let selectiveTag = null
// const selectedTags = new Set()

// tagTarget.addEventListener('click',onTagsContainerClick)

// function onClickButton(event) {
//     if(event.target.nodeName !== 'BUTTON'){
//         return
//     }

//     const currentActiveButton = document.querySelector('.tags__btn--active')
   
//     // if (currentActiveButton) {
//     //     currentActiveButton.classList.remove('tags__btn--active')
//     // }
//     currentActiveButton?.classList.remove('tags__btn--active')

//     const nextActiveButton = event.target
//     nextActiveButton.classList.add('tags__btn--active')
    
//     selectiveTag = nextActiveButton.dataset.value
//     console.log(selectiveTag)
// }

// function onTagsContainerClick(event){
    
//     if(event.target.nodeName !== 'BUTTON'){
//         return
//     }
    
//     const btn = event.target
//     const tag = btn.dataset.value
//     const isActive = btn.classList.contains('tags__btn--active')

//     if(isActive){
//         selectedTags.delete(tag) 
//     }else{
//         selectedTags.add(tag)
//     }

//     // isActive ? selectedTags.delete(tag) : selectedTags.add(tag)

//     btn.classList.toggle('tags__btn--active')
    
//     console.log(selectedTags)
// }

// ColorPicker



// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#e91e63', rgb: '233,30,99' },
//     { hex: '#9c27b0', rgb: '156,39,176' },
//     { hex: '#673ab7', rgb: '103,58,183' },
//     { hex: '#3f51b5', rgb: '63,81,181' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#00bcd4', rgb: '0,188,212' },
//     { hex: '#009688', rgb: '0,150,136' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//     { hex: '#ff9800', rgb: '255,152,0' },
//     { hex: '#795548', rgb: '121,85,72' },
//     { hex: '#607d8b', rgb: '96,125,139' },
//   ];

// const containerInsert = document.querySelector('.js-palette')

// function markUpCard(colors){
//     return colors.map(({hex,rgb})=>{
//         return `
//             <div class="color-card">
//                 <div
//                     class="color-swatch"
//                     data-hex="${hex}"
//                     data-rgb="${rgb}"
//                     style="background-color: ${hex}">
//                 </div>
//                 <div class="color-meta">
//                     <p>HEX: ${hex}</p>
//                     <p>RGB: ${rgb}</p>
//                 </div>
//         </div>
//         `
//     }).join('')
// }

// containerInsert.insertAdjacentHTML('afterbegin',markUpCard(colors)) 

// containerInsert.addEventListener('click',onContainerClick)

// function onContainerClick(event) {
//     if (!event.target.classList.contains('color-swatch')) {
//         return
//     }

//     removeActiveCardClass()

//     const swatchEl = event.target;
//     const parenColorCard = swatchEl.closest('.color-card')
    
//     addActiveCardClass(parenColorCard)

//     setBodyBgColor(swatchEl.dataset.hex) 
// }

// function setBodyBgColor(color) {
//     document.body.style.backgroundColor = color
// }

// function removeActiveCardClass() {
//     const isActive = document.querySelector('.color-card.is-active')

//     if(isActive){
//         isActive.classList.remove('is-active')
//     }
// }

// function addActiveCardClass(card) {
//     card.classList.add('is-active')
// }



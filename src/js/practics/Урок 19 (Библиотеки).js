// localStorage.setItem('my-data',JSON.stringify({ name:'Mango', age: 2 }))

// const savedData = localStorage.getItem('my-data')
// console.log("savedData", savedData)

// const parseData = JSON.parse(savedData)
// console.log("parseData", parseData)

// localStorage.clear()

// const STORAGE_KEY = 'feedback-msg'
// var throttle = require('lodash.throttle');
// const formData = {}

// const refs ={
//     form: document.querySelector('.js-feedback-form'),
//     textArea: document.querySelector('.js-feedback-form textarea'),
//     inputName: document.querySelector('.js-feedback-form input')
// }

// refs.form.addEventListener('submit',onFormSubmit)
// refs.form.addEventListener('input', throttle(onChangeForm,1000))
// populateTextArea()

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log('Отправляем форму')
    
//     event.currentTarget.reset()
//     localStorage.removeItem(STORAGE_KEY)
// }

// function onChangeForm(event) {
//     formData[event.target.name] = event.target.value
//     localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
// }


// function populateTextArea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY)

//     if(savedMessage){
//         const valueText = JSON.parse(savedMessage)
//         console.log(valueText)
//         refs.textArea.value = valueText.message
//         refs.inputName.value = valueText.name
//     }

// }

// import colorCardTpl from '../template/color-picker.hbs'
// import colors from './data/colors.json'
// import colorCardsTpl from '../template/colors-cards.hbs'

// colorCardsTpl(colors)


// const containerInsert = document.querySelector('.js-palette')

// function markUpCard(colors){
//     // return colors
//     //     .map(colorCardsTpl)
//     //     .join('')
//     return colorCardsTpl(colors)
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

import itemsTemplate from '../template/gallery-item.hbs'
import countries from '/js/countries.json'

const galleryRef = document.querySelector('.js-gallery')

const markUp = itemsTemplate(countries)

galleryRef.insertAdjacentHTML('beforeend',markUp)
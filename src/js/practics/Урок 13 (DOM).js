// const magicBtnEl = document.querySelector('.magic-btn')
// const navEl = document.querySelector('ul')
// const navItemEl = document.querySelector('.site-nav__item')
// const navLinks = document.querySelectorAll('.site-nav__link')


// magicBtnEl.addEventListener('click',()=>{
// console.log(navLinks)

// navLinks.forEach(item=>{
//     console.log(item)
// })

// })

// https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480

// const imageEl = document.querySelector('.hero__image')
// const magicBtnEl = document.querySelector('.js-magic-btn')
// const heroTitleEl = document.querySelector('.hero__title')
// const action = document.querySelectorAll('.js-actions button')
// const inputEl = document.querySelector('.js-input')
// const navEl = document.querySelector('.site-nav')




// magicBtnEl.addEventListener('click',()=>{
//     imageEl.src =
//     'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'
//     imageEl.alt = 'Это новый котик'
// })

// heroTitleEl.textContent = 'Я сладкий пирожочек'
// console.log(imageEl.getAttribute('src'))


// action[0].dataset.action


// magicBtnEl.addEventListener('click',()=>{
//     inputEl.value = 'fsdfdsfdsfsd'
// }

//  const magicBtn = document.querySelector('.magic-btn')
//  const navEl = document.querySelector('.nav_item')

//  magicBtn.addEventListener('click',()=>{
//     navEl.classList.toggle('super-cool')
//  })
// const currentEl = '/contact'
// const currentPage = document.querySelector(`.nav_item[href="${currentEl}"]`)
// currentPage.classList.add('site-nav__link--current')
// console.log(currentPage)


// const navEl = document.querySelector('.site-nav')
// console.log(navEl)
// const firstNavItem = navEl.firstElementChild;
// console.log(firstNavItem)

// const titleEl = document.createElement('h1')
// titleEl.classList.add('pagew-title')
// titleEl.textContent = 'Это заголовок страницы'
// const imageEl = document.createElement('img')
// imageEl.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyRYCZmx3g9l_yE4HfYv8RcSaw1qKBX4eb6oCJQSi&s'
// imageEl.alt = 'valarys'
// imageEl.width = 640

// const navItem = document.createElement('li')
// const navEl = document.querySelector('.site-nav')
// const navLinkElement = document.createElement('a')

// navItem.classList.add('.site-nav__item')

// navLinkElement.classList.add('site-nav__link')
// navLinkElement.textContent = 'Личный кабинет'
// navLinkElement.href = ''

// navItem.appendChild(navLinkElement)

// // navEl.appendChild(navItem)
// // console.log(navEl)
// navEl.insertBefore(navItem, navEl.firstElementChild)



// // document.body.appendChild(imageEl)

// const heroEl = document.querySelector('.hero')
// // heroEl.appendChild(titleEl)
// // heroEl.appendChild(imageEl)

// heroEl.append(titleEl,imageEl)


const container = document.querySelector('.js-color-picker')
const magicBtn = document.querySelector('.magic-btn')
const bodyConteiner = document.body.style.backgroundColor


const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

const option = colorPickerOptions[0]



// const elements = colorPickerOptions.map(option =>{
    
//     const buttonEl = document.createElement('button');

//     buttonEl.type = 'button'
//     buttonEl.textContent = option.label
//     buttonEl.classList.add("color-picker__option")
//     buttonEl.style.backgroundColor = option.color

//     return buttonEl
// })

// console.log(elements)

// container.append(...elements)



// console.log(buttonEl)

// const elements = []

// for (let i = 0; i < colorPickerOptions.length; i++) {
   
//     const option = colorPickerOptions[i]
//     const buttonEl = document.createElement('button');

//     buttonEl.type = 'button'
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = option.label
//     buttonEl.style.backgroundColor = option.color

//     elements.push(buttonEl)

// }

// container.append(...elements)

// const makeColorPickerOption = (options)=>{
//     return options.map(({color,label}) =>{
    
//         const buttonEl = document.createElement('button');
    
//         buttonEl.type = 'button'
//         buttonEl.textContent = label
//         buttonEl.classList.add("color-picker__option")
//         buttonEl.style.backgroundColor = color

    
//         return buttonEl
//     })
// }

// const makeElement = makeColorPickerOption(colorPickerOptions)

// container.append(...makeElement)
// import product from './data/products'

// const containerItem = document.querySelector('.js-products')

// const product = {
//     name: 'Сервоприводы',
//     description: 'Lorem ipsum',
//     price: 2000,
//     availeble: true,
//     onSale: true
// }

// const productElement = document.createElement('article')
// productElement.classList.add('product')

// const nameEl = document.createElement('h2')
// nameEl.classList.add('product__name')
// nameEl.textContent = product.name

// const descriptionEl = document.createElement('p')
// descriptionEl.classList.add('product__descr')
// descriptionEl.textContent = product.description

// const priceEl = document.createElement('p')
// priceEl.classList.add('product__price')
// priceEl.textContent = `Цена: ${product.price} кредитов`

// productElement.append(nameEl,descriptionEl,priceEl)

// console.log(productElement)
// containerItem.append(productElement)

// const makeProductCard =({name,description,price}) =>{
//     const productElement = document.createElement('article')

//     productElement.classList.add('product')

//     const nameEl = document.createElement('h2')
//     nameEl.classList.add('product__name')
//     nameEl.textContent = name

//     const descriptionEl = document.createElement('p')
//     descriptionEl.classList.add('product__descr')
//     descriptionEl.textContent = description

//     const priceEl = document.createElement('p')
//     priceEl.classList.add('product__price')
//     priceEl.textContent = `Цена: ${price} кредитов`

//     productElement.append(nameEl,descriptionEl,priceEl)

//     return productElement
// }



// const elements = product.map(makeProductCard)
// containerItem.append(...elements)

// const titleEl = document.querySelector('.title')

// // titleEl.innerHTML = 
// titleEl.insertAdjacentHTML('afterbegin', `<a href=''>Это ссылка</a>`)

{/* <tr>
                  <td>ID транзакции</td>
                  <td>Сумма</td>
                  <td>Дата</td>
                  <td>Кто</td>
                  <td>Тип транзакции</td>
                  <td>Имя счета</td>
                  <td>Номер счета</td>
              </tr> */}

// import transactionHistory from './data/transaction';
// const containerTBody = document.querySelector('.js-containe-tbody')
// console.log(transactionHistory)

// const makeTransactionMarkUp = ({id, amount, date, business, type, name, account})=>{
//     return `
//     <tr>
//         <td>${id}</td>
//         <td>${amount}</td>
//         <td>${date}</td>
//         <td>${business}</td>
//         <td>${type}</td>
//         <td>${name}</td>
//         <td>${account}</td>
//     </tr> 
//     `
// }
// const markUp = transactionHistory.map(makeTransactionMarkUp).join('')
// console.log(markUp)
// containerTBody.insertAdjacentHTML('beforeend',markUp)

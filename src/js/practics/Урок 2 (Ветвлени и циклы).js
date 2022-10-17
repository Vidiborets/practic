// Напиши скрипт выбора стоимость отеля по кол-ву звезд
const stars = 3;
let price;

if(stars === 1){
    price = 20
}else if(stars === 2){
    price = 30
}else if(stars === 3){
    price = 50
}else if(stars === 4){
    price = 70
}else if (stars === 5) {
    price === 120
} else{
    console.log('Такого кол-ва звезд нет')
}

console.log(price)

switch (stars) {
    case 1:
        price = 20
        break;
    case 2:
        price = 30;
        break;
    case 3:
        price = 50;
        break;
    case 4:
        price = 70;
        break;
    case 5:
        price = 120;
        break;
    default:
        console.log('Такого значения нет')
        break;
}

console.log(price)

if(stars === 1 || stars === 2){
    price = 20
}else if(stars === 3 || stars === 4){
    price = 30
}else if(price === 5){
    price = 120
}else {
    console.log('Такого значения нет')
}
console.log(price)

switch (stars) {
    case 1:
    case 2:
        price = 20
        break;
    case 3:
    case 4:
        price = 30
        break
    case 5:
        price = 120
    default:
        break;
}
console.log(price)

// Напиши скрипт выбора опций доставки товаров 
// Опция хранится в переменной option : 1 - самовывоз , 2 -курьер , 2- почта

// в переменную message записать сообщние в зависимости от опции 
const option = 1
let message = '';

if(option === 1){
    message = 'Вы мождете забрать товар с 12:00 в нашем офсие'
}else if(option = 2){
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00'
}else if(option ===3){
    message = 'Посылка будет отправлена сегодня'
}else{
    message = 'Вам перезвонит наш менеджер'
}

console.log(message)



switch (option) {
    case 1:
        message = 'Вы мождете забрать товар с 12:00 в нашем офсие'
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 9:00 до 18:00'
        break
    case 3:
        message = 'Посылка будет отправлена сегодня'
    default:
        message = 'Вам перезвонит наш менеджер'
        break;
}
console.log(message)

// Цикл for


for (let i = 50; i >= 0; i -= 5 ) {
    console.log(i)
}


// Напиши скрипт который подсчитывает общую стоимост зарплат работников
// Кол-во работников хранится в переменной emploses
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

const minSalary = 500
const maxSalary = 5000
const emploses = 10;
let totalSalary = 0;


for (let i = 1; i <= emploses; i++){
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary
    )
    console.log(`Зп работника ${i} - ${salary}`)
    totalSalary +=salary
    
 }
 console.log(totalSalary)

// Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапазон чисел от min до max
// Например если min = 0 и max = 8 то диапазон 0 -5 и в нем четных чисел 2 и 4


const min = 6
const max = 13
let total = 0

for (let i = min; i <= max; i++) {
    if( i % 2 === 0 ){
        total += i
    }
}
console.log(total)

for (let i = min ; i <= max; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        continue; 
        // деректива
    }
    total+=i
}

console.log(total)

// Напиши скрипт обарботки покупки в магазине

// - Баланс пользователя хранится в переменно balance
// - Сумма покупки хранится в переменной payment
// - Перед проверкой выведите сообщение
    'Общая стоимость заказа [число] кредитов.Проверяем кол-во доступных средств на счету'

// Если сумма покупки не превышает баланс:
    // - Вычесть из баланса сумму покупки
    // - Вывести сообщение 
    'На счету осталось [число] кредитов'
// Если сумма покупки превышает баланс:
    // - Вывести сообщение:
    'На счету недостаточно средств для проведения операции!'
// В конце вывести сообщение:
    'Операция завершена'
    'Все хорошо снимаем деньги ... Спасибо за покупку!'

// let balance = 10000;
// const payment = 2000;
// let total = 0
// let message

// console.log(`Общая стоимость заказа ${payment} кредитов.Проверяем кол-во доступных средств на счету`)

// if (balance >= payment) {
//     message = 'Все хорошо снимаем деньги ... Спасибо за покупку!'
//     balance -= payment
//     console.log(message)
//     console.log(`На счету осталось ${balance} кредитов`)
// }else{
//     message = 'На счету недостаточно средств для проведения операции!'
//     console.log(message)
// }
// console.log('Операция завершена')

let totalSpent = 800
let payment = 1000
let discount = 0

if(totalSpent >= 100 && totalSpent < 1000){
    console.log('Бронзовый партнер')
    discount = 0.02
}else if(totalSpent >= 1000 && totalSpent < 5000){
    console.log('Серебреный партнер')
    discount = 0.05
}else if(totalSpent > 5000){
    console.log('Золотой партнер')
    discount = 0.10
}else{
    console.log('Не партнёр')
    discount = 0
}
payment -= payment * discount

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`)

totalSpent += payment

console.log(`Общая сумма потраченого в магазине : ${totalSpent}`)

const buttonAdd = document.querySelector('button')
const valueInput = document.querySelector('input')
const output = document.querySelector('.js-output span')
let totalEl = 0

buttonAdd.addEventListener('click' , ()=>{
    const value = Number(valueInput.value)
    totalEl += value
 
    output.textContent = `Сумма ${total}`

    valueInput.value = ''
})
console.dir(buttonAdd.textContent)
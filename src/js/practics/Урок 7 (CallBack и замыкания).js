// const fnA = function(message,callback){
//     console.log(message)

//     console.log(callback)
//     callback(100)
// }

// const fnB = function(number){
//     console.log('Это о при вызова fnB',number)
// }

// fnA('qweqwe',fnB)

// const doMath = function(a,b,callback){
//     const result = callback(a,b)

//     console.log(result)
// }

// const add = function (x,y) {
//     return x + y
// }

// const sub = function(x,y){
//     return x - y
// }

// doMath(2,3,add)
// doMath(10,8,sub)





// const getPositionSuccess = function (position) {
//     console.log(position)
// }

// const onGetPositionError = function(error){
//     console.log(error)
//     console.log(error.message)
// }

// window.navigator.geolocation.getCurrentPosition(
//     getPositionSuccess,
//     onGetPositionError
// )

// const callback = function(){
//     console.log('Вызвать через 3 секунды')
// }

// console.log('В коде перед таймаутом')

// setTimeout(callback,3000)

// console.log('В коде после таймаутом')


// 'https://pokeapi.co/api/v2/pokemon'

// const httpRequestSuccess = function(response){
    
// }

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(httpRequestSuccess)


// const filter = function (array,callback) {
//     const filteredArray = []

//     for (const el of array) {
       
//         const passed = callback(el)

//         if (passed) {
//             filteredArray.push(el)
//         }
//     }

//     return filteredArray
// }

// const callback1 = function (value) {
//     return value >= 3
// }

// const callback2 = function (value) {
//     return value <= 4
// }

// const r1 = filter([1,2,3,4,5],callback1)
// console.log(r1)

// const r2 = filter([1,2,3,4,5,6,7,8],callback2)
// console.log(r2)

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ]

// const getFruitWithQuantity = function({quantity}){
//     return quantity >= 120
// }

// const getFreshFruits = function ({isFresh}) {
//     return isFresh === true
// }

// const r3 = filter(fruits,getFruitWithQuantity)

// console.log(r3)

// const r4 = filter(fruits,getFreshFruits)

// console.log(r4)





// Замыкание 


// const fnA = function (params) {
   
//     const innerVariable = 'значение внутренней функции fnA'

//     const innerFunction = function(){
//         console.log(params)
//         console.log(innerVariable)
//         console.log('Это вызов innerFucntion')
//     }

//     return innerFunction
// }

// const fnB = fnA(555)

// fnB()

// console.log(fnB)

// const makeDish = function(shefName,dish){
//     console.log(`${shefName} готовит ${dish}`)
// }

// makeDish('Mango','Пирожок')
// makeDish('Mango','Омлет')
// makeDish('Mango','Чай')

// makeDish('Poly','Котлеты')
// makeDish('Poly','Супик')
// makeDish('Poly','Кофе')

// const makeShef = function (name) {

//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`)
//     }

//     return makeDish
// }

// const mango = makeShef('Mango')
// const poly = makeShef('Poly')
// mango('Пирожок')
// poly('Пирожок')



// const makeShef = function(name){

//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`)
//     }

//     return makeDish
// }

// const mango = makeShef('Mango')
// mango('Котлеты')

// const poly = makeShef('Poly')
// poly('Пирожки')


// const floatingPoint = 3.456789
// const someInt = Math.round(floatingPoint)
// console.log(someInt)
// const withDecimals = Number(floatingPoint.toFixed(2))
// console.log(withDecimals)

// const rouderNumber = function(number,place){
//     return Number(number.toFixed(place))
// }

// console.log(rouderNumber(3.3453543534,2))

// const raunderValue = function(place){

//     const numberRound = function(num){
//         return Number(num.toFixed(place))
//     }

//     return numberRound
// }

// const round1 = raunderValue(2)
// const result = round1(3.432534534534)
// console.log(result)



// const salaryManagerFactory = function(employeename,basesalary = 0){
//     let salary = basesalary

//     return{
//         raise(amount){
//             salary += amount
//         },
//         lower(amount){
//             salary -= amount
//         },
//         current(){
//             return `Текущая зарплтата ${employeename} - ${salary}`
//         }
//     }
// }

// const salaryManager = salaryManagerFactory('Mango',5000)

// console.log(salaryManager.current())
// console.dir(salaryManager.current)

// const button = document.querySelector('.js-button')

// const addArrow = (...args) => {
//     console.log(args)
// }
    
// console.log(addArrow(5, 10, 15))

// const fnA = function(){
//     return {
//         a:5
//     }
// }

// console.log(fnA())

// const aroowFna = () => ({ a: 5})

// console.log(aroowFna())

// const filter = (array,callback) => {
//     const filteredArray = []

//     for (const el of array) {
       
//         const passed = callback(el)

//         if (passed) {
//             filteredArray.push(el)
//         }
//     }

//     return filteredArray
// }

// const callback1 = value => value >= 3

// const callback2 = value => value <= 4

// const r1 = filter([1,2,3,4,5],callback1)
// console.log(r1)

// const r2 = filter([1,2,3,4,5,6,7,8],callback2)
// console.log(r2)

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ]

// const getFruitWithQuantity = ({ quantity }) => quantity >= 120


// const getFreshFruits =  ({ isFresh }) => isFresh === true

// const r3 = filter(fruits,getFruitWithQuantity)

// console.log(r3)

// const r4 = filter(fruits,getFreshFruits)

// console.log(r4)
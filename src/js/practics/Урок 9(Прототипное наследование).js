// const objC = {
//     z:5
// }

// const objB = Object.create(objC)

// objB.y = 2

// const objA = Object.create(objB)
// objA.x = 1

// console.log(objA)

// console.log(objA.z)

// objA.z = 1000
// console.log(objA)

// const dummyObj = Object.create({message: 'Єто не собственное свойство обьекта'})
// dummyObj.message = 'Єто собственное свойство обьекта'
// console.log(dummyObj)



// ООП 


// const Car = function (options = {}){
//     const {brand , model , price} = options

//     this.brand = brand
//     this.model = model
//     this.price = price

//     // this.changePice = function(newPrice){
//     //     this.price = newPrice
//     // }

// }

// Car.prototype.sayHi = function (){

// }

// Car.prototype.changePrice = function(newPrice){
//     this.price = newPrice
// }

// const myCar = new Car ({
//     brand: 'Audi', 
//     model: 'Q3',
//     price: 35000
// })

// myCar.sayHi()
// myCar.changePrice(5000)

// const myCar2 = new Car ({
//     brand: 'BMW',
//     model: 'X6',
//     price: 50000
// })

// myCar2.sayHi()

// const myCar3 = new Car({
//     brand: 'Audi',
//     model: 'A6',
//     price: 60000
// })

// myCar3.sayHi()

// console.log(myCar)
// console.log(myCar2)
// console.log(myCar3)


// const User = function({email = '',password = ''}){
//     this.email = email
//     this.password = password
// }

// User.prototype.changeEmail = function(email){
//     this.email = email
// }

// const mango = new User({ email: 'mango@gmail.com', password: 11111 })

// mango.changeEmail('poly@gmail.com')

// console.log(mango)


// 1.У каждого обьекта есть свйоство __proto__
// 2.В этом свойстве лежит ссылкана его прототип ,тоесть на другой обьекта
// 3.При создании литерала обьекта ,в свойство __proto__ записывается ссылка на функция.prototype
// 4.Функция-конструктор это просто функция
// 5.Всю магию деалет оператор new
// 6.Если функция вызывается через new , создается пустой обьект
// 7.Функция вызыввается в контексте созданного обьекта
// 8.В ссвойство this.__proto__ записывается ссылка на обьект функция.prototype
// 9.Ссылка на обьект возвращается в место вызова new Функция

// const User = function({email = '',password = ''}){
//     this.email = email
//     this.password = password
// }

// User.prototype.changeEmail = function(email){
//     this.email = email
// }

// const mango = new User({ email: 'mango@gmail.com', password: 11111 })

// mango.changeEmail('poly@gmail.com')

// console.log(mango)

// User.message = 'Это статическое свойство , меня нет на экземплярах или в прототипе'

// User.logInfo = function(obj){
//     console.log(obj)
// }

// console.log(User)




// const CounterPlugin = function({rootSelector ,initialValue = 0,step = 1} = {}){
    
//     this._value = initialValue
//     this._step = step
//     this._refs = this._getRefs(rootSelector)
//     this._bindEvent()
    
// }
// CounterPlugin.prototype._getRefs = function(rootSelector){

//     const refs = {}
//     refs.container = document.querySelector(rootSelector)
//     refs.incrementBtn = refs.container.querySelector('[data-increment]')
//     refs.decrementBtn = refs.container.querySelector('[data-decrement]')
//     refs.value = refs.container.querySelector('[data-value]')
    
//     return refs
// };

// CounterPlugin.prototype._bindEvent = function(){
//     this._refs.incrementBtn.addEventListener('click',()=>{
//         console.log('Это инкремент')
//         this.decrement()
//         this.updateValueUI()
//     })
//     this._refs.decrementBtn.addEventListener('click',()=>{
//         console.log('Это дикремент')
//         this.increment()
//         this.updateValueUI()
//     })
// };

// CounterPlugin.prototype.updateValueUI = function(){
//     this._refs.value.textContent = this._value
// };

// CounterPlugin.prototype.increment = function(){
//     this._value += this._step
// };

// CounterPlugin.prototype.decrement = function(){
//     this._value -= this._step
// };

// new CounterPlugin({rootSelector: '#counter-1' ,step : 1})

// new CounterPlugin({rootSelector: '#counter-2' ,step : 1})

// new CounterPlugin({rootSelector: '#counter-3' ,step : 1})





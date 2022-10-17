// class Car{
//     static description = 'Класс описывающий автомобиль';

//     static logInfo(carObj){
//         console.log(carObj)
//     }


//     #test = 'test'

//     constructor({brand,model,price} = {}){
//         this.brand = brand
//         this._model = model
//         this._price = price
//     }

//     set price (newPrice){
//         this._price = newPrice
//     }

//     get price (){
//         return this._price
//     }

//     get model (){
//         return this._model
//     }

//     set model(newModel){
//         this._model = newModel
//     }

// }

// const carInstatnce = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// })


// carInstatnce.changePrice(20000)
// carInstatnce.updateName('I3')
// console.log(Car.description)
// console.log(carInstatnce)
// Car.logInfo(carInstatnce)




// carInstatnce.model = 'Q4'
// carInstatnce.price = 20000
// console.log(carInstatnce)
// console.log(carInstatnce.model)

// const button = document.querySelector('.js-button')
// const attackButton = document.querySelector('.js-button_atack')
// const attackButtonMage = document.querySelector('.mage')
// const attackButtonBerserk = document.querySelector('.berserk')



// class Hero {
//     constructor({ name = 'hero',xp = 0 }){
//         this.name = name
//         this.xp = xp
//     }
//     gainXp(amount){
//         console.log(`${this.name} получает ${amount} опыта`)
//         this.xp += amount
//     }
// }
 

// class Warrior extends Hero {
    
//     constructor({ weapon = {}, ...restProps }){
//         super(restProps)
//         this.weapon = weapon;
//     }

//     attack(){
//         console.log(`${this.name} атакуею используя ${this.weapon}`)
//     }
// }

// class Berserk extends Warrior{
//     constructor({warcry = {},weapon = {}, ...restProps}){
//         super(restProps)

//         this.warcry = warcry
//         this.weapon = weapon
//     }

//     babyRage(){
//         console.log(`${this.name} атакуюет используя ${this.weapon} и кричит ${this.warcry}`)
//     }
// }

// class Mage extends Hero{
//     constructor({ spells = [], ...rest } = {}){
//         super(rest)
//         this.spells = spells
//     }

//     cast(spells){
//         console.log(`${this.name} кастует используя ${this.spells}`)
//     }
// }

// const mango = new Warrior({ name:'mango' , xp: 1000 , weapon: 'alebarda' })
// const poly = new Mage({ name:'poly', xp: 500, spells: ['fareball'] })
// const kiwi = new Berserk({ name: 'Kiwi', xp: 2000, weapon: 'bulava',warcry: 'waaaaa' })

// // console.log(mango.__proto__ === Warrior.prototype)
// // console.log(Warrior.prototype.__proto__ === Hero.prototype)

// attackButton.addEventListener('click',()=>{
//     mango.attack()
//     mango.gainXp(1000)
// })

// attackButtonMage.addEventListener('click',()=>{
//     poly.cast()
//     poly.gainXp(500)
// })

// attackButtonBerserk.addEventListener('click' , ()=>{
//     kiwi.babyRage()
//     kiwi.gainXp(200)
// })
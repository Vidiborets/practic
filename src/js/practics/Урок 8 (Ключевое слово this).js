// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log(this)
//     }
// }

// user.showTag()

// const foo = function () {
//     console.log(this)
// }

// foo()

// const showTag = function (params) {
//     console.log(this)
//     console.log(this.tag)
// }

// const user = {
//     tag:'Mango'
// }

// user.showTagIngo = showTag

// user.showTagIngo()

// const user = {
//     tag: 'Mango',
//     showTag (){
//         console.log(this)
//         console.log(this.tag)
//     }
// }
// user.showTag()


// const user = {
//     tag: 'Mango',
//     showTag (){
//         console.log(this)
//         console.log(this.tag)
//     }
// }


// const invokeAction = function(action){
//     console.log(action)
//     action()
// }

// invokeAction(user.showTag)



// const xyz = user.showTag
// console.log(xyz())
// undefined


// const makeChangeColor = function(){
//     const sweater = {
//         color: 'teal'
//     }
   

//     const changeColor = function(color){
//         console.log(this)
//         this.color = color
//     }

//     // sweater.changeColor('red')
    

//     sweater.updateColor = changeColor

//     sweater.updateColor('red')

//     return sweater.updateColor   

// }

// const swapColor = makeChangeColor()
// swapColor('blue')



// const makeChangeColor = function(){
 
//        const changeColor = function(color){
        
//         this.color = color
//         console.log(this)
//     }

//     return changeColor   

// }

// const updateColor = makeChangeColor()


// const hat = {
//     color:'blue',
//     updateColor,
// }

// hat.updateColor('orange')

// const showThis = function(){
//     console.log(this)
// }

// const objA = {
//     a:5,
//     b:10
// }

// showThis.call(objA)





// const counter = {
//     value : 0,
//     increment(value){
//         console.log(this)
//         this.value += value
//         count.textContent = this.value
//     },
//     decrement(value){
//         console.log(this)
//         this.value -= value
//     }
// }

// buttonDecrement.addEventListener('click',counter.decrement(10))

//  const changeColor = function(color){
//     console.log(this)
//     this.color = color
    
//  }

//  const hat = {
//      color: 'black',
//  }

//  const sweater = {
//      color:"green",
//  }

//  changeColor.call(hat,'orange')
//  console.log(hat)

// changeColor.call(sweater,'blue')
// console.log(sweater)


// const changeHatcolor = changeColor.bind(hat)
// const changeSweaterColor = changeColor.bind(sweater)

// changeHatcolor()
// changeSweaterColor()

// const buttonIncrement = document.querySelector('.button_increment')
// const buttonDecrement = document.querySelector('.button_decrement')
// const count = document.querySelector('.count')


// const counter = {
//     value : 0,
//     increment(){
//         this.value += 1
//     },
//     decrement(){
//         this.value -= 1
//     }
// }

// const changeIncrement = () => {
//     counter.increment()
//     count.textContent = counter.value
// }

// const changeDecrement = () => {
//     counter.decrement()
//     count.textContent = counter.value
// }

// buttonDecrement.addEventListener('click',function(){
//     counter.decrement()
//     count.textContent = counter.value
// })
// buttonIncrement.addEventListener('click',function(){
//     counter.increment()
//     count.textContent = counter.value
// })
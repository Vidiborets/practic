// Напишем функцию по подсчету стоимости 

// const carts = [ 54, 28, 105, 70, 92, 17, 120, 12, 25, 90]

// function calculateTotalPrice(array){
//     let sum = 0

//     array.reduce((total,el)=>{
//         sum += el
//     },0)

//     return sum
// }

// console.log(calculateTotalPrice(carts))

// Напиши функцию для перебора и логирование массива 

// function logItems(array) {
//     for (const item of array) {
//         console.log(item)
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax'])
// logItems([ 1, 2, 3, 4, 5])
// logItems(['клавиатура', 'наушники', 'часы'])

// Напиши функцию которая примает все логины для поиска

// const logins = ['m4ngoDoge','kiwidab3st','poly1scute','ajxth3m4n']
// let item = document.querySelectorAll('.item')
    

// function findLogin(array,login) {
    
//     return array.includes(login)
//     ? `Пользователь ${login} найден`
//     : `Пользователь ${login} не найден`

//     // for (const element of array) {
//     //     item.textContent = element === login
//     //     ? `Пользователь ${login} найден`
//     //     : `Пользователь ${login} не найден`
//     // }
//     // return item.textContent
   
// }

// console.log(findLogin(logins,'ajxth3m4n'))
// console.log(findLogin(logins,'m4ngoDoge'))
// console.log(findLogin(logins,'poly1scute'))
// console.log(findLogin(logins,'kiwidab3st'))

// Напиши функцию поиска самого маленького числа

// function findSmallestNumber(array) {
//     let smallNumber = array[0]
//     // for (const number of array) {
//     //     if(smallNumber > number){
//     //         smallNumber = number
//     //     }
//     // }
//     // array.map(number=>{
//     //     if(smallNumber > number){
//     //         smallNumber = number
//     //     }
//     // })

//     array.map(number =>{
//         if(smallNumber < number){
//             smallNumber = number
//         }
//     })


//     array.reduce((acc,number)=>{
//         if(smallNumber > number){
//             smallNumber = number
//         }
//     })

//     return smallNumber
// }

// console.log(findSmallestNumber([3, 8, 12, -1, 15]))
// console.log(findSmallestNumber([100, 54, 8, 12, 47]))
// console.log(findSmallestNumber([7, 21, 84, 15, 4]))


// Напиши функцию которая инвертирует строку в регистр


// const string = 'JaVaScRiPt'

// function mageString(string) {
    
//     let invertedString = ''

//     string.split('').map(letter=>{
//         invertedString += letter === letter.toLowerCase() 
//         ? letter.toUpperCase()
//         : letter.toLowerCase()
//     })

//     return invertedString

// }

// const mafeString = mageString(string)
// console.log(mafeString)

// Напиши функцию написания slug

// const title = 'Top 10 benefits of react framework'

// function slugiFy(string) {
//    return string.toLowerCase().split(' ').join('-')
// }

// console.log(slugiFy(title))

// Напиши скрипт поиска числа в массиве 

// const filterNumbers= function(array, ...args){
//     const arrayNew = []

//     array.map(el=>{
//         if(args.includes(el)){
//             arrayNew.push(el)
//         }
//     })
    
//     return arrayNew
// }

// console.log(filterNumbers([1,2,3,4,5],10,15,2,3,8))
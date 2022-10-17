//  const friends = ['Mango','Kiwi','Poly','Ajax']
//  console.log(friends)

// const number = 12345
// friends[1] = number

// console.log(friends)

// Перебор массива

// const friends = ['Mango','Kiwi','Poly','Ajax']

// for(let i = 0; i <= friends.length - 1; i += 1){
//     console.log(friends[i])
//     friends[i] += '-1'
// }

// console.log(friends)

// for (const friend of friends) {
//     console.log(friend)
// }


// Общая сумма массива


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90]
// let total = 0

// for (let i = 0; i < cart.length; i+=1) {
//     const element = cart[i];
//     total += cart[i]
//     console.log(element)
// }
// console.log(total)

// for (const num of cart) {
//     console.log(num)
//     total += num
// }

// console.log(total)

// cart.reduce((acc,num)=>{
//     total += num
// },0)

// console.log(total)

// cart.map(el=>{
//     total+=el
// })

// console.log(total)

// cart.forEach(el=>{
//     total+=el
// })
// console.log(total)


// Сумма всех четных чисел

//  const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14]
//  console.log(numbers)

// let total = 0
//  for (const number of numbers) {
//      if(number % 2 !== 0){
//         continue
//      }
//      total += number
// //   number % 2 === 0 ? total += number : false;
//  }

// numbers.map(el=>{el % 2 === 0 ? total += el : false;})

// console.log(total)

// Поиск логина

// const logins = ['m4ngoDoge','kiwidab3st','poly1scute','ajxth3m4n']
// const loginFind = 'poly1scute'
// let message = ''
// const find = []


// for (const login of logins) {
//     if(login === loginFind){
//         console.log('Логин найден')
//         find.push(login)
//     }
// }
// console.log(find)
// for (let i = 0; i < logins.length; i++) {

//     const login = logins[i]

//     if (login === loginFind) {
//         message = `Пользователь ${login} найден`
//         break
//     }
//     message = `Пользователь ${login} не найден`
// }
// console.log(message)

// logins.includes(loginFind) ? 
//     message = `Пользователь ${loginFind} найден` : 
//     message = `Пользователь ${loginFind} не найден`;
// console.log(message)


// logins.map(login =>{
//     login === loginFind ? find.push(login) : false;
// })
// console.log(find)


// Найти самое маленькое число

// const numbers = [51, 18, 13, 24, 7, 85, 19]
// let smalessNumber = numbers[0]

// for (const number of numbers) {
//    if(number < smalessNumber){
//        smalessNumber = number
//    }
// }
// console.log(smalessNumber)

// Обьеденить все элементы массива в строковое значение

// const friends = ['Mango','Poly','Kiwi','Ajax']
// let message = ''

// for (const friend of friends) {
//     message = message + friend + ','
// }
// const last = message.slice(0,-1)
// console.log(last)

// message = friends.join(' , ')

// console.log(message)

// Изменить регистр в строке

// const string = 'JavaScript'
// let subString = ''

// const letters = string.split('')
// console.log(letters)

// for (const letter of letters) {
//     // console.log(letter)
//     // if(letter === letter.toLowerCase()){
//     //     subString += letter.toUpperCase()
//     // }else{
//     //     subString += letter.toLowerCase()
//     // }
//     // subString += letter === letter.toLowerCase() ? 
//     //     letter.toUpperCase():
//     //     letter.toLowerCase()
// }

// console.log(subString)
// for(const letter of string){
//     console.log(letter)

// }

// Делаем Slug


// const title = 'Top 10 benefits of react framework'

// const normalize = title.toLowerCase().split(' ').join('-')

// console.log(normalize)

// Сумма элементов всех масивов

// const array1 = [5, 10, 15, 20]
// const array2 = [10, 20, 30]
// let total = 0
// const array = array1.concat(array2).map(el=>{total+=el})


// for(const num of array){
//     total += num
// }

// array.map(el=>{
//     total+=el
// })

// array.reduce((acc,el)=>{
//     total +=el
// },0)

// console.log(total)


// Работаем с коллекцией карточек


// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ]

// удаление

// const cardsRemove = 'Карточка-3'
// const index = cards.indexOf(cardsRemove)
// cards.splice(index,1)

// console.log(cards)

// Добавление

// const cartToInsert = 'Карточка-6'
// const index = 3;
// cards.splice(index,0,cartToInsert)
// cards.push(cartToInsert)

// console.log(cards)

// Обновление

// const cartToUpdate = 'Карточка-4'
// cards.splice(1,1,cartToUpdate)

// console.log(cards)




// const friendMassive=(friends)=>{
//      friends.forEach(element => {
//          console.log(element)
//      });
// }
// friendMassive(friends)

//  function massivePart(friends) {
//      friends.map(el=>console.log(el))
//  }
//  massivePart(friends)

// const numbers = [1,2,3,4,5]

// function totalNumbers(numbers) {
//     let total = 0
//     numbers.reduce((acc,num)=>{
//         return total+=num
//     },0)
//     return total
// }
// console.log(totalNumbers(numbers))

//  const friendMassive2=(numbers)=>{
//      let total = 0
//      numbers.reduce((acc,num)=>{
//        return total+= num
//      },0)
//      return total
//  }
//  console.log(friendMassive2(numbers))
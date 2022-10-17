// Array.prototype.sort()
// Сортироует и ИЗМЕНЯЕТ оригинальный массив
// по умолчанию
    // сортирует по возврастанию
    // приводит элементы к строке и сортирует по UNICODE


// const numbers = [1, 9, 6, 2, 3]

// numbers.sort()
// console.log(numbers)


// const letters = ['b', 'B', 'a', 'A']

// // letters.sort()
// console.log(letters)

// comparefunction - функция кол-бэк
// Элементы массива сортируются в соответствии с ее возвращаемым значением
//  - если comparefunction(А,В) меньше 0 сортировка поставит А перед В
//  - если comparefunction(А,В) больше 0 сортировка постав В перед А
//  - если comparefunction(А,В) вернет 0 сортировка оставит А и В 
//  на неизменным по отношению к друг другу 
//  но отсортирует их по всем другим элементам

// numbers.sort((curEl,nextEl)=>{
//     return curEl - nextEl
// })

// console.log(numbers)

// const copyDesc = [...numbers].sort((a,b) => b - a)
// const copyAsc = [...numbers].sort((a,b) => a - b)
// console.log(copyDesc)
// console.log(copyAsc)

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsea', timePlayed: 280, points: 48, online: true},
// ]

// const sortByBestPlayer = [...players].sort((a,b) => a.timePlayed - b.timePlayed)
// console.log(sortByBestPlayer)

// const sortbyWorstPlayer = [...players].sort((a,b) => {
//     const result = a.name < b.name

//     console.log(a.name.charCodeAt(0))
//     if(result){
//         return -1
//     }if(!result){
//         return 1
//     }

//     return result
// })
// console.log(sortbyWorstPlayer)

// const array = [1,2,[4,[5]],[6,[7,8,[9]]]]
// console.log(array.flat())

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 18, tags: ['css', 'react'] },
//     { id: '004', likes: 6, tags: ['js', 'nodejs', 'react'] },
// ]

// const tags = tweets.map(t => t.tags).flat().reduce((acc,tag) => {
//     return {...acc,[tag]: acc[tag] ? acc[tag] + 1 : 1}
// },{})

// const flatMapTags = tweets.flatMap(t => t.tags)
// console.log(tags)
// console.log(flatMapTags)

// const numbers = [1, 5, 2, 4, 3]

// const filteredNumbers = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a,b) => a - b)

// console.log(filteredNumbers)

// // const players = [
// //     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
// //     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
// //     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
// //     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
// //     {id: 'player-5', name: 'Chelsea', timePlayed: 280, points: 48, online: true},
// // ]

// // const filteredArray = players.filter(({timePlayed}) => timePlayed).sort()
// // console.log(filteredArray)

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ]

// const filteredPlayers = players.filter(({isOnline}) => isOnline).sort((a,b) => a.rank - b.rank )

// console.log(filteredPlayers)


// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls){
//         this.class = cls

//         return this
//     },
//     toggleHovered(){
//         this.hovered = !this.hovered

//         return this
//     }
// }

// element.toggleHovered().changeClass('open')

// console.log(element)


// console.log(_.isEmpty({}))
// console.log(_.isEmpty({a:5}))

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsea', timePlayed: 280, points: 48, online: true},
// ]

// console.log(_.sumBy(players,({timePlayed}) => timePlayed))


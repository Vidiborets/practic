
// Array.prototype.forEach(callback(currentValue,index,array),thisArgs)
// Поэлементно перебирает массив
// Ничего не возвращает
// Зменяет классический for если не нужно прерывать цикл


// const numbers = [5, 10, 15, 20, 25]

// numbers.forEach(function(number, index, array){
//     // console.log(number)
//     console.log(array[index])
// })





// Array.prototype.map()
// Поэлементо перебирает оригинальный массив
// Не изменяет оригинальный массив
// Возваращает новый массив такой же длинны


// const numbers = [5, 10, 15, 20, 25]
// const dubleNumbers = numbers.map(number => {
//     return number * 2
// })

// console.log(dubleNumbers)

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsea', timePlayed: 80, points: 48, online: true},
// ]

// const playerNames = players.map(player => {
//     return player.name
// })

// console.log(playerNames)

// const playerId = players.map(({name,online}) => ({name,online}))
// console.log(playerId)

// const upldatePlayers = players.map(player =>{
//     return {
//         ...player,
//         points: player.points * 1.1,
//     }
// })

// console.log(upldatePlayers)

// const playerIdUpdate = 'player-3'

// const upldatePlayersById = players.map(player =>{
//     console.log(player.id)
//     if (playerIdUpdate === player.id) {
//         return{
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }

//     return player
// })
// console.log(upldatePlayersById)

// const upldatePlayersById = players.map((player) =>
//     playerIdUpdate === player.id ? {
//         ...player,
//         timePlayed: player.timePlayed + 100
//     } : player
// )
// console.log(upldatePlayersById)



// Array.prototype.filter()
// Поэлементно перебирает оригинальный масив
// Возвращает новый массив (с элементами или пустой)
// Добавляет в возращаемый массив элементы которые удовлетворяют условию callback
// Если callback вернул true елемент добавляется в возращаемый массив
// Если callback вернул false елемент Не идобавляется в возращаемый масив и он будет пустой

// const numbers = [5, 10, 15, 20, 25]

// const filteredElements = numbers.filter(number =>{
//     return number > 15
// })

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsea', timePlayed: 280, points: 48, online: true},
// ]

// const filteredOnline = players.filter(({online}) => online)
// const filteredOffline = players.filter(({online}) => !online)

// console.log(filteredOnline)
// console.log(filteredOffline)

// const filteredHardCore = players.filter(player => player.timePlayed > 250)

// console.log(filteredHardCore)


// Array.prototype.find()
// Поэлементно перебирает массив
// Возвращает первый элемент который удовлетворяет (возвращает обьект) условию если нет вернет unbefined 


// const numbers = [5, 10, 15, 20, 25]

// const number = numbers.find(number => number === 10)
// console.log(number)

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsea', timePlayed: 280, points: 48, online: true},
// ]

// const idPlayer = 'player-3'

// const playerIdFind = players.find(({id}) => id === idPlayer)
// console.log(playerIdFind)

// const findPlayerById = (players, playeid) => players.find(({id}) => id === playeid)

// console.log(findPlayerById(players,'player-4'))



// Array.prototype.every()
// Поэлементно перебирает массив 
// Возвращает true или false если все элементы удовлетворяют условию


// const numbers = [5, 10, 15, 20, 25]

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsea', timePlayed: 280, points: 48, online: true},
// ]

// const allOnline = players.every(({online}) => online)

// console.log(allOnline)

// Array.prototype.some()
// Поэлементно перебирает масив
// Возвращает true или false если хот ябы один элемент удовлетворяет условию 


// const isAnyOnline = players.some(({online}) => online)
// console.log(isAnyOnline)


// Array.prototype.reduce()




// const numbers = [5, 10, 15, 20, 25]
// const total = numbers.reduce((acc, number) => acc + number,0)
// console.log(total)


// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150
// }

// const salaryTotal = Object.values(salary).reduce((acc,item ) => acc + item,0)

// console.log(salaryTotal)

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     {id: 'player-5', name: 'Chelsea', timePlayed: 280, points: 48, online: true},
// ]

// const totalTimePlayed = players.reduce((totalTime,{timePlayed})=> timePlayed + totalTime ,0)

// console.log(totalTimePlayed)


// const cart = [
//     {label: 'Apples', price: 100, qiantity: 2},
//     {label: 'Bananas', price: 120, qiantity: 3},
//     {label: 'Apples', price: 70, qiantity: 4}
// ]

// const totalSalary = cart.reduce((totalPrice,{ price,qiantity }) => 
// totalPrice + price * qiantity,0)

// console.log(totalSalary)

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 18, tags: ['css', 'react'] },
//     { id: '004', likes: 6, tags: ['js', 'nodejs', 'react'] },
// ]

// const tweetsTags = tweets.reduce(( allTags,tweet ) => {
//     // allTags.push(...tweet.tags)

//     // return allTags
//     return [...allTags,...tweet.tags]
// }, [])

// console.log(tweetsTags)

// const tagsFilter = tweetsTags.reduce((acc,tag)=>{
//     // if(acc[tag]){
//     //     acc[tag] += 1
//     //     return acc
//     // }
//     //     acc[tag] = 1

//     //     return acc


//     // if(acc[tag]){
//     //     return{
//     //         ...acc,
//     //         [tag]: acc.tag +1
//     //     }
        
//     // }
//     // return {
//     //     ...acc,
//     //     [tag]: acc = 1
//     // }

//     return { ...acc,[tag]: acc[tag] ? acc[tag] + 1 : 1 }
// },{})

// console.log(tagsFilter)
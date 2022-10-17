// const playlist = {
//     name:'Мой новый плейлист',
//     rating:5,
//     tracks:['трек-1','трек-2','трек-3'],
//     trackCount: 3,
// }
// const username = 'Mango'
// const email = 'mango@gmail.com'

// const signupData = {
//     username,
//     email
// }
// console.log(signupData)
// {/* <input name='color' value='totmato' > */}
// const inputName = 'color'
// const inputValue = 'tomato'

// const colorPickerData = {
//     [inputName]:inputValue,
// }
// console.log(colorPickerData)

// метод обьекта
// const playlist = {
//     name:'Мой новый плейлист',
//     rating:5,
//     tracks:['трек-1','трек-2','трек-3'],
//     getname(a) {
//         console.log(`Ага єто getname ${a}`)
//     },
//     changeName(newName){
//         this.name = newName
//     },
//     addTrack(newTrack){
//         this.tracks.push(newTrack)
//     },
//     updateRating(newRating){
//         this.rating = newRating
//     },
//     getTrackCount(){
//         return this.tracks.length
//     }
// }

// playlist.changeName('Мой плейліст')
// playlist.addTrack('Трек-4')
// playlist.updateRating(6)
// playlist.getTrackCount()

// const item = document.querySelector('.item')

// item.textContent = playlist.name

// console.log(playlist.getTrackCount())
// console.log(playlist)

// const feedback = {
//     good:5,
//     neutral:10,
//     bad:3,
// }

// const keys = Object.keys(feedback)
// console.log(keys)
// let totalFeedback = 0;

// for(const key of keys){
//     console.log(key)
//     console.log(feedback[key])
//     totalFeedback += feedback[key]
// }
// console.log(totalFeedback)

// const values = Object.values(feedback)
// for(const value of values){
//     console.log(value)

//     totalFeedback += value
// }

// console.log(totalFeedback)

// const friends = [
//     {name:'Mango',online: false},
//     {name:'Kiwi',online: true},
//     {name:'Poly',online: true},
//     {name:'Ajax',online: false},
// ]

// for(const friend of friends){
//     console.log(friend.name)
//     friend.newName = 555
// }

// console.table(friends)

// const findFriendByName = function(allFriends,name){
//     for (const friend of allFriends) {
//         if(friend.name === name){
//             return friend
//         }
//     }
//     return `Друга с именем ${name} нет`
// }

// console.log(findFriendByName(friends,'Poly'))
// console.log(findFriendByName(friends,'Chelsy'))
// console.log(findFriendByName(friends,'Ajax'))

// const getAllName = function (allFriends){
//     const allName = []
//     // for (const friend of allFriends) {
//     //     allName.push(friend.name)
//     // }
//     allFriends.map(friend => {
//         allName.push(friend.name)
//     })
//    return allName
// }

// console.log(getAllName(friends))

// const getOnlineFriends = function (allFriends){
//     const onlineFriends = []
//     for (const friend of allFriends) {
//         // if (friend.online) {
//         //     onlineFriends.push(friend)
//         // }
//         // friend.online ? onlineFriends.push(friend):false
//     }
//     return onlineFriends
// }
// console.log(getOnlineFriends(friends))

// const getOfllineFriends = function(allFriends){
//     const oflineFriends = []

//     for (const friend of allFriends) {
//         friend.online === false ? oflineFriends.push(friend) : false
//     }
//     return oflineFriends
// }
// console.log(getOfllineFriends(friends))

// const getFriendsByStatus = function (allFriends) {
//     const stats = {
//         online: [],
//         ofline : []
//     }

//     for (const friend of allFriends) {
//         if(friend.online){
//             stats.online.push(friend)
//             continue
//         } 
//             stats.ofline.push(friend)
//     }
//     return stats 
// }

// console.log(getFriendsByStatus(friends))

// { name: '🍓', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍎', price: 110 }

// const cart = {
//     items:[],
//     getItems(){
//         return this.items;
//     },
//     add(product){
//         const { items } = this

//         for(const item of items){
//             if(item.name === product.name){
//                 item.quantity += 1
//                 return
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }

//         this.items.push(newProduct)
//     },
//     remove(productName){
//         const { items } = this

//         for (let i = 0; i < items.length; i++) {
//             const { name } = items[i]
//             if(productName === name){
//                 items.splice( i, 1 )
//             }
//         }
//     },
//     clear(){
//         return this.items = []
//     },
//     countTotalPrice(){
//         let totalPrice = 0
//         const { items } = this
//             for(const { price,quantity } of items){
//                 totalPrice += price * quantity
//             }
//         return totalPrice
//     },
//     increaseQuntitty(productName){
//         for (const item of this.items) {
//             if(item.name === productName){
//                 item.quantity += 1
//             }
//         }
//     },
//     descreaseQuantity(productName){
//         const { items } = this
//         for (const item of items) {
            
//             if(item.name === productName){
//                 item.quantity -= 1
//             }
//         }
//     },
// }

// cart.add({ name: '🍓', price: 50 })
// cart.add({ name: '🍓', price: 50 })
// cart.add({ name: '🍓', price: 50 })
// cart.add({ name: '🍇', price: 70 })
// cart.add({ name: '🍋', price: 60 })
// cart.add({ name: '🍋', price: 60 })
// cart.add({ name: '🍎', price: 110 })
// // cart.remove('🍋')
// // cart.remove('🍓')
// cart.increaseQuntitty('🍎')
// cart.descreaseQuantity('🍎')
// console.log(cart.countTotalPrice())


// console.table(cart.getItems())





// const temps = [18 ,14, 12, 21, 17, 29, 24]
// const numbers = [...temps]
// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))
// console.log(numbers)

// const lastWeekTemps = [1,2,3]
// const currentTemps = [4,5,6]
// const nextWeekTemps = [7,8,9]

// const allTemps = [...lastWeekTemps,...currentTemps,...nextWeekTemps]

// console.log(allTemps)

// console.log(Math.min(...allTemps))

// const a = { x: 1, y: 2 }
// const b = { x: 0, z: 3 }

// const c = {
//     ...a,
//     ...b,
// }

// console.log(c)

// const defaultSettings = {
//     theme: 'light',
//     showNotification: false,
//     hideSideBar: false,
// }

// const userSettings = {
//     showNotification: true,
//     hideSideBar: true
// }

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// }

// console.log(finalSettings)

// const playlist = {
//     name:'Мой новый плейлист',
//     rating:5,
//     tracks:['трек-1','трек-2','трек-3'],
//     trackCount: 3,
// }

// const { name:userName,rating,tracks,trackCount } = playlist

// console.log(
//     userName,
//     rating,
//     tracks,
//     trackCount,
//     author = {}
// )


// const profile = {
//     name: 'Jack',
//     tag: 'jgluke',
//     location: 'Ocho',
//     avatar: 'https://biogrf.com/wp-content/uploads/2020/01/screenshot_1-3.jpg',
//     stats:{
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     }
// }

// const { name , tag , location, ...restProps } = profile

// console.log(restProps)

// const { 
//     name,
//     tag, 
//     location, 
//     avatar, 
//     stats : { 
//         followers, 
//         views, 
//         likes
//     } 
//  } = profile

// console.log( name, tag, location, avatar )

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }

// // const ratings = Object.values(authors)
// // console.log(Math.max(...ratings))

// const ratings = Object.keys(authors)

// for (const key of ratings) {
//     console.log(key)
//     console.log(authors[key])
// }

// const showProfileInfo = function (userProfile){
//     const { name, tag, location, avatar,
//         stats :{ followers, views, likes }
//     } = userProfile

//     return `<div class='container'>
//     <img class='image' src="${avatar}" alt="${name}">
//     <p>${name}<span>@${tag}</span></p>
//     <p>Location: ${location}</p>
//     <ul>
//         <li>Followers: ${followers}</li>
//         <li>Views: ${views}</li>
//         <li>Likes: ${likes}</li>
//     </ul>
// </div>`
    
// }

// const markUp = showProfileInfo(profile)

// document.body.insertAdjacentHTML('afterbegin' , markUp)


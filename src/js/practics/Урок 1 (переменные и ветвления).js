function sum(...num){
    const total = num.reduce((acc,num)=>{ 
        return num + acc },0)
    return total
  }
  
  console.log(sum(1,2,3))
let elementHeight = '200.74px'
elementHeight = Number.parseFloat(elementHeight)
console.log(elementHeight)

let salaryEl = 1300.167242
salary = Number(salary.toFixed(2))
console.log(salary)

console.log(Math)

const base = 2
const power = 5
const result = Math.pow(base,power)
console.log(result)

console.log(base ** power)

// let base = prompt('Давай чсило')
// base = Number(base)

// let power = prompt('Давай степень')
// power = Number(power)
// console.log(power)

// const result = base ** power
// console.log(result)

// console.log(Math.random())

// const result = Math.round(Math.random() * (50-30) + 30)
// console.log(result)

const colors = ['tomato','teal','orange','deeplink']
const max = colors.length -1
const min = 0

const index = Math.round(Math.random() * (max - min) + min)
const color = colors[index]
console.log(color)
document.body.style.backgroundColor = color

function changeColor(colors){
    console.log(colors)
    colors.map(color => console.log(color))
}
changeColor(colors)

const messageEl = 'В этой строке 26 символов'

console.log(messageEl.length)
let brand = 'samSUng'


brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase()
console.log(brand)

const x1 = 10
const x2 = 30
const number = 50 

console.log(`Число ${number} входит в отрезок до ${x1} `,number < x1)
console.log(`Число ${number} попадает в отрезок после ${x2}`,number > x2)

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd

console.log('Можно открыть чат?',canOpenChat)



const isAccess = (name)=>{
    if (name === 'pro') {
       return true
    }else{
        return false
    } 
}

console.log('Есть доступ к контенту',isAccess(subscription))


let x = [...'abc']
y = x.map(x=>{
  x+1
})

console.log(y)

const sub = 'pro' ;

const caAccessContent = sub === 'pro' ?? sub === 'vip'
console.log('Есть ли доступ к контенту',caAccessContent)

const balance = 1000
let message;

if(balance > 0){
    message = 'Позитивный баланс'
}else{
    message = 'Негативный баланс'
}

const message1 = balance > 0 ? 'Позитивный баланс' : 'Негативный баланс';


console.log(message1)

const salary = 1

if(salary < 500){
    console.log('Уровень 1')
}else if(salary > 500 && salary < 1500){
    console.log('Уровень 2')
}else if(salary > 1500 && salary < 3000){
    console.log('Уровень 3')
} else{
    console.log('Уровень 4')
};

const a = 5;
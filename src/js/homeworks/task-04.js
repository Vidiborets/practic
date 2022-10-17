const btnDecrement = document.querySelector('#counter button[data-action="decrement"]')
const btnIncrement = document.querySelector('#counter button[data-action="increment"]')
const value = document.querySelector('#value')

const counterValue = {
    value: 0,
    increment(){
        this.value += 1
    },
    decrement(){
        this.value -= 1
    }
}


btnDecrement.addEventListener('click',()=>{
    counterValue.decrement()

    value.textContent = counterValue.value
})

btnIncrement.addEventListener('click',()=>{
    counterValue.increment()

    value.textContent = counterValue.value
})
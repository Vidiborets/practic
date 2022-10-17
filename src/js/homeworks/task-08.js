const inputEl = document.querySelector('#controls [type="number"]')
const createMarkUp = document.querySelector('#controls [data-action="render"]')
const removeMarkUp = document.querySelector('#controls [data-action="destroy"]')
const boxesEl = document.querySelector('#boxes')

let count = 30

const createBoxes=(amount) => {
    const countEl = amount.target.value
    const createEl = document.createElement(`div`)
    

    for (let i = 0; i < countEl; i++) {
        createEl.classList.add('boxes')
        createEl.style.backgroundColor = `rgb(
            ${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)})
        `
        createEl.style.width = `${count}px`
        createEl.style.height = `${count}px`
        count += 10
    }
  

    createMarkUp.addEventListener('click',()=>{
        boxesEl.append(createEl)
        boxesEl.style.display = 'flex'
        boxesEl.style.marginTop = '20px'
        boxesEl.style.marginLeft = '20px'
    })

}
inputEl.addEventListener('input',createBoxes)

removeMarkUp.addEventListener('click',()=>{
    const boxElAfterCreate = boxesEl.querySelectorAll('#boxes div')

    boxElAfterCreate.innerHTML = ''
    boxesEl.innerHTML = ''
    inputEl.value = ''
    count = 30
})
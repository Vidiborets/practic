const element = document.querySelector('#categories')
console.log(`В списке ${element.children.length} категории.`)
const elementItem = element.querySelectorAll('.item')

elementItem.forEach(el=>{
    console.log(`Категория: ${el.children[0].textContent}`)
    console.log(`Количество элементов: ${el.children[1].children.length}`)
})
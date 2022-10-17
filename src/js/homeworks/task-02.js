
const listItemAdd = document.querySelector('#ingredients')

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const markUpElem = ingredients => {

  return ingredients.map(el => {
    console.log(el)
    const elemenAdd = document.createElement('li')
    elemenAdd.textContent = el
    return elemenAdd
  }) 
  
}

listItemAdd.append(...markUpElem(ingredients))
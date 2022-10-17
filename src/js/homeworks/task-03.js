import images from '../../data/images'

console.log(images)

const itemAdd = document.querySelector('#gallery')
console.log(images)

const murkUpImage = images => {

  return images.map(({url,alt}) => {
    return `
    <li class='item_image'>
      <img class='item-image__form' src=${url} alt=${alt}>
    </li>
    `
  })
  
}
const elemenAdd = murkUpImage(images).join('')

itemAdd.insertAdjacentHTML('beforeend',elemenAdd)

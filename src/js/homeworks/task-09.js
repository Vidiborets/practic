import gallery from '../../data/gallery'


const boxGallery = document.querySelector('.js-gallery')
const openModal = document.querySelector('div.lightbox')
const closeModal = document.querySelector('button[data-action="close-lightbox"]')
const backDrop = document.querySelector('div.lightbox__overlay');
const imageEl = document.querySelector('.lightbox__image')

const createMarkUp = (gallery) => {
    return gallery.map(({original,preview,description}) => {
        return `
            <li class="gallery__item">
                <a
                class="gallery__link"
                href=${original}
                >
                    <img
                        class="gallery__image"
                        src=${preview}
                        data-source=${original}
                        alt=${description}
                    />
                </a>
        </li>
    `
    }).join('')
}

boxGallery.insertAdjacentHTML('afterbegin',createMarkUp(gallery)) 

boxGallery.addEventListener('click',onOpenModal)
closeModal.addEventListener('click',onCloseModal)
backDrop.addEventListener('click',onBackdropClick)

function onOpenModal(event) {
    event.preventDefault()
    
    window.addEventListener('keydown',onEscapeClick)

    gallery.forEach(item =>{
        if(event.target.getAttribute('src') === item.preview){
            imageEl.setAttribute('src',item.original)
            imageEl.setAttribute('alt',item.description)
        }
    })
 
    openModal.classList.add('is-open')
    
}

function onCloseModal() {
    window.removeEventListener('keydown',onEscapeClick)
    openModal.classList.remove('is-open')
    imageEl.src = ''
}

function onBackdropClick(event) {
    if(event.currentTarget === event.target){
        onCloseModal()
    }
}

function onEscapeClick(event) {
  if (event.code === 'Escape') {
      onCloseModal()
  }
  if (event.code === 'ArrowRight') {
      nextPictures()
  }
  if(event.code === 'ArrowLeft'){
    privioslyPictures()
  }
    
}


function nextPictures() {
    for (let i = 0; i < gallery.length - 1; i+=1) {
        if(imageEl.getAttribute('src') === gallery[i].original){
            imageEl.setAttribute('src',gallery[i + 1].original)
            imageEl.setAttribute('alt',gallery[i + 1].description)
            return
        }
       
    }
   
}


function privioslyPictures() {
    for (let i = 0; i < gallery.length - 1; i+=1) {
        if(imageEl.getAttribute('src') === gallery[i].original){
            imageEl.setAttribute('src',gallery[i - 1].original)
            imageEl.setAttribute('alt',gallery[i - 1].description)
            return
        
        } 
        
    }
}




// const escPress = (e) => {
//     if (e.code === 'Escape') {
//         console.log('Снять слушатель')
//         closeModal()
//     }
// }


// const closeModal = () => {

//     const removeEvent = () =>{
//         window.removeEventListener('keydown',escPress)
//         isOpenModal.classList.remove('is-open')
//         imageSrcModal.src = ''
//     }

//     buttonClose.addEventListener('click',removeEvent)

//     document.addEventListener('keydown',(event)=>{
//         if(event.key === 'ArrowRight'){
//             nextPicture(event)
//         }else if(event.key === 'ArrowLeft'){
//             previoslyPicture()
//         }else{removeEvent()}
//     })

//     clickForOvervay.addEventListener('click',removeEvent)

// }


// const hadleCkickEventOpen = (event) => {
//     const sourceElementPictures = event.target.dataset.source

//     event.preventDefault()
//     isOpenModal.classList.add('is-open')

//     imageSrcModal.src = `${sourceElementPictures}`

//     closeModal()
// }

// const nextPicture = (event) => {
//     console.log('Следущая страница')
//     const imageAllEl = document.querySelectorAll('.gallery__link')
//     const imageEl = document.querySelector('.gallery__link')
//     console.dir(imageEl)
    
//     imageAllEl.forEach(function addElem(item,index,array) {
//         console.log(item)
//         console.log(index)
//         console.log(array)
//         if(item.href === imageEl.href){
//            return     
//         }else{
//             item.h
//         }
//     })
// }

// const previoslyPicture = (event) =>{
//     console.log('предыдущая страница')
// }


// boxToAddEl.addEventListener('click',hadleCkickEventOpen)

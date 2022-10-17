const inputElement = document.querySelector('#validation-input')


const changeFocus = ()=>{
    inputElement.classList.forEach(elem=>{
        
        inputElement.classList.remove(elem)
    })
   if (inputElement.value.length === parseInt(inputElement.dataset.length,10)) {
       inputElement.classList.add('valid')
   }else{
       inputElement.classList.add('invalid')
   }
}
inputElement.addEventListener('blur',changeFocus)
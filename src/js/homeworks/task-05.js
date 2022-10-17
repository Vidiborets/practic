const inputEl = document.querySelector('#name-input')
const elementCopy = document.querySelector('#name-output')


const inputLesener = (value)=>{
    elementCopy.textContent = value.currentTarget.value || 'незнакомец'
}


inputEl.addEventListener('input',inputLesener)
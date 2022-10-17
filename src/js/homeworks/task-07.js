const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


const changeSizeEl = (event) => {
    const text = event.target.value;
    textEl.style.fontSize = `${text}%`;
}

inputEl.addEventListener('input',changeSizeEl)
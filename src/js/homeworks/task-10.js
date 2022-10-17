const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const body = document.querySelector('body')
const toogleEl = document.querySelector('#theme-switch-toggle')

toogleEl.addEventListener('change',changeTheme)

savedTheme()

function changeTheme(event) {
    event.target.checked ? changeDarkTheme() : changeLightTheme()
}

function changeDarkTheme() {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    localStorage.setItem('changeTheme',Theme.DARK)
    toogleEl.checked = true
}

function changeLightTheme() {
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
    localStorage.setItem('changeTheme',Theme.LIGHT)
    toogleEl.checked = false
}

function savedTheme() {
    const savedThemeReload = localStorage.getItem('changeTheme')
    if (savedThemeReload === Theme.DARK) {
        changeDarkTheme()
        toogleEl.checked = true
    }
    if(savedThemeReload === Theme.LIGHT){
        changeLightTheme()
        toogleEl.checked = false
    }
}
import menuCards from '../../data/menu.json'
import cardsPickerHbs from '../../template/menu-picker.hbs'

const markUpEl = document.querySelector('.js-menu')

const markUp = cardsPickerHbs(menuCards)

markUpEl.insertAdjacentHTML('beforeend',markUp)
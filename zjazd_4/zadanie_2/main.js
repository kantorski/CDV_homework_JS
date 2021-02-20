let $acceptBtn // Button "Accept"
let $cancelBtn // Button "Cancel"
let $boxInfo // Information abaout cookies - box

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () =>{
    $acceptBtn = document.querySelector('.accept-btn')
    $cancelBtn = document.querySelector('.cancel-btn')
    $boxInfo = document.querySelector('.info')
}

const prepareDOMEvents = () => {
    window.addEventListener('load', checkCookie)
    $acceptBtn.addEventListener('click', acceptCookie)
    $cancelBtn.addEventListener('click', cancelCookie)
}

// set display "none" on box
const acceptCookie = () => {
    $boxInfo.style.display = 'none'
    setCookie()
}

// redirect to other website
const cancelCookie = ()=> {
    location.href = "https://www.google.pl/"
}

// set 30 days in cookies
const setCookie = () => {
    const setTime = `max-age=${30*24*60*60*1000}`
    document.cookie = setTime
}

// check cookies, if cookies isn't empty - show alert, otherwise - show box
const checkCookie = () => {
    const decodedCookie = decodeURIComponent(document.cookie)
    if (decodedCookie != ''){
        alert('Witaj ponownie na naszej stronie !')
    } else{
        $boxInfo.style.display = 'inline-block'
    }
}


document.addEventListener('DOMContentLoaded', main)
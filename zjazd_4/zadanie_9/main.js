let $searchInput
let $serachBtn
let $login
let $name
let $img
let $lastPersonList
let $persons
let $tempNumber = 0
let personsList = []

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () =>{
    $searchInput = document.querySelector('#search-txt')
    $serachBtn = document.querySelector('.search-btn')
    $login = document.querySelector('#person-login')
    $name = document.querySelector('#person-name')
    $img = document.querySelector('#person-img')
    $lastPersonList = document.querySelector('.last-search-list')
    $persons = document.getElementsByClassName('persons')
}

const prepareDOMEvents = () =>{
    $serachBtn.addEventListener('click', search)
    $lastPersonList.addEventListener('click', checkClick)
}

const search = () =>{
    fetch(`https://api.github.com/users/${$searchInput.value}`)
	.then(response =>  response.json())
	.then(data => {
        if (data.name === null){
            data.name = 'Anonymus'
            $name.innerText = data.name
        } else{
            $name.innerText = data.name
        }
        $login.innerText = data.login
        $img.src = data.avatar_url

        sessionStorage.setItem('login', data.login)
        sessionStorage.setItem('name', data.name)
        sessionStorage.setItem('img', data.avatar_url)

        if (personsList.includes($login.innerText) == true){

        } else{
            personsList.push($login.innerText)
            lastSearch()
        }
    })
	.catch( error => console.log('ERROR'))
}


const lastSearch = () =>{
    $tempNumber++
    let lastPerson = document.createElement('p')
    lastPerson.innerText = sessionStorage.getItem('login')
    lastPerson.setAttribute('id', `last${$tempNumber}`)
    lastPerson.setAttribute('class', 'persons')
    sessionStorage.setItem(`last${$tempNumber}-login`, sessionStorage.getItem('login'))
    sessionStorage.setItem(`last${$tempNumber}-name`, sessionStorage.getItem('name'))
    sessionStorage.setItem(`last${$tempNumber}-img`, sessionStorage.getItem('img'))

    if (sessionStorage.getItem('last1-login') === undefined){

    } else{
        $lastPersonList.appendChild(lastPerson)
    }


}

const checkClick = (event) =>{
    let closest = event.target.closest('p')
    let attribute = closest.getAttribute('id')
    $name.innerText = sessionStorage.getItem(`${attribute}-name`)
    $login.innerText = sessionStorage.getItem(`${attribute}-login`)
    $img.src = sessionStorage.getItem(`${attribute}-img`)
}


document.addEventListener('DOMContentLoaded', main)



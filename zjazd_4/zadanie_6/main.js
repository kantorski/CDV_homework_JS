let $homeBtn = document.querySelector('.home-btn')
let $aboutMeBtn = document.querySelector('.about-me-btn')
let $contactBtn = document.querySelector('.contact-btn')
let $home = document.querySelector('#home')
let $aboutMe = document.querySelector('#about-me')
let $contact = document.querySelector('#contact')



$homeBtn.addEventListener('click', () =>{
    $home.style.display = 'flex'
    $aboutMe.style.display = 'none'
    $contact.style.display = 'none'
})

$aboutMeBtn.addEventListener('click', () =>{
    $home.style.display = 'none'
    $aboutMe.style.display = 'flex'
    $contact.style.display = 'none'
})

$contactBtn.addEventListener('click', () =>{
    $home.style.display = 'none'
    $aboutMe.style.display = 'none'
    $contact.style.display = 'flex'
})

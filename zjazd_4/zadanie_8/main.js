const $upload = document.querySelector('#upload')
const $audio = document.querySelector('#audio')
const $audioName = document.querySelector('.audio-name')
const $audioList = document.querySelector('.audio-list')
let $idNumber = 0



// FUNCTION
const addAudio = () =>{
    $idNumber++
    let newAudio = document.createElement('p')
    newAudio.innerText = localStorage.getItem('fileName')
    newAudio.setAttribute('id', `audio${$idNumber}`)
    localStorage.setItem(`audio${$idNumber}`, localStorage.getItem('url'))
    $audioList.appendChild(newAudio)
}

const checkClick = (event) =>{
    let closest = event.target.closest('p')
    let attribute = closest.getAttribute('id')
    $audio.src = localStorage.getItem(attribute)
    $audioName.innerText = closest.innerText
}

const selectAudio = (event) =>{
    let file = event.target.files[0];
    let url = URL.createObjectURL(file);

    $audioName.innerText = file.name
    $audio.src = url

    localStorage.setItem('url', $audio.src)
    localStorage.setItem('fileName', file.name )
    
    addAudio()
}

// LISTENER
$upload.addEventListener('change', selectAudio)
$audioList.addEventListener('click', checkClick)

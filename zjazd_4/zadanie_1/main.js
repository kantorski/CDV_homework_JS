let $brand // input - car brand
let $model // input - car model
let $year // input - year of production
let $fuel // input - type of fuel
let $btnSend // button "send"
let $newBrand // paragraph - Brand of car
let $newModel // paragraph - Car model 
let $newColor // paragraph - Car color
let $newYear // paragraph - Year of production
let $newFuel // paragraph - Fuel


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () =>{
$brand = document.querySelector('#brand')
$model = document.querySelector('#model')
$color = document.querySelector('#color')
$year = document.querySelector('#year')
$fuel = document.querySelector('#fuel')
$btnSend = document.querySelector('#btn-send')
$newBrand = document.querySelector('#new-brand')
$newModel = document.querySelector('#new-model')
$newColor = document.querySelector('#new-color')
$newYear = document.querySelector('#new-year')
$newFuel = document.querySelector('#new-fuel')
}

const prepareDOMEvents = () =>{
    window.addEventListener('load', loadData)
    $btnSend.addEventListener('click', newTab)
}


// save information from inputs
const setData = () =>{
    sessionStorage.setItem('brand', `${$brand.value}`);
    sessionStorage.setItem('model', `${$model.value}`);
    sessionStorage.setItem('color', `${$color.value}`)
    sessionStorage.setItem('year', `${$year.value}`)
    sessionStorage.setItem('fuel', `${$fuel.value}`)
}

// load data to paragraph
const loadData = () =>{
    $newBrand.innerText = sessionStorage.getItem('brand')
    $newModel.innerText = sessionStorage.getItem('model')
    $newColor.innerText = sessionStorage.getItem('color')
    $newYear.innerText = sessionStorage.getItem('year')
    $newFuel.innerText = sessionStorage.getItem('fuel')
}

// open new tab in browser
const newTab = () =>{
    setData()
    window.open('http://127.0.0.1:5500/zadanie_1/tab.html')
}


document.addEventListener('DOMContentLoaded', main)
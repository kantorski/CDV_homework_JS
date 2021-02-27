// set scroll postion
const scrollPosition = () =>{
    let scroll = this.scrollY;
    return scroll
}

// make random color in rgb
const randomColor = () =>{
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return color
}

// set background color
const setColor = () =>{
    scroll = scrollPosition()
    color = randomColor()
    document.body.style.backgroundColor = `${color}`
}

// show random background color
window.addEventListener("scroll", setColor)





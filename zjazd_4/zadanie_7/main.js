let $upload = document.querySelector('#upload')
let $gallery = document.querySelector('.gallery')


$upload.addEventListener('change', function(event){
    let file = event.target.files[0];
    let url = URL.createObjectURL(file);
    let temp = document.createElement('img')
    temp.src = url
    $gallery.appendChild(temp)
})


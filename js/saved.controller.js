'use strict'

function renderImg() {
    var dataURL = loadFromStorage('canvas')
    if (!dataURL) return
    dataURL.forEach(img => {
        var newImg = new Image();
        newImg.src = img.url
        newImg.addEventListener('click', getImgToEdit)
        document.querySelector('.saved-container').appendChild(newImg);
    })
}

function getImgToEdit() {
    console.log('hello')
}
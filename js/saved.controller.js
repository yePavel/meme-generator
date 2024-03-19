'use strict'

function renderImg() {
    var dataURL = loadFromStorage('canvas')
    console.log('dataURL:', dataURL)
    if (!dataURL) return
    dataURL.forEach((img, idx) => {
        var newImg = new Image();
        newImg.src = img.url
        newImg.addEventListener('click', getImgToEdit)
        document.querySelector('.saved-container').appendChild(newImg);
    })
}

function getImgToEdit() {
    console.log('hello')
}
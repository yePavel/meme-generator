'use strict'

function renderImg() {
    var dataURL = loadFromStorage('canvas')
    console.log('dataURL:', dataURL)
    if (!dataURL) return
    dataURL.forEach(img => {
        var newImg = new Image();
        newImg.src = img.url
        document.querySelector('.saved-container').appendChild(newImg);
    })
}
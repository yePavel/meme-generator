'use strict'

function renderImg() {
    var dataStorage = loadFromStorage('canvas')
    if (!dataStorage) return
    dataStorage.forEach(img => {
        var newImg = new Image();
        gMeme = img
        newImg.src = img.url
        document.querySelector('.saved-container').appendChild(newImg);
    })
}

function getImgFromSaved(evt) {
    onImgSelect(evt.currentTarget.myParam)
}


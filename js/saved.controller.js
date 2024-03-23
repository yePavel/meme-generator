'use strict'

function renderImg() {
    var dataStorage = loadFromStorage('canvas')
    if (!dataStorage) return
    dataStorage.forEach(img => {
        var newImg = new Image();
        newImg.addEventListener('click', getImgFromSaved)
        newImg.myParam = img.id
        newImg.src = img.imgSavedURL
        document.querySelector('.saved-container').appendChild(newImg);
    })
}

function getImgFromSaved(evt) {
    const dataStorage = loadFromStorage('canvas')
    const currImg = dataStorage.find(img => img.id === evt.currentTarget.myParam)
    gMeme = currImg
    gMeme.selectedLineIdx = 0
    gMeme.selectedImgId = 0
    switchDisplay('editor')
    renderMeme()
}


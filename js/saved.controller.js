'use strict'

function renderImg() {
    var dataStorage = loadFromStorage('canvas')
    if (!dataStorage) return
    dataStorage.forEach(img => {
        var newImg = new Image();
        newImg.src = img.url
        // newImg.addEventListener('click', getImgToEdit)
        document.querySelector('.saved-container').appendChild(newImg);
    })
}


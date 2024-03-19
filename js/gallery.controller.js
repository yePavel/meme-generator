'use strict'

function renderGallery() {
    const imgs = getImgs()
    const elGallery = document.querySelector('.gallery-container')
    const strHtml = imgs.map(img =>
        `<img onclick="onImgSelect(${img.id})" class="img" src="${img.url}">`
    )
    elGallery.innerHTML = strHtml.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    switchDisplay('editor')
    renderMeme()
}


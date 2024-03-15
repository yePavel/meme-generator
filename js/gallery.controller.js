'use strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery-img')
    const strHtml = gImgs.map(img =>
        `<img onclick="onImgSelect(${img.id})" class="img" src="${img.url}">`
    )
    elGallery.innerHTML = strHtml.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)

    renderMeme()
}


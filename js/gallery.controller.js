'use strict'

function renderGallery(clickedWord) {
    const imgs = getImgs(clickedWord)
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

function renderClickWords() {
    var words = sortDataListWords()
    console.log('words:', words)
    const elSearch = document.querySelector('.search-by-click')
    const strHtml = words.map((word) =>
        `<span onclick="onWordClick('${word.name}')">
        <font size="${word.clicks}" face="verdana" color="${word.color}">
        ${word.name}
        </font>
        </span>`
    )
    elSearch.innerHTML = strHtml.join('')
}

'use strict'

let gCanvas
let gCtx

function onInit() {
    renderGallery()
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    gMeme = getMeme()
    addListeners()
    renderImg()
}

function switchDisplay(page) {
    const elMainSearch = document.querySelector('.main-search')
    const elGallery = document.querySelector('.gallery-container')
    const elEditor = document.querySelector('.editor-container')
    const elCanvas = document.querySelector('canvas')
    const elEditorSetup = document.querySelector('.editor-setup')
    const elSaved = document.querySelector('.saved-container')

    if (page === 'editor') {
        elSaved.style.display = 'none'
        elMainSearch.style.display = 'none'
        elGallery.style.display = 'none'
        elEditor.style.display = 'grid'
        elCanvas.style.display = 'block'
        elEditorSetup.style.display = 'grid'
    }
    else if (page === 'saved') {
        elMainSearch.style.display = 'none'
        elGallery.style.display = 'none'
        elEditor.style.display = 'none'
        elCanvas.style.display = 'none'
        elEditorSetup.style.display = 'none'
        elSaved.style.display = 'grid'
    }
    else if (page === 'gallery') {
        elMainSearch.style.display = 'grid'
        elGallery.style.display = 'grid'
        elEditor.style.display = 'none'
        elCanvas.style.display = 'none'
        elEditorSetup.style.display = 'none'
        elSaved.style.display = 'none'
    }
}

// function getSearchWords() {
//     const elSearchByClick = document.querySelector('search-by-click')
//     SEARCH_WORD.forEach
// }

'use strict'

let gCanvas
let gCtx

function onInit() {
    renderGallery()
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    gMeme = getMeme()
    addListeners()
}

function displayEditor() {
    const elGallery = document.querySelector('.gallery-container')
    const elEditor = document.querySelector('.editor-container')
    const elCanvas = document.querySelector('canvas')
    const elEditorSetup = document.querySelector('.editor-setup')
    elGallery.style.display = 'none'
    elEditor.style.display = 'grid'
    elCanvas.style.display = 'block'
    elEditorSetup.style.display = 'grid'

}

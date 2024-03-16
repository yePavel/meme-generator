'use strict'

let gCanvas
let gCtx

function onInit() {
    renderGallery()
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    gMeme = getMeme()
    addListeners()
    const center = { x: gMeme.lines[0].currPosX, y: gMeme.lines[0].currPosY }
}

'use strict'

function renderMeme() {
    const img = new Image()
    img.src = gMeme.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText(150, 50)
    }
}

function drawText(x, y) {
    const { lines } = gMeme
    gCtx.lineWidth = 0.5

    gCtx.fillStyle = lines[0].color

    gCtx.font = `${lines[0].size}px Ariel`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(lines[0].txt, x, y)
    gCtx.strokeText(lines[0].txt, x, y)
}
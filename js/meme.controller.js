'use strict'

function renderMeme() {
    const img = new Image()
    img.src = gMeme.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gMeme.lines.forEach(line => {
            drawText(line, line.currPosX, line.currPosY)
        });
    }
}

function drawText(lines, posX, posY) {
    gCtx.lineWidth = 0.5

    gCtx.fillStyle = lines.color

    gCtx.font = `${lines.size}px Ariel`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(lines.txt, posX, posY)
    gCtx.strokeText(lines.txt, posX, posY)
    addLineBorder()
}

function addLineBorder() {
    var { lines } = gMeme
    var { selectedLineIdx: idx } = gMeme
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.textBaseline = "top"
    gCtx.strokeRect(lines[idx].currPosX - 100,
        lines[idx].currPosY - 25,
        lines[idx].currPosX + 50,
        lines[idx].currPosY)
}

function onAddLine() {
    addLine()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}




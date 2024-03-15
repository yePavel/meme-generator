'use strict'

var gMeme

function getMeme() {
    return {
        selectedImgId: 1,
        selectedLineIdx: 0,
        url: '',
        lines: [
            {
                txt: 'I Love Falafel',
                size: 35,
                color: 'red',
                currPosX: 150,
                currPosY: 50
            },
        ]
    }
}

function switchLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx += 1
    addLineBorder()
}

function addLine() {
    const { lines } = gMeme
    lines.push({
        txt: 'Insert text',
        size: 35,
        color: 'red',
        currPosX: 150,
        currPosY: 120
    })
    gMeme.selectedLineIdx = (gMeme.lines.length - 1)
    renderMeme()
}

function setLineTxt() {
    const txtInput = document.querySelector('.txt-change').value
    var { lines } = gMeme
    lines[gMeme.selectedLineIdx].txt = txtInput
    renderMeme()
}

function setImg(imgId) {
    const currImg = findImgById(imgId)
    gMeme.url = currImg.url
}

function setLineColor() {
    const colorInput = document.querySelector('.txt-color').value
    var { lines } = gMeme
    lines[gMeme.selectedLineIdx].color = colorInput
    renderMeme()
}

function setLineSize(sizeDir) {
    var { lines } = gMeme
    lines[gMeme.selectedLineIdx].size += sizeDir
    renderMeme()
}

function downloadImg(elLink) {
    const imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}



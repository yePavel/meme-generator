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
                size: 20,
                color: 'green'
            }
        ]
    }
}

function setLineTxt() {
    const txtInput = document.querySelector('.txt-change').value
    var { lines } = gMeme
    lines[0].txt = txtInput
    renderMeme()
}

function setImg(imgId) {
    const currImg = findImgById(imgId)
    gMeme.url = currImg.url
}


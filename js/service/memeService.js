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
                size: 25,
                color: 'red',
                currPosX: 150,
                currPosY: 50,
                // pos,
                isDrag: false
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
        size: 25,
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

function setCircleDrag(isDrag) {
    var { lines } = gMeme
    lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function isCircleClicked(clickedPos) {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme

    return ((clickedPos.x >= (lines[idx].currPosX - lines[idx].size * 2 - lines[idx].txt.length * 3)) &&
        (clickedPos.x <= (lines[idx].currPosX + lines[idx].size * 2 + lines[idx].txt.length * 3)) &&
        (clickedPos.y >= (lines[idx].currPosY - lines[idx].size)) &&
        (clickedPos.y <= (lines[idx].currPosY + lines[idx].size)))
}


function moveCircle(dx, dy) {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    lines[idx].currPosX += dx
    lines[idx].currPosY += dy
}
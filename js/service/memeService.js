'use strict'

var gMeme

function getMeme() {
    return {
        selectedImgId: 1,
        selectedLineIdx: 0,
        url: '',
        lines: [
            {
                txt: 'Insert text',
                size: 25,
                color: '#FF8C00',
                currPosX: 150,
                currPosY: 20,
                isDrag: false,
                txtWidth: 0,
                txtHeight: 0,
                font: 'Ariel',
            },
        ]
    }
}

function switchLine(type, idx) {
    if (type === 'clickBtn') {
        if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
        else gMeme.selectedLineIdx += 1
    } else gMeme.selectedLineIdx = idx
}

function addLine() {
    const { lines } = gMeme
    lines.push({
        txt: 'Insert text',
        size: 25,
        color: '#FF8C00',
        currPosX: 150,
        currPosY: 100,
        isDrag: false,
        txtWidth: 0,
        txtHeight: 0,
        font: 'Ariel',
    })
    gMeme.selectedLineIdx = (gMeme.lines.length - 1)
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

function setTxtFrameDrag(isDrag) {
    var { lines } = gMeme
    lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function isTxtFrameClicked(clickedPos) {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    gMeme.lines.forEach((lines, idx) => {
        if ((clickedPos.x >= lines.currPosX) &&
            (clickedPos.x <= (lines.txtWidth + lines.currPosX)) &&
            (clickedPos.y >= lines.currPosY) &&
            (clickedPos.y <= (lines.txtHeight + lines.currPosY))) {
            renderEditorMenu()
            onSwitchLine('mouseClick', idx)
        }
    });
    return ((clickedPos.x >= lines[idx].currPosX) &&
        (clickedPos.x <= (lines[idx].txtWidth + lines[idx].currPosX)) &&
        (clickedPos.y >= lines[idx].currPosY) &&
        (clickedPos.y <= (lines[idx].txtHeight + lines[idx].currPosY)))
}

function moveTxtFrame(dx, dy) {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    lines[idx].currPosX += dx
    lines[idx].currPosY += dy
}

function fontChange() {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    const currFont = document.getElementById('fonts').value
    lines[idx].font = currFont
}

function alignText() {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    if (lines[idx].textAlign === 'center') {
        lines[idx].currPosX = (gCanvas.width / 2) - (lines[idx].txtWidth / 2)
    }
    else if (lines[idx].textAlign === 'right')
        lines[idx].currPosX = 5
    else lines[idx].currPosX = (gCanvas.width - lines[idx].txtWidth)
}

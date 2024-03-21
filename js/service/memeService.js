'use strict'

var gMeme
let gSavedImg = []

function getMeme() {
    return {
        selectedImgId: 1,
        selectedLineIdx: 0,
        url: '',
        isDownload: false,
        lines: [
            {
                txt: 'Insert text',
                size: 35,
                color: '#FF8C00',
                outlineColor: '#000000',
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

function addLine() {
    const { lines } = gMeme
    lines.push({
        txt: 'Insert text',
        size: 35,
        color: '#FF8C00',
        outlineColor: '#000000',
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

function switchLine(type, idx) {
    if (type === 'clickBtn') {
        if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
        else gMeme.selectedLineIdx += 1
    } else gMeme.selectedLineIdx = idx
}

function setImg(imgId) {
    const currImg = findImgById(imgId)
    gMeme.url = currImg.url
    gMeme.selectedImgId = currImg.id
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

function downloadImg() {
    gMeme.isDownload = true
    renderMeme()

    setTimeout(() => {
        const link = document.createElement('a')
        const dataURL = gCanvas.toDataURL('image/jpeg')
        link.href = dataURL
        link.download = 'newMeme'
        link.click()
        gMeme.isDownload = false
    }, 100)
    flashMsg('download started...')
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
    var fontUrl = ''

    if (currFont === 'bungee') fontUrl = '/fonts/Bungee_Inline/BungeeInline-Regular.ttf'
    else if (currFont === 'Ceviche') fontUrl = '/fonts/Ceviche_One/CevicheOne-Regular.ttf'
    else if (currFont === 'mulish') fontUrl = '/fonts/Mulish/Mulish-VariableFont_wght.ttf'
    else if (currFont === 'syne') fontUrl = '/fonts/Syne_Tactile/SyneTactile-Regular.ttf'
    else if (currFont === 'vollkorn') fontUrl = '/fonts/Merienda/Merienda-VariableFont_wght.ttf'
    else fontUrl = '/fonts/Ariel/Asul-Regular.ttf'

    var myFont = new FontFace('myFont', `url(${fontUrl})`);
    myFont.load().then(function (font) {
        document.fonts.add(font);

        console.log('Font loaded');
        lines[idx].font = currFont
        renderMeme()
    });
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

function setLineTxt() {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    const txtInput = document.querySelector('.txt-change').value
    lines[idx].txt = txtInput
    renderMeme()
}

function onSave() {
    var newImg = new Image();
    newImg.src = gCanvas.toDataURL()
    console.log('gMeme.lines:', gMeme.lines)
    gSavedImg.push(
        {
            selectedImgId: gMeme.selectedImgId,
            selectedLineIdx: gMeme.selectedLineIdx,
            url: gMeme.url,
            lines: gMeme.lines
        }
    )
    saveToStorage('canvas', gSavedImg)
    newImg.addEventListener('click', getImgFromSaved)
    newImg.myParam = gMeme.selectedImgId
    document.querySelector('.saved-container').appendChild(newImg);
    flashMsg('Saved!')
}

function setOutLineColor() {
    const colorInput = document.querySelector('.txt-outline').value
    var { lines } = gMeme
    lines[gMeme.selectedLineIdx].outlineColor = colorInput
    renderMeme()
}


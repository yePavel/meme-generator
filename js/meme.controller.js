'use strict'

var gStartPos
const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

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

function drawText(line, posX, posY) {
    gCtx.lineWidth = 0.5

    gCtx.fillStyle = line.color

    gCtx.font = `${line.size}px Ariel`
    gCtx.textAlign = 'left'
    gCtx.textBaseline = 'top'
    gCtx.fillText(line.txt, posX, posY)
    gCtx.strokeText(line.txt, posX, posY)
    addLineBorder()
}

function addLineBorder() {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    var textWidth = gCtx.measureText(lines[idx].txt).width;
    var lineHeight = lines[idx].size * 1.2;
    lines[idx].txtWidth = textWidth

    lines[idx].txtHeight = lineHeight
    gCtx.strokeRect(lines[idx].currPosX, lines[idx].currPosY, textWidth, lineHeight);
}

function onAddLine() {
    addLine()
}

function onSwitchLine(type, idx) {
    switchLine(type, idx)
    renderMeme()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    gStartPos = getEvPos(ev)
    if (!isCircleClicked(gStartPos)) return
    setCircleDrag(true)
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const { lines } = gMeme
    const { selectedLineIdx: idx } = gMeme
    if (!lines[idx].isDrag) return

    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y

    moveCircle(dx, dy)
    gStartPos = pos
    renderMeme()
}

function onUp() {
    setCircleDrag(false)
    document.body.style.cursor = 'default'
}

function getEvPos(ev) {
    if (TOUCH_EVENTS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        return {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    } else {
        return {
            x: ev.offsetX,
            y: ev.offsetY,
        }
    }
}




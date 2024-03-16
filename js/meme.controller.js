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
    gCtx.beginPath()
    gCtx.moveTo(lines[idx].currPosX - lines[idx].size * 3, lines[idx].currPosY - lines[idx].size)

    gCtx.lineTo(lines[idx].currPosX + lines[idx].size * 3, lines[idx].currPosY - lines[idx].size)
    gCtx.lineTo(lines[idx].currPosX + lines[idx].size * 3, lines[idx].currPosY + lines[idx].size)
    gCtx.lineTo(lines[idx].currPosX - lines[idx].size * 3, lines[idx].currPosY + lines[idx].size)

    gCtx.closePath()

    gCtx.lineWidth = 1
    gCtx.strokeStyle = lines.color
    gCtx.stroke()
}

function onAddLine() {
    addLine()
}

function onSwitchLine() {
    switchLine()
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
    console.log('gStartPos:', gStartPos)
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
    document.body.style.cursor = 'grab'
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




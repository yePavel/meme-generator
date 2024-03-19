'use strict'

const IMG_KEY = 'currImg'
const SEARCH_WORD = {
    funny: 6,
    tramp: 3,
    famous: 2,
}

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'tramp', 'famous'] },
    { id: 2, url: 'img/2.jpg', keywords: ['sweet', 'dog', 'kiss'] },
    { id: 3, url: 'img/3.jpg', keywords: ['sweet', 'dog', 'kids'] },
    { id: 4, url: 'img/4.jpg', keywords: ['sweet', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'kids'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'kids'] },
    { id: 8, url: 'img/8.jpg', keywords: ['hat'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'kids'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'obama', 'famous'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'kiss'] },
    { id: 12, url: 'img/12.jpg', keywords: ['famous', 'tv-show'] },
    { id: 13, url: 'img/13.jpg', keywords: ['famous'] },
    { id: 14, url: 'img/14.jpg', keywords: ['famous'] },
    { id: 15, url: 'img/15.jpg', keywords: ['famous'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'famous'] },
    { id: 17, url: 'img/17.jpg', keywords: ['putin', 'famous'] },
    { id: 18, url: 'img/18.jpg', keywords: ['tv-show'] }
]

function findImgById(imgId) {
    const currImg = gImgs.find(img => img.id === imgId)
    return currImg
}


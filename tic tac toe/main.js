let topLeft = document.querySelector('#topLeft')
let topMiddle = document.querySelector('#topMiddle')
let topRight = document.querySelector('#topRight')
let middleLeft = document.querySelector('#middleLeft')
let middleMiddle = document.querySelector('#middleMiddle')
let middleRight = document.querySelector('#middleRight')
let bottomLeft = document.querySelector('#bottomLeft')
let bottomMiddle = document.querySelector('#bottomMiddle')
let bottomRight = document.querySelector('#bottomRight')

let currentBoard = [[topLeft, topMiddle, topRight], [middleLeft, middleMiddle, middleRight], [bottomLeft, bottomMiddle, bottomRight]]
currentBoard.flat().forEach(x => { x.addEventListener("click", () => markElem(x)) })
let whoseTurn = 'x'

function markElem(element) {
    if (element.textContent !== '')
        return
    element.textContent = whoseTurn
    checkForWinners()
    swapTurns()
}

function swapTurns() {
    if (whoseTurn === 'x')
        whoseTurn = 'o'
    else whoseTurn = 'x'
}

function checkForWinners() {
    const winnableRows = [[topLeft, topMiddle, topRight],
    [middleLeft, middleMiddle, middleRight],
    [bottomLeft, bottomMiddle, bottomRight],
    [topLeft, middleLeft, bottomLeft],
    [topMiddle, middleMiddle, bottomMiddle],
    [topRight, middleRight, bottomRight],
    [topLeft, middleMiddle, bottomRight],
    [topRight, middleMiddle, bottomLeft]]

    winnableRows.forEach(row => {
        if (rowIsWinner(row)) {
            alert(`${whoseTurn} won`)
            wipeBoard()
            return
        }
    })
    if (!currentBoard.flat().map(elem => elem.textContent).includes('')) {
      alert('you both lost.') 
      wipeBoard()
    }
}

function wipeBoard() {
  currentBoard.flat().forEach(elem => elem.textContent = '')
  whoseTurn = 'x'
}


function rowIsWinner(row) {
    row = row.map(elem => elem.textContent)
    const result = row[0] === row[1] && row[1] === row[2] && row[0] !== ''
    return result
}
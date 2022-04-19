function getGeneration(cells, generations) {

  const getAbove = row => row === 0 ? cells.length-1 : row - 1
  const getUnder = row => row === cells.length - 1 ? 0 : row + 1
  const getLeft = column => column === 0 ? cells[0].length - 1 : column - 1
  const getRight = column => column === cells[0].length - 1 ? 0 : column + 1
  
  let iterateGeneration = board => {
    let newBoard = board.map(row => row.slice())
    board.forEach((row, i) => {
      row.forEach((item, j) => {
        let above = getAbove(i)
        let under = getUnder(i)
        let left = getLeft(j)
        let right = getRight(j)
        let sum =
          board[above][left] +  board[above][j] +   board[above][right] +
          board[i][left] +                              board[i][right] +
          board[under][left] +  board[under][j] +   board[under][right]
        
        if (sum === 3)
          newBoard[i][j] = 1
        else if (sum !== 2)
          newBoard[i][j] = 0
      })
    })
    return newBoard
  }
  while(generations > 0) {
    generations--
    cells = iterateGeneration(cells)
  }
  return cells
}

function validSolution(board){
  if (JSON.stringify(board).includes('0')) return false
  
  let isValidSegment = arr => [...new Set(arr)].length === 9
  
  for (let i = 0; i < 9; i++) {
    let row = board[i]
    let column = board.map(row => row[i])
    if (!isValidSegment(column) || !isValidSegment(row))
      return false
  }
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let square = board.slice(i*3, i*3 + 3).map(row => row.slice(j*3, j*3 + 3))
      square = square.reduce((acc, row) => acc.concat(row), [])
      if (!isValidSegment(square))
        return false
    }
  }
  return true
}

// https://www.codewars.com/kata/529bf0e9bdf7657179000008

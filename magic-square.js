function isValid(square, gap) {

  // check if the numbers are a proper sequence matching the gap
  const ordered = square.reduce((acc, cur) => acc.concat(cur), [])
    .sort((a, b) => b - a)
  let item = ordered.pop()
  while (ordered.length) {
    const stored = ordered.pop()
    if (stored - item !== gap) return false
    item = stored
  }

  // check the diagonals
  let diag1 = 0, diag2 = 0
  for (let i = 0; i < square.length; i++) {
    diag1 += square[i][i]
    diag2 += square[i][square.length - 1 - i]
  }
  if (diag1 !== diag2) return false

  // ok now check the rows and columns
  for (let i = 0; i < square.length; i++) {
    let row = 0
    let column = 0
    for (let j = 0; j < square.length; j++) {
      row += square[i][j]
      column += square[j][i]
    }
    if (row !== diag1 || column !== diag1) return false
  }
  
  return true
}

// https://www.codewars.com/kata/633d7409c8bd7c4a853c2ba9
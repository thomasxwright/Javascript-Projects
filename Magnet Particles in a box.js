function doubles(maxk, maxn) {
  let sumOfAllRows = 0
  for (let i = 1; i <= maxk; i++) {
    sumOfAllRows += getWeightOfRow(i, maxn)
  }
  return sumOfAllRows
}


function getWeightOfRow(row, numColumns) {
  let sumOfRow = 0
  for (let i = 1; i <= numColumns; i++) {
    sumOfRow += getWeightOfBox(row, i)
  }
  return sumOfRow
}



function getWeightOfBox(row, column) {
  return 1 / (row * (column + 1) ** (2 * row))
}

// https://www.codewars.com/kata/56c04261c3fcf33f2d000534

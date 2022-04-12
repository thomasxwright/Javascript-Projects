function rule30(list, n) {
  if (n <= 0)
    return list

    let expandedList = [0].concat(list).concat([0])
    let newList = []

    expandedList.forEach((cell, i) => {
      let left = Boolean(expandedList[i-1])
      let right = Boolean(expandedList[i+1])
      
      let updatedCell = getUpdatedCellValue(left, cell, right)
      newList.push(updatedCell)
    })
      return rule30(newList, n - 1)
  }

let getUpdatedCellValue = (left, center, right) => {
  let sum = left + right + center
  if (sum === 1)
    return 1
  else if (left == 0 && center === 1 && right == 1)
    return 1
  else return 0
}

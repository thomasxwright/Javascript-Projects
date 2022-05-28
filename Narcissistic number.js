function isNarcissistic(n) {
  return String(n).split('').map(num => Number(num) ** String(n).length).reduce((acc, num) => acc+num) === n
}

// https://www.codewars.com/kata/56b22765e1007b79f2000079

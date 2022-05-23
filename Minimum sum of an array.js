function minSum(arr) {
  arr = arr.sort((a, b) => a - b)
  let sum = 0
  while (arr.length) {
    sum += arr.shift() * arr.pop()
  }
  return sum
}

// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

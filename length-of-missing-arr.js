function getLengthOfMissingArray(arrayOfArrays) {
  const containsNullOrEmptyArr = !arrayOfArrays.every(arr => arr != null && arr.length > 0)
  if (!arrayOfArrays || arrayOfArrays.length === 0 || containsNullOrEmptyArr) return 0
  
  arrayOfArrays.sort((a, b) => a.length - b.length)
  const sequence = arrayOfArrays.map(arr => arr.length)
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] + 1 !== sequence[i+1])
      return sequence[i] + 1
  }
}

// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

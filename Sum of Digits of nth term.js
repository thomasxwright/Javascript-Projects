function sumDigNthTerm(initial, patternl, nthTerm) {
  //decrement bc the initial value is being counted as a term
  nthTerm--
  let cycles = Math.floor(nthTerm / patternl.length)
  let leftoverTerms = nthTerm % patternl.length
  const sumOfEachCycle = patternl.reduce((acc, num) => acc + num)
  
  initial += (sumOfEachCycle * cycles)
  for (let i = 0; i < leftoverTerms; i++) {
    initial += patternl[i]
  }
  return sumDigits(initial)
}

let sumDigits = num => {
  const string = String(num)
  let sum = 0
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i])
  }
  return sum
}

// https://www.codewars.com/kata/55ffb44050558fdb200000a4

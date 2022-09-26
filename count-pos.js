function countPositivesSumNegatives(input) {
	  if (!input) return []
	  const numPos = input.filter(num => num > 0).length
	  const sumNeg = input.filter(num => num < 0).reduce((acc, num) => acc + num, 0)
	  if (numPos === 0 && sumNeg === 0) return []
	  return [numPos, sumNeg]
}

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

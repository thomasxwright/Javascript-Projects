function squareOrSquareRoot(array) {
	  return array.map(num => (num ** 0.5) % 1 === 0 ? num ** 0.5 : num ** 2)
}

// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

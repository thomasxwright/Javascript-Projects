function countSquares(n){
	  if (n === 1) return 1
	  return countSquares(n - 1) + n ** 2
}

// https://www.codewars.com/kata/551186edce486caa61000f5c

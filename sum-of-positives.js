function positiveSum(arr) {
	  return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0)
}

// https://www.codewars.com/kata/5715eaedb436cf5606000381


n geo_mean(nums, arithMean) {
	  if (nums.length == 0) return arithMean
	  const fullSum = arithMean * (nums.length + 1)
	  nums.push(fullSum - nums.reduce((a, b) => a + b))
	  const multipliedProduct = nums.reduce((val, sum) => val * sum, 1)
	  return Math.pow(multipliedProduct, 1/nums.length)
}

// https://www.codewars.com/kata/57c6b44f58da9ea6c20003da

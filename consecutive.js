function consecutive(arr) {
	  if (!arr.length) return 0
	 arr.sort((a, b) => a - b)
	  const length = arr.length
	  return 1 - arr[0] - length + arr.pop() 
}

// https://www.codewars.com/kata/559cc2d2b802a5c94700000c

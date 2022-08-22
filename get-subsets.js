function estSubsets(arr) {
	  if (arr.length === 0) return 0
	    return getSubsets([...new Set(arr)].length)
}

const getSubsets = n => {
	  if (n === 1) return 1
	  return getSubsets(n-1) * 2 + 1
}

// https://www.codewars.com/kata/584703d76f6cf6ffc6000275

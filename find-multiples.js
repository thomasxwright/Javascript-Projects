function findMultiples(integer, limit) {
	  let i = integer, arr = []
	  while (i <= limit) {
		      arr.push(i)
		      i += integer
		    }
	  return arr
}

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

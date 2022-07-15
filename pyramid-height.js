function pyramidHeight(n) {
	  let rows = 0
	  while (n >= (rows+1) ** 2)
		    n -= ++rows ** 2
	  return rows
}

// https://www.codewars.com/kata/56968ce7753513604b000055

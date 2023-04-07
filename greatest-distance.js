var greatestDistance = function(data) {
	  const placements = {}
	  let largestDistance = 0
	  
	  for (const [i, num] of data.entries()) {
		      if (placements[num] !== undefined)
			        largestDistance = Math.max(largestDistance, i - placements[num])
		      else
			        placements[num] = i
		    }
	  return largestDistance
}

// https://www.codewars.com/kata/5442e4fc7fc447653a0000d5

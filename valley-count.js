function countingValleys(s) {
	  let valleys = 0
	  let level = 0
	  for (let direction of s) {
		      if (direction === 'U') {
			            level++
			            if (level === 0)
				              valleys++
			          }
		      if (direction === 'D')
			        level--
		    }
	  return valleys
}

// https://www.codewars.com/kata/5da9973d06119a000e604cb6

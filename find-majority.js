let findMode = nums => {
	  const tally = {}
	  for (const num of nums) {
		      tally[num] = tally[num] + 1 || 1
		      if (tally[num] * 2 >= nums.length) {
			            return num
			          }
		    }
}

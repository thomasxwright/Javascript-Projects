function hasDupes(nums) {
	  const alreadyExists = {}
	  for (const num of nums) {
		      if (alreadyExists[num])
			        return true
		      alreadyExists[num] = true
		    }
	  return false
}

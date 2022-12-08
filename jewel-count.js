function jewelCount (jewels, stones) {
	  let exists = {}
	for (const jewel of jewels) {
		exists[jewel] = true
	}


	let jewelCount = 0
	for (const stone of stones) {
		if (exists[stone]) {
			jewelCount ++
		}
	}
	return jewelCount
}

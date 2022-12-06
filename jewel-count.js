function jewelCount (jewels, stones) {
	  let tally = {}
	for (const stone of stones) {
		tally[stone] = tally[stone] + 1 || 1
	}


	let jewelCount = 0
	for (const jewel of jewels) {
		if (tally[jewel]) {
			jewelCount += tally[jewel]
		}
	}
	return jewelCount
}

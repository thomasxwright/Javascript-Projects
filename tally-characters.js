function tallyCharacters (str) {
	const tally = {}
	for (let char of str) {
		tally[char] = tally[char] + 1 || 1
	}
	return tally
}

const encap = arr => {
	arr = arr.map(word => `${word[0]}${word[word.length - 1]}`)
	return arr.join(' ')
}

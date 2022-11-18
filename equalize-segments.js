const equalize = arr => {
	  const avgLen = arr.join('').length / arr.length
	return arr.map(group => group[0].repeat(avgLen))
}

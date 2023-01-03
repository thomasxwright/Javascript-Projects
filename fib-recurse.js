function fibRec(num) {
	if (num === 0 || num === 1) return num

	return fibRec(num - 1) + fibRec(num - 2)
}

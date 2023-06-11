function accum(s) {
		return s.split('').map((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i)).join('-')
}

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

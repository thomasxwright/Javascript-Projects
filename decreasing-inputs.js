function add() {
	  return Math.round([...arguments].reduce((acc, cur, i) => acc + cur / (i+1), 0))
}

// https://www.codewars.com/kata/555de49a04b7d1c13c00000e

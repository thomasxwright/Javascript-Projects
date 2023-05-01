function lastDigit(n, d) {
	  const str = String(n).split('').map(str => +str)
	  d = Math.min(d, str.length)
	  if (d <= 0) return []
	  return str.slice(str.length - d)
}

// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0

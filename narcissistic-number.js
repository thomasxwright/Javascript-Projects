function narcissistic(value) {
	  const numDigits = String(value).length
	  const sum = String(value).split('').reduce((acc, digit) => (+digit) ** numDigits + acc, 0) 
	  return sum === value
}

// https://www.codewars.com/kata/5287e858c6b5a9678200083c

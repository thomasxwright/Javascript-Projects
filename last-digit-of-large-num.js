var lastDigit = function(str1, str2){  
	  if (str2 === '0') return 1
	  const key = {
		      '0': [0],
		      '1': [1],
		      '2': [2, 4, 8, 6],
		      '3': [3, 9, 7, 1],
		      '4': [4, 6],
		      '5': [5],
		      '6': [6],
		      '7': [7, 9, 3, 1],
		      '8': [8, 4, 2, 6],
		      '9': [9, 1]
		    }
	  const possibleDigits = key[str1.slice(-1)]
	  const toThePowerOf = Number(str2.slice(-2))
	  
	  return possibleDigits[(toThePowerOf-1) % possibleDigits.length] || 0
}

// https://www.codewars.com/kata/5511b2f550906349a70004e1

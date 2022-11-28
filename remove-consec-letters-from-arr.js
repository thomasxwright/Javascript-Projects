function removeConsecLetters (str) {
	  let result = ''

	  for (let i = 0; i < str.length; i++) {
		      if (str[i] !== str[i - 1]) {
			            result = result + str[i]
			          }
		    }
	  return result
}

function removeConsecLettersFromArr (arr) {
	  return arr.map(word => removeConsecLetters(word))
}

// https://www.codewars.com/kata/59f08f89a5e129c543000069

function moreZeros(s){
	  s = [...new Set(s)]
	  return s.filter(letter => {
		      const code = letter.charCodeAt(0).toString(2)
		      return code.split('0').length > code.split('1').length
		      })
}

// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a

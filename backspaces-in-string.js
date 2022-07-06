function cleanString(s) {
	  let output = []
	  for (let i = 0; i < s.length; i++) {
		      if (s[i] === '#')
			        output.pop()
		      else
			        output.push(s[i])
		    }
	  return output.join('')
}

// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

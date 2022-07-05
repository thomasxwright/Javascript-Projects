function sortMyString(S) {
	    let even = '', odd = ''
	    for (let i = 0; i < S.length; i++) {
		          if (i % 2)
			            odd += S[i]
		          else
			            even += S[i]
		        }
	  return `${even} ${odd}`
}

// https://www.codewars.com/kata/580755730b5a77650500010c

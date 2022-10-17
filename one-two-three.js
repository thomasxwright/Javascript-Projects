function one_two_three() {
	  let pair = []
	  const getPair = () => {
		      pair = [one_two(), one_two()]
		    }
	  
	  do {
		      getPair()
		       } while(pair[0] === 1 && pair[1] === 1)
	  
	  if (pair[0] === 1 && pair[1] === 2)
		    return 1
	  if (pair[0] === 2 && pair[1] === 2)
		    return 2
	  if (pair[0] === 2 && pair[1] === 1)
		    return 3
	  else return [pair]
}

// https://www.codewars.com/kata/593e84f16e836ca9a9000054

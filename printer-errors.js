function printerError(s) {
	    const misprintCount = s.split('').reduce((tally, letter) => {
		          return letter.match(/[a-m]/) ?
			            tally :
			            tally + 1
		          }
		        , 0)
	    return `${misprintCount}/${s.length}`
}

// https://www.codewars.com/kata/56541980fa08ab47a0000040

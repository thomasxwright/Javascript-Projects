function nextHigher(n) {
	  const count = n.toString(2).split('1').length
	  let foundMatch = false
	  do {
		      n++
		      foundMatch = count === n.toString(2).split('1').length
		    } while(!foundMatch)
	    
	    return n
}

// https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5

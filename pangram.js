function isPangram(string){
	  string = string.toLowerCase()
	  for (letter of 'abcdefghijklmnopqrstuvwxyz') {
		      if (string.indexOf(letter) === -1)
			        return false
		    }
	  return true
}

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/solutions/javascript

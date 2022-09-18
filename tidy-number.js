function tidyNumber(n){
	  n = String(n).split('').map(n => +n)
	  for (let i = 1; i < n.length; i++) {
		      if (n[i] < n[i-1]) return false
		    }
	  return true
}

// https://www.codewars.com/kata/5a87449ab1710171300000fd

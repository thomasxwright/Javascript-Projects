function nextPal(val) {
	    let isPalindrome = str => {
		          return str.split('').reverse().join('') === str
		        }
	    
	    for (let i = val; i++; true) {
		          if (isPalindrome(String(i))) return i
		        }
	    }

// https://www.codewars.com/kata/56a6ce697c05fb4667000029

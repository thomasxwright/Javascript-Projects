function countSpecMult(n, mxval) {
	  const isPrime = num => {
		      const sqrt = num ** 0.5
		      for (let i = 2; i <= sqrt; i++) {
			            if (num % i === 0)
				              return false
			          }
		      return true
		    }
	  
	  let consecPrimes = [],
		      num = 2
	    while (n > 0) {
		          if (isPrime(num)) {
				          consecPrimes.push(num)
				          n--
				        }
		          num++
		        }
	  
	  let multiplier = consecPrimes.reduce((acc, num) => acc * num, 1)
	  
	  return Math.floor(mxval / multiplier)
}

// https://www.codewars.com/kata/55e785dfcb59864f200000d9

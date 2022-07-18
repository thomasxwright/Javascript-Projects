function isTwinPrime(n){
	  
	  let isPrime = num => {
		      if (num < 3) return false
		      let sqrt = num ** 0.5
		      for (let i = 2; i <= sqrt; i++) {
			            if (num % i === 0) return false
			          }
		      return true
		    }
	  
	  const hasPrimeTwin = isPrime(n - 2) || isPrime(n + 2)
	  return isPrime(n) && hasPrimeTwin
}

// https://www.codewars.com/kata/59b7ae14bf10a402d40000f3

function twinPrime(n){
	  
	  let isPrime = num => {
		      if (num < 3) return false
		      let sqrt = num ** 0.5
		      for (let i = 2; i <= sqrt; i++) {
			            if (num % i === 0) return false
			          }
		      return true
		    }
	  
	  let tally = 0
	  for (let i = 3; i <= n - 1; i += 2) {
		      
		      if (isPrime(i) && isPrime(i+2)){
			            tally++
			          }
		    }
	  return tally
}

// https://www.codewars.com/kata/596549c7743cf369b900021b

var checkGoldbach = function(number) {
	  if (number % 2) return []
	  for (let i = 2; i <= number / 2; i++) {
		      if (isPrime(i) && isPrime (number - i))
			        return [i, number - i]
		    }
	  return []
};


let isPrime = number => {
	  const sqrt = number ** 0.5
	  for (let i = 2; i <= sqrt; i++) {
		      if (number % i === 0) return false
		    }
	  return true
}

// https://www.codewars.com/kata/537ba77315ddd92659000fec

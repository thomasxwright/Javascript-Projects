function isCoprime(x, y) {
  const xFactors = getFactors(x)
  const yFactors = getFactors(y)

  let sharedFactors = xFactors.filter(factor => yFactors.includes(factor))
  return sharedFactors.length === 1
  
  function getFactors (num) {
    let factors = []
    for (let i = 1; i <= num ** 0.5; i++) {
      if (num % i === 0){ factors.push(i)
                         factors.push(num/i)
                         }
    }
    return factors
  }
}

// https://www.codewars.com/kata/585c50e75d0930e6a7000336

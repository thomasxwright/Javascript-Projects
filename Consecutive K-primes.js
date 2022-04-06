let howManyPrimeFactors = num => {
  for (let i = 2; i*i <= num; i++) {
    if (num % i === 0)     //then it isn't prime
      return 1 + howManyPrimeFactors(num / i)
  }
  return 1
}

function consecKprimes(k, arr) {
  let primeFactorsInLastNum
  return arr.reduce((score, num) => {
    let primeFactorsInCurrentNum = howManyPrimeFactors(num)
    if (primeFactorsInCurrentNum === k && primeFactorsInLastNum === k)
      score++
    primeFactorsInLastNum = primeFactorsInCurrentNum
    return score
    },0)
}

function gap(g, m, n) {
  if (g % 2 === 1)
    return null
  let isPrime = num => {
    for (let i = 3; i <= num ** 0.5; i +=2) {
      if (num % i === 0)
        return false
    }
    return true
  }
  
  if (m % 2 === 0)
    m++
  for (let i = m; i <= n; i += 2) {
    if (isPrime(i) && i+g <= n && isPrime(i + g)) {
      //check every number between the gap. all must be nonprime
      let foundInterveningPrimeNumber
      for (let j = i + 2; j < i + g; j+= 2) {
        console.log(j, isPrime(j), "from", i)
        if (isPrime(j)) {
          foundInterveningPrimeNumber = true
          break
        }
      }
      if (!foundInterveningPrimeNumber) {
        console.log("returning", i, i+g, "for", g, m, n)
        return [i, i+g]
      }
    }
  }
  return null 
}

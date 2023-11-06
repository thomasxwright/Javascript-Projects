function abundancy(num) {
    let sum = 0
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i
      }
    }
    return sum
  }
  
  function abundant(h){
    for (let i = h; i > 0; i--) {
      const calculatedAbundancy = abundancy(i)
      if (calculatedAbundancy > i)
        return [[i], [calculatedAbundancy - i]]
    }
  }
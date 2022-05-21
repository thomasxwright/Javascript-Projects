var isPP = function(n){
  for (let i = 2; i <= n ** 0.5; i++) {
    for (let j = 2; i ** j <= n; j++) {
      if (i ** j === n) {
        return [i, j]
      }
    }
  }
  return null
}

// https://www.codewars.com/kata/54d4c8b08776e4ad92000835

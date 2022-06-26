function strong(n) {
  let factorial = num => num <= 1 ? 1 : num * factorial(num - 1)
  const strength = String(n).split('').reduce((acc, num) => acc + factorial(+num), 0)
  return strength === n ? 'STRONG!!!!' : 'Not Strong !!'
}

// https://www.codewars.com/kata/5a4d303f880385399b000001

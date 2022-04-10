function palindrome(num) {
  if (num < 0 || !Number.isInteger(num))
    return 'Not valid'
  if (String(num).length === 1)
    return false
  let tally = String(num).split('').reduce((acc, letter) => {
      if (!acc[letter])
        acc[letter] = 0
      acc[letter]++
      return acc
    }, {})
  let oddLettersCount = 0
  for (letter in tally) {
    if (tally[letter] % 2 === 1)
      oddLettersCount++
    if (oddLettersCount > 1)
      return false
  }
  return true
}

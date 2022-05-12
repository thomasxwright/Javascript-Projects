function deleteDigit(n) {
  let string = String(n)
  let max = 0
  for (let i = 0; i < string.length; i++) {
    const slicedNumber = +(string.slice(0, i) + string.slice(i+1))
    if (slicedNumber > max)
      max = slicedNumber
  }
  return max
}

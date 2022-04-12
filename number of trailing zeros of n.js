function zeros (n) {
  let power = 1
  let zeros = 0
  while (n / 5**power > 0) {
    zeros += Math.floor(n / 5 ** power)
    power++
  }
  return zeros
}

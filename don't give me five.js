function dontGiveMeFive(start, end)
{
  let score = 0
  for (let i = start; i <= end; i++) {
    if (!String(i).includes('5'))
      score++
  }
  return score
}

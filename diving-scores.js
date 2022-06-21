function scoreOfDive(scores, tariff) {
  scores.sort((a, b) => a - b)
  const score = scores.slice(2, scores.length - 2).reduce((acc, num) => acc + num, 0) * tariff
  
  return Math.round(score * 100) / 100
}

// https://www.codewars.com/kata/5c97be7d856e611dbb78805f

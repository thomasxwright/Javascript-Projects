function race(v1, v2, g) {
  if (v1 >= v2) return null
  const hours = g/(v2-v1)
  const minutes = hours * 60 % 60
  const seconds = Math.floor(minutes * 60 % 60)
  return [Math.floor(hours), Math.floor(minutes), seconds]
}

// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

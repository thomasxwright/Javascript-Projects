deadAntCount = function(ants) {
  if (!ants) return 0
  const antBits = ants.split('ant').join('').split('').filter(bit => 'ant'.includes(bit))
  const antBitTally = antBits.reduce((acc, bit) => {
    acc[bit]++
    return acc
  }, {'a': 0, 'n': 0, 't': 0})
  return Math.max(...Object.values(antBitTally))
}

// https://www.codewars.com/kata/57d5e850bfcdc545870000b7

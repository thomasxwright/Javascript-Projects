function determinant(m) {
  if (m.length === 1) return m[0][0]  
  if (m.length === 2) {
    const [[a, b], [c, d]] = m
    return a*d - b*c
  }
  
  let arrWithoutTopRow = m.slice(1)
  const subdeterminants = m[0].map((multiplier, i) => {
    const remainingBlock = arrWithoutTopRow.map(row => row.slice(0, 0+i).concat(row.slice(i+1)))
    return [multiplier, remainingBlock]
  })
  
  const result = subdeterminants.reduce((sum, portion, i) => {
    const [multiplier, equationPortion] = portion
    const additionOrSubtraction = i % 2 ? -1 : 1
    return sum + (additionOrSubtraction * multiplier * determinant(equationPortion))
  }, 0)
  return result
};

// https://www.codewars.com/kata/52a382ee44408cea2500074c

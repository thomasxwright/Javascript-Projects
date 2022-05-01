function valueOfX(eq) {
  eq = eq.trim().split(' ')
  const border = eq.indexOf('=')
  let leftSide = eq.slice(0, border)
  let rightSide = eq.slice(border + 1)
  let xSide, numbersSide
  if (leftSide.includes('x'))
    xSide = leftSide, numbersSide = rightSide
  else
    xSide = rightSide, numbersSide = leftSide
    
  xSide = processEquation(xSide)
  numbersSide = processEquation(numbersSide).map(num => +num)
  xSide.forEach(val => {
    if (!isNaN(val))
    numbersSide.push(+val * -1)
  })
  let result = numbersSide.reduce((acc, num) => acc + num)
  if (xSide.includes('-x'))
    result *= -1
  return result
}

let processEquation = (inputList) => {
  const terms = []
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i] === '+') {
      terms.push(inputList[i + 1])
      i++
    }
    else if (inputList[i] === '-') {
      terms.push('-' + inputList[i + 1])
      i++
    }
    else terms.push(inputList[i])
  }
  return terms
}

function numberOfPairs(gloves)
{
  gloves = gloves.reduce((acc, glove) => {
    acc[glove] = (acc[glove] || 0) + 1
    return acc
  }, {})
  return Object.entries(gloves).reduce((acc, color) => acc + Math.floor(color[1]/2), 0)
}

// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

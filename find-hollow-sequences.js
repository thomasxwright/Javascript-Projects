function isHollow(x){
  const first = x.indexOf(0)
  const last = x.lastIndexOf(0)
  
  const possibleHollowSequence = x.slice(first, last+1)
  const isValidHollowSequence = possibleHollowSequence.every(elem => elem === 0) && possibleHollowSequence.length >= 3
  const elementsToTheLeft = first
  const elementsToTheRight = x.length - (last + 1)
  return isValidHollowSequence && elementsToTheLeft === elementsToTheRight
}

// https://www.codewars.com/kata/59b72376460387017e000062

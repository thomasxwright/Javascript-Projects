function sortTwisted37(array) {
  let alteredArray = swap7and3(array)
  alteredArray.sort((a, b) => a-b)
  alteredArray = swap7and3(alteredArray)
  
  return alteredArray
}


function swap7and3 (input) {
input = input.map(number => {
    number = String(number).split('')
    number = number.map(digit => {
      if (digit === '3') {
        return '7'
      }
      if (digit === '7') {
        return '3'
      }
      return digit
    })
    number = number.join('')
    return +number
  })
  return input
  }

// https://www.codewars.com/kata/58068479c27998b11900056e

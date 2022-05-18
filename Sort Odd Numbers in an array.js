function sortArray(array) {
  let sortedOddNumbers = array.filter(num => num % 2).sort((a, b) => b - a)
  return array.map(num => num % 2 ? sortedOddNumbers.pop() : num)
}


// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

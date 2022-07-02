function removeSmallest(numbers) {
  let i = numbers.indexOf(Math.min(...numbers))
  return numbers.slice(0, i).concat(numbers.slice(i+1))
}

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

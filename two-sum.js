function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let numberA = numbers[i]
    for (let j = i+1; j < numbers.length; j++) {
      let numberB = numbers[j]
      if (numberA + numberB === target) {
        return [i, j]
        }
    }
  }
}

// https://www.codewars.com/kata/52c31f8e6605bcc646000082

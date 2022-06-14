function evenNumbers(array, number) {
  return array.filter(num => !(num % 2)).slice(-number)
}

// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

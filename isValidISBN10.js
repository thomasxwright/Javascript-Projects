function validISBN10(isbn) {
  if (!/^[0-9]{9}[0-9X]$/.test(isbn))
    return false
  isbn = isbn.split('').map(number => isNaN(number) ? 10 : number)
  const sum = isbn.reduce((acc, num, i) => num * (i+1) + acc, 0)
  return sum % 11 === 0
}

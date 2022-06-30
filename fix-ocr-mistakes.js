function correct(string)
{
  let fixes = {'0': 'O', '5': 'S', '1': 'I'}
  return string.split('').map(letter => {
    return fixes[letter] ? fixes[letter] : letter
  }).join('')
}

// https://www.codewars.com/kata/577bd026df78c19bca0002c0

function disemvowel(str) {
	  const vowels = 'ouiea'
	  return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('')
}

// https://www.codewars.com/kata/52fba66badcd10859f00097e

function consonantCount(str) {
	  return str.split('').filter(letter => 'bcdfghjklmnpqrstvwxyz'.includes(letter.toLowerCase())).length
}

// https://www.codewars.com/kata/564e7fc20f0b53eb02000106

var isAnagram = function(test, original) {
	  if (test.length !== original.length) return false
	  test = test.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')
	  original = original.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')
	  return test === original
}

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

const magazineThreat = (sourceLetters, neededLetters) => {
	  const source = {}
	  for (const letter of sourceLetters) {
		      source[letter] = source[letter] + 1 || 1
		    }

	  const required = {}
	  for (const letter of neededLetters) {
		        required[letter] = required[letter] + 1 || 1
		    }

	  console.log(source, required)
	  for (const letter in required) {
		      if (!source[letter] || source[letter] < required[letter]) {
			            return false
			          }
		    }
	  return true
}

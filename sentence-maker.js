function makesTheSentence(characterArray, sentenceString) {
	  sentenceString = sentenceString.replace(/ /g, '')
	  for (let i = 0; i < sentenceString.length; i++) {
		      const place = characterArray.indexOf(sentenceString[i])
		      if (place >= 0) {
			            characterArray[place] = false
			          }
		      else
			        return false
		    }
	  return true
}

// https://www.codewars.com/kata/59fb4d89ff58e5e816002efc

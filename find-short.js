function findShort(s){
	  let min = s.length
	  for (const word of s.split(' ')) {
		      min = Math.min(word.length, min)
		    }
	  return min
}

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

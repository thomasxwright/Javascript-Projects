function order(words){
	  const list = words.split(' ')
	   .sort((a, b) => {
		       return -(b.match(/[0-9]/)) - -(a.match(/[0-9]/))
		     })
	  return list.join(' ')
}

// https://www.codewars.com/kata/55c45be3b2079eccff00010f

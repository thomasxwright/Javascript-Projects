function tops(msg) {
	  let result = [], i = 0, hill = 1
	  while (i <= msg.length){
		      i += hill * 2   //move across the valley and up the hill
		      result.push(msg.substring(i, i + hill +1)) 
		      i += hill * 2 + 1   //move across the hilltop and down the other end
		      hill++
		    }
	  return result.reverse().join('')
}

// https://www.codewars.com/kata/5aa3e2b0373c2e4b420009af

function maxSumBetweenTwoNegatives(a) {
	  const firstNeg = a.findIndex(num => num < 0)
	  a = a.slice(firstNeg + 1)
	  
	  let maxSum = -1, cur = 0
	  for (num of a) {
		      if (num < 0){
			            maxSum = Math.max(cur, maxSum)
			          cur = 0
			        }
		      else
			        cur += num
		      }
	  return maxSum
}

// https://www.codewars.com/kata/6066ae080168ff0032c4107a

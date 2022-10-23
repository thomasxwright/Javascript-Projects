
n howManyGifts(maxBudget, gifts){
	  gifts = gifts.sort((a, b) => a-b)
	  let result = 0
	  for (let i = 0; maxBudget >= gifts[i] && i < gifts.length; i++) {
		      if (gifts[i] <= maxBudget){
			            maxBudget -= gifts[i]
			            result++
			          }
		    }
	  return result
}

// https://www.codewars.com/kata/5a84d485742ba347b90006b7

function createTwoSetsOfEqualSum(n) {
	    let sum = 0
	    const arr = []
	    for (let i = 1; i <= n; i++) {
		          sum += i
		          arr.push(i)
		        }
	  
	  if (sum % 2 !== 0) return []
	  const goal = sum / 2
	  const fillGroup = []
	  let groupSum = 0

	  while (groupSum + arr[arr.length - 1] <= goal){
		      const newItem = arr.pop()
		      groupSum += newItem
		      fillGroup.push(newItem)
		    }
	  if (groupSum < goal) {
		      const i = arr.indexOf(goal - groupSum)
		      fillGroup.push(arr.splice(i, 1)[0])
		    }
	  return [arr, fillGroup]
	  
}

// https://www.codewars.com/kata/647518391e258e80eedf6e06

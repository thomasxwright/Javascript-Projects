function firstNonConsecutive (arr) {
	  let num = arr[0]
	  for (let i = 1; i < arr.length; i++){
		      if (arr[i] !== num + 1) return arr[i]
		      num++
		    }
	  return null
}

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

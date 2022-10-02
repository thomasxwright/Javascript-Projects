multiplicationTable = function(size) {
	  let arr = []
	  for (let i = 1; i <= size; i++){
		      let subarr = []
		      for (let j = 1; j <= size; j++){
			            subarr.push(i*j)
			          }
		      arr.push(subarr)
		    }
	  return arr
}

// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

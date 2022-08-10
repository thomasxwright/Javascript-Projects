function arrAdder(arr) {
	  let str = []
	  for (let i = 0; i < arr[0].length; i++) {
		      str.push(arr.reduce((acc, array) => acc + array[i], ''))
		    }
	  return str.join(' ')
}

// https://www.codewars.com/kata/59778cb1b061e877c50000cc

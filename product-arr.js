function productArray(numbers){
	  return numbers.map((num, i) => {
		      return numbers.reduce((acc, cur, j) => j !== i ? acc * cur : acc, 1)
		    })
}

// https://www.codewars.com/kata/5a905c2157c562994900009d

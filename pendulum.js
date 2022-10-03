function pendulum(values) {
	  values = values.sort((a, b) => b - a)
	  let result = []
	  while(values.length) {
		      result.unshift(values.pop())
		      if (values.length)
			        result.push(values.pop())
		    }
	  return result
}

// https://www.codewars.com/kata/5bd776533a7e2720c40000e5

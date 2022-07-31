function findUniq(arr) {
	  let [num1, num2] = [...new Set(arr)]
	  
	  const str = arr.join('')
	  const splitByNum1 = str.split(num1)

	  if (splitByNum1.length === 2)
		    return num1
	  return num2
}

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function min(arr, toReturn) {
	  const lowestVal = arr.reduce((acc, num) => acc < num ? acc : num, Infinity)
	  if (toReturn === 'value') return lowestVal
	  else if (toReturn === 'index') return arr.indexOf(lowestVal)
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0

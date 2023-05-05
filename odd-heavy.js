function isOddHeavy(arr){
	  const evens = arr.filter(num => num % 2 === 0 )
	  const odds = arr.filter(num => num % 2 !== 0)
	  
	  if (odds.length === 0) return false
	  
	  return Math.min(...odds) > Math.max(...evens)
}

// https://www.codewars.com/kata/59c7e477dcc40500f50005c7

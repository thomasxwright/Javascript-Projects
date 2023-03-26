function isValidCoordinates(coordinates){
	  const allowed = '0123456789.-, '
	  if (coordinates.split('').some(letter => !allowed.includes(letter))) return false
	  const nums = coordinates.split(',')
	  if (nums.length !== 2) return false
	  let [num1, num2] = nums
	  if (isNaN(num1.trim()) || isNaN(num2.trim())) return false
	  num1 = Math.abs(+(num1.trim()))
	  num2 = Math.abs(+(num2.trim()))
	  if (num1 > 90 || num2 > 180) return false
	  return true
}

// https://www.codewars.com/kata/5269452810342858ec000951

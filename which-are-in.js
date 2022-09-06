function inArray(array1,array2){
	  array1 = array1.filter(item => array2.some(el => el.includes(item)))
	  return array1.sort()
}

// https://www.codewars.com/kata/550554fd08b86f84fe000a58

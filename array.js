function findArray(arr1, arr2){
	  return arr2.filter(num => num < arr1.length).map(num => arr1[num])
}

// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055

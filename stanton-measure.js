function stantonMeasure(arr) {
	  const mostCommon = arr.reduce((acc, cur) => cur === 1 ? acc + 1 : acc, 0)
	  return arr.reduce((acc, cur) => cur === mostCommon ? acc + 1 : acc, 0)
}

// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b

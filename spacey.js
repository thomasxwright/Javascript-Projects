function spacey(array){
	return array.map((word, i) =>
		  (array.slice(0, i + 1).reduce((acc, cur) => acc + cur, ''))
		  )
}

// https://www.codewars.com/kata/56576f82ab83ee8268000059

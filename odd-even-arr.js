function oddOrEven(array) {
	   return array.reduce((sum, num) => sum + num, 0) % 2 ? "odd" : "even"
}

// https://www.codewars.com/kata/5949481f86420f59480000e7

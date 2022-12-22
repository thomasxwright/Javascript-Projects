function fib(num) {
	  let num1 = 0
	  let num2 = 1
	  for (let i = 1; i < num; i++) {
		      const holder = num2
		      num2 = num1 + num2
		      num1 = holder
		    }
	  return num2
}

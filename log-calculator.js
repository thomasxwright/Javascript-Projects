const divisions = (n, divisor) => {
	  let num = 0
	  while (Math.floor(n / divisor) > 0) {
		      n /= divisor
		      num++
		    }
	  return num
};

// https://www.codewars.com/kata/5913152be0b295cf99000001

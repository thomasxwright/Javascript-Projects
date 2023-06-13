Array.range = function(start, count) {
	  const arr = []
	  
	  for (let i = start; i < start + count; i++) {
		      arr.push(i)
		    }
	  return arr
}

Array.prototype.sum = function() {
	  return this.reduce((acc, val) => acc + val, 0)
}

// https://www.codewars.com/kata/52195c9bb576caf14200007f

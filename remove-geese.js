function gooseFilter (birds) {
	  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
	  
	  return birds.filter(bird => !geese.includes(bird))
}

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

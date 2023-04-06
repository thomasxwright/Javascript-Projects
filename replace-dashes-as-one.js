function replaceDashesAsOne(str) {
	  // - before, - after, with any number of - or space in between
	   return str.replace(/-[- ]*-/g, '-')
	}

// https://www.codewars.com/kata/58af9f7320a9ecedb30000f1

function nextHappyYear(year){
	  const isHappy = year => {
		      const yearString = year.toString()
		      return [...new Set(yearString.split(''))].length === yearString.length
		    }
	  
	  while (!isHappy(++year)) {
		    }
	  return year
}

// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046

function cantor(n){
	  let tally = 0, level = 0
	  while (tally + level < n){
		      tally += level++
		    }
	  const oneNum = n - tally
	  const otherNum = level + 1 - oneNum
	  return level % 2 === 1 ? `${otherNum}/${oneNum}` : `${oneNum}/${otherNum}`
}

// https://www.codewars.com/kata/543b9113def6343e43000875

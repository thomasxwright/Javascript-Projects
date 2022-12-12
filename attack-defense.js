
n hasSurvived(attackers, defenders){
	  const sharedSize = Math.min(attackers.length, defenders.length)
	// if attackersScore is positive, attackers win.
	  let attackersScore = 0
	  for (let i = 0; i < sharedSize; i++) {
		      if (attackers[i] > defenders[i])
			        attackersScore++
		      else if (attackers[i] < defenders[i])
			        attackersScore--
		    }
	  attackersScore += attackers.length - defenders.length
	  
	  if (attackersScore === 0) {
		      attackersScore = attackers.reduce((acc, cur) => acc + cur) - defenders.reduce((acc, cur) => acc + cur)
		    }
	  return attackersScore <= 0
}

// https://www.codewars.com/kata/634d0f7c562caa0016debac5

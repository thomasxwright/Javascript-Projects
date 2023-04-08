function maximizePoints(team1, team2) {
	  team1.sort((a, b) => a - b)
	  team2.sort((a, b) => a - b)
	  let team1Index = 0, team2Index = 0, score = 0
	  
	  while (team1Index < team1.length && team2Index < team2.length) {
		      if (team1[team1Index] > team2[team2Index]) {
			            score++
			            team1Index++
			            team2Index++
			          }
		      else (
			          team1Index++
			          )
		    }
	  
	  return score
	  
	  
}

// https://www.codewars.com/kata/58fec262184b6dc30800000d

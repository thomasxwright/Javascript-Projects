function score( dice ) {
  let tally = {}
  let score = 0
  for (number of dice) {
    if (!tally[number])
     tally[number] = 0
    tally[number]++
   }
  
  if (tally[1] >= 3){
    score += 1000
    tally[1] -= 3
  }
  else if (tally[6] >= 3){
    score += 600
    tally[6] -= 3
  }
  else if (tally[5] >= 3){
    score += 500
    tally[5] -= 3
  }
  else if (tally[4] >= 3){
    score += 400
    tally[4] -= 3
  }
  else if (tally[3] >= 3){
    score += 300
    tally[3] -= 3
  }
  else if (tally[2] >= 3){
    score += 200
    tally[2] -= 3
  }
  
  if (tally[1])
    score += tally[1] * 100
  if (tally[5])
    score += tally[5] * 50
  return score
}

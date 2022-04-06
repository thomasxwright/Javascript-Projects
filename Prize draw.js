let scoreName = name => {
  name = name.toLowerCase().split('')
  let letterScore = name.reduce((score, letter) => score + letter.charCodeAt(0)-96, 0)
  return letterScore + name.length
}


function rank(st, we, n) {
  if (st === '')
    return 'No participants'
  st = st.split(',')
  st = st.map((person, i) => {
    return {'name': person,
            'score': scoreName(person) * we[i]
           }
  })
  st.sort((a, b) => {
    if (a.score === b.score)
      return a.name.localeCompare(b.name)
    return b.score - a.score
  })
  if (st.length < n)
    return "Not enough participants"
  let winner = Object.values(st)[n-1]
  return winner.name
}

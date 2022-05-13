function findChildren(dancingBrigade) {
  let tally = dancingBrigade.split('').reduce((acc, letter) => {
    if (!acc[letter.toLowerCase()]) acc[letter.toLowerCase()] = 0
    acc[letter.toLowerCase()]++
    return acc
  }, {})
  tally = Object.entries(tally).sort((a, b) => a[0].localeCompare(b[0]))
  return tally.reduce((acc, letter) => acc + letter[0].toUpperCase() + letter[0].toLowerCase().repeat(letter[1]-1), '')
}

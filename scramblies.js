const tallyOccurrences = (str) => {
  let tally = {}
  for (let i = 0; i < str.length; i++) {
    if (!tally[str[i]])
      tally[str[i]] = 0
    tally[str[i]]++
  }
  return tally
}

function scramble(str1, str2) {
  let str1Tally = tallyOccurrences(str1)  
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    if (!str1Tally[letter])
      return false
    str1Tally[letter]--
  }
  return true
}

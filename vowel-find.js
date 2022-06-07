function vowelIndices(word){
  word = word.toLowerCase()
  let result = []
  for (let i = 0; i < word.length; i++) {
    if (['a','e','i','o','y','u'].includes(word[i]))
      result.push(i+1)
  }
  return result
}

// https://www.codewars.com/kata/5680781b6b7c2be860000036

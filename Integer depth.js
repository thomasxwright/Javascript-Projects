function computeDepth (x){
  const recordedInts = []
  let multiplier = 0
  while (recordedInts.length < 10) {
    const value = x * ++multiplier
    for (let i = 0; i < String(value).length; i++){
      if (!recordedInts.includes(String(value)[i]))
        recordedInts.push(String(value)[i])
    }
  }
  return multiplier
}

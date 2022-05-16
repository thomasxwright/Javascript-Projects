var maxZeroSequence = function(arr) {
  
  const runningTallies = arr.reduce((acc, nextNumber) => {
    const runningSum = acc[acc.length - 1]
    acc.push(runningSum + nextNumber)
    return acc
  }, [0])

  let mostDistantZeroSumIndices = runningTallies.reduce((storedTuple, num, i) => {
    const possibleNewTuple = [runningTallies.indexOf(num), i]
    
    const lengthOfNewTuple = possibleNewTuple[1] - possibleNewTuple[0]
    const lengthOfStoredTuple = storedTuple[1] - storedTuple[0]
    if (lengthOfNewTuple >= lengthOfStoredTuple)
      storedTuple = possibleNewTuple
    return storedTuple
  },[0, 0])
  
  return arr.slice(mostDistantZeroSumIndices[0], mostDistantZeroSumIndices[1])
}

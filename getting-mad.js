function gettingMad(array) {
    // return the minimum absolute differnce
    array.sort((a, b) => a-b)
    let minDiff = Infinity
    for (let i = 0; i < array.length; i++) {
      if (array[i+1] !== undefined) {
        if (Math.abs(array[i+1] - array[i]) < minDiff) {
          minDiff = Math.abs(array[i+1] - array[i])
        }
      }
    }
    return minDiff
      
  }
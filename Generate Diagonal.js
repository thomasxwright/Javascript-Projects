function generateDiagonal(n, l){
  const memoized = []
  const result = []
  for (let i = l; i >= 0; i--) {
    result.push(recurse(i+n, i))
  }
  return result.reverse().slice(1)


  function recurse(layer, i) {
    if (memoized[layer] && memoized[layer][i]) return memoized[layer][i]
    if (i <= 1) return 1
    if (i > layer) return 0
    let value = recurse(layer - 1, i - 1) + recurse(layer - 1, i)
    memoize(layer, i, value)
    return memoized[layer][i]
  }

  function memoize(layer, i, value) {
    if (memoized[layer]) memoized[layer][i] = value
    else {
      memoized[layer] = []
      memoized[layer][i] = value
    }
  }
  
}

// https://www.codewars.com/kata/576b072359b1161a7b000a17

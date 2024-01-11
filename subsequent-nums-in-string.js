function beginning(xs) {
    for (let i = 1; i <= xs.length / 2; i++) {
      let num = xs.substr(0, i)
      let string = ''
      while (string.length < xs.length) {
        string += num++
      }
      if (string === xs) return +xs.substr(0, i)
      
    }
    return +xs
  }
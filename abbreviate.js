function abbreviate(string) {
    return string.replace(/[a-zA-Z]+/g, match => {
      return match.length < 4 ?
        match
      :
      match[0] + (match.length - 2) + match[match.length - 1]
    })
  }
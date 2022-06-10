function stockList(listOfArt, listOfCat){
  if (listOfArt.length === 0 || listOfCat.length === 0) return ""
  listOfCat = listOfCat.map(category => {
    const sum = listOfArt.reduce((acc, books) => {
      if (books[0] === category) {
        return acc + +(books.split(' ')[1])
      }
      return acc
    }, 0)
    return `(${category} : ${sum})`
  })
  
  return listOfCat.join(' - ')
}

// https://www.codewars.com/kata/54dc6f5a224c26032800005c

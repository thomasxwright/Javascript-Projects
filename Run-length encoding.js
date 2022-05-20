var runLengthEncoding = function(str){
  let letter
  const arr = []
  
  for (let i = 0; i < str.length; i++) {
    //if the letter's new, add an empty element for it
    if (letter !== str[i]) {
      letter = str[i]
      arr.push([0, letter])
    }
    //increment this letter's score
    arr[arr.length - 1][0]++
  }
  
  return arr
}

// https://www.codewars.com/kata/546dba39fa8da224e8000467

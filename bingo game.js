function bingo(a) {
  a = a.map(num => String.fromCharCode(96 + num))
  return ['b','i','n','g','o'].every(letter => a.includes(letter)) ? 'WIN' : 'LOSE'
}

// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145

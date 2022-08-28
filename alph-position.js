function alphabetPosition(text) {
	  let chars = 'abcdefghijklmnopqrstuvwxyz'
	  return text.split('').filter(char => chars.includes(char.toLowerCase()))
	  .map(char => chars.indexOf(char.toLowerCase()) + 1)
	  .join(' ')
}

// https://www.codewars.com/kata/546f922b54af40e1e90001da

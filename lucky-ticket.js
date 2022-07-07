function luckCheck(ticket){
	  const sum = inputStr => inputStr.split('').reduce((acc, num) => acc + +num, 0)
	  const halfSize = Math.floor(ticket.length / 2)
	  const firstHalf = ticket.slice(0, halfSize)
	  const secondHalf = ticket.slice(ticket.length - halfSize)
	  return sum(firstHalf) === sum(secondHalf)
}

// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

function solution(start, finish) 
{
	  let jumps = 0
	  jumps += Math.floor((finish - start) / 3)
	  jumps += ((finish - start) % 3)
	  return jumps
}

// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

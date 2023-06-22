isTriangle(a,b,c)
{
	   const items = [a, b, c].sort((a, b) => a - b)
	   return items[0] + items[1] > items[2]
}

// https://www.codewars.com/kata/56606694ec01347ce800001b

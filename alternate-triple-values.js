function f(x, cc) { 
	  const arr = [cc.a, cc.b, cc.c]
	  return arr[(arr.indexOf(x) + 1) % 3]
}

// https://www.codewars.com/kata/596776fbb4f24d0d82000141

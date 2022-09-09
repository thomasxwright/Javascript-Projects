function isValidWalk(walk) {
	if (walk.length !== 10) return false
	  const wCount = walk.filter(dir => dir === 'w').length
	  const eCount = walk.filter(dir => dir === 'e').length
	  const nCount = walk.filter(dir => dir === 'n').length
	  const sCount = walk.filter(dir => dir === 's').length
	  return wCount === eCount && sCount === nCount
}

// https://www.codewars.com/kata/54da539698b8a2ad76000228 

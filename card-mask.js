function maskify(cc) {
	  let masked = cc.length - 4 > 0 ? '#'.repeat(cc.length - 4) : ''
	  return `${masked}${cc.substr(-4)}`
}

// https://www.codewars.com/kata/5412509bd436bd33920011bc

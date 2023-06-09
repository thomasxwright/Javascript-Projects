function longestConsec(strarr, k) {
	  if (k < 1 || strarr.length < k) return ''
	  let longestConjoinedStr = ''
	  for (let i = 0; i <= strarr.length - k; i++) {
		      const str = strarr.slice(i, i+k).join('')
		      if (str.length > longestConjoinedStr.length)
			        longestConjoinedStr = str
		    }
	  return longestConjoinedStr
}

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

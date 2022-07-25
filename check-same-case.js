function sameCase(a, b){
	  const caseA = getCase(a)
	  const caseB = getCase(b)
	  if (caseA === 'no' || caseB === 'no') return -1
	  return caseA === caseB ? 1 : 0
}

function getCase (letter) {
	  if (Boolean(letter.match(/[A-Z]/))) return 'upper'
	  if (Boolean(letter.match(/[a-z]/))){ return 'lower'}
	  return 'no'
}

// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

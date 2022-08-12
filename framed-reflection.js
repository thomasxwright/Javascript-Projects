function mirror(text){
	  if (text === '') return ''
	  let lines = text.split(' ')
	  const mirrorLength = lines.reduce((max, cur) => cur.length > max ? cur.length : max, 0)
	  lines = lines.map(line => line.split('').reverse().join('') + ' '.repeat(mirrorLength - line.length))
	  
	  let output = ''
	  
	  const mirrorTop = '*'.repeat(mirrorLength + 4)
	  output += mirrorTop + '\n'
	  output += lines.map(line => `* ${line} *`).join('\n') + '\n'
	  output += mirrorTop
	  return output
}

// https://www.codewars.com/kata/581331293788bc1702001fa6

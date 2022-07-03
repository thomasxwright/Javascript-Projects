function cipherText(plainText) {
	  plainText = plainText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
	  const sqrt = plainText.length ** 0.5
	  const rowLength = Math.ceil(sqrt)
	  const columnLength = Math.floor(sqrt)
	  
	  const chunks = []
	  for (let i = 0; i < plainText.length; i += rowLength) {
		      chunks.push(plainText.slice(i, i+rowLength))
		    }
	  
	  let lastRow = chunks[chunks.length - 1]
	  if (lastRow && lastRow.length < rowLength)
		    chunks[chunks.length - 1] += ' '.repeat(rowLength - lastRow.length)
	  
	  
	  let finalString = []
	  for (let i = 0; i < rowLength; i++) {
		      const jumbledColumn = chunks.reduce((acc, row) => acc + row[i], '')
		      finalString.push(jumbledColumn)
		    }
	  return finalString.join(' ')
}

// https://www.codewars.com/kata/60d6f2653cbec40007c92755/

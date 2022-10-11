function DNAStrand(dna){
	  const opposites = {
		      A: 'T',
		      T: 'A',
		      G: 'C',
		      C: 'G'
		    }
	  return dna.split('').map(letter => opposites[letter]).join('')
}

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

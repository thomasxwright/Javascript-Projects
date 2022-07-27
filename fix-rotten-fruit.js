function removeRotten(bagOfFruits){
	  if (!bagOfFruits) return []
	  return bagOfFruits.map(fruit => fruit.replace(/rotten/g, '').toLowerCase())
}

// https://www.codewars.com/kata/557af4c6169ac832300000ba

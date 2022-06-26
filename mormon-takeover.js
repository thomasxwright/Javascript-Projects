function Mormons(startingNumber, reach, target){
  return startingNumber > target ? 0 : 1 + Mormons(startingNumber * (1+ reach), reach, target)
}

// https://www.codewars.com/kata/58373ba351e3b615de0001c3

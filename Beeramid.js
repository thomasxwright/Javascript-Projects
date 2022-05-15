// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let beers = Math.floor(bonus / price)
  let levels = 0
  while (beers >= 0) {
    levels++
    beers -= levels ** 2
  }
  return levels === 0 ? 0 : levels - 1
}

//https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/javascript

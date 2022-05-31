function billboard(name, price = 30){
  let times = name.length
  let cost = 0
  
  while (times > 0) {
    cost += price
    times--
  }
  return cost
}

// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

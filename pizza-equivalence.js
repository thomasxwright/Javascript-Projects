function howManyPizzas(n) {
  const pizzaSize8 = 16
  const pizzaSizeN = (n / 2) ** 2
  let howMany8InchPizzas = pizzaSizeN / pizzaSize8
  return `pizzas: ${Math.floor(howMany8InchPizzas)}, slices: ${Math.round((howMany8InchPizzas % 1) * 8)}`
}

// https://www.codewars.com/kata/599bb194b7a047b04d000077

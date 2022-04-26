function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
let x = 0, y = 1
  for (let i = 1; i < n; i++) {
    let tempStorage = x
    x = y
    y += tempStorage
  }
  return x
}

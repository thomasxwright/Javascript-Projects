function perimeter(n) {
  let n1 = 0, n2 = 1, nextTerm
  for (let i = 0; i < n + 2; i++) {
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }
  return (nextTerm -1) * 4
}

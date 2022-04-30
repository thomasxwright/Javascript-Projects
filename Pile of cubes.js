function findNb(m) {
    let volumesSum = 0, level = 0
    while (volumesSum < m) {
      level++
      volumesSum += level ** 3
    }
  if (volumesSum === m)
    return level
  return -1
}

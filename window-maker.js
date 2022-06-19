function makeAWindow(num) {
    const end = `---${'-'.repeat(num*2)}`
    let row = `|${'.'.repeat(num)}|${'.'.repeat(num)}|`
    const middle = `|${'-'.repeat(num)}+${'-'.repeat(num)}|`

    let segment = []
    while (num > 0) {
      segment.push(row)
      num--
    }
  
  return [end,
         ...segment,
         middle,
         ...segment,
         end]
  .join('\n')
}

// https://www.codewars.com/kata/59c03f175fb13337df00002e

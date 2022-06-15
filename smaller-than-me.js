function smaller(nums) {
  return nums.reduce((acc, headingItem, i) => {
    const subsequentItems = nums.slice(i+1)
    const score = subsequentItems.reduce((acc, num) => {
      return num < headingItem ? acc + 1 : acc
    }, 0)
    return acc.concat(score)
  }, [])
}

// https://www.codewars.com/kata/56a1c074f87bc2201200002e

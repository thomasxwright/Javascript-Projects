function sumIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  
  let condensedIntervals = []
  let leadingInterval = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const comparisonInterval = intervals[i]
    if (comparisonInterval[0] <= leadingInterval[1])
      leadingInterval[1] = Math.max(leadingInterval[1], comparisonInterval[1])
    else {
      condensedIntervals.push(leadingInterval)
      leadingInterval = comparisonInterval
    }
  }
  condensedIntervals.push(leadingInterval)
  return condensedIntervals.reduce((acc, interval) => acc + interval[1] - interval[0], 0)
}

// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function maxBall(v0) {
  v0 = kmPerHourToMPerSecond(v0)
  let height = 0, nextHeight = 0
  let t = 0
  
  do {
    t += 1
    height = nextHeight
    nextHeight = calcHeight(v0, t/10)
  } while(height < nextHeight)
    
    return t - 1
}

function calcHeight(v0, time) {
  return v0 * time - 0.5 * time * time * 9.81
}

function kmPerHourToMPerSecond (speed) {
  return speed / 60     //60 minutes per hour
               / 60     //60 seconds per minute
               * 1000   //1000 meters per km
}

// https://www.codewars.com/kata/566be96bb3174e155300001b

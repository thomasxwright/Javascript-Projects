
function runningPace(distance, time){
  time = +time.split(':')[0] + +time.split(':')[1]/60
  const pace = time / distance
  
  const minutes = Math.floor(pace)
  const seconds = `0${Math.floor((pace%1) * 60 + 0.000001)}`.slice(-2)
  return `${minutes}:${seconds}`
}

// https://www.codewars.com/kata/578b8c0e84ac69a4d20004c8

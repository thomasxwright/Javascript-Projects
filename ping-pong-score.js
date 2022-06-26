function pingPong(sounds) {
  const rounds = sounds.match(/(ping-|pong-)+(?!=(pong|ping))/g).map(round => round.slice(0, round.length - 1))
  let ping = 0, pong = 0, didNotMessUp
  rounds.forEach(round => {
    let turns = round.split('-')
    if (turns[0] === 'ping' && turns[turns.length-1] === 'pong')
      ping++
    else if (turns[0] === 'pong' && turns[turns.length - 1] === 'ping')
      pong++
    didNotMessUp = turns[turns.length - 1] === 'ping' ? 'pong' : 'ping'
  })
  if (ping > pong)
    return 'ping'
  else if (pong > ping)
    return 'pong'
  else return didNotMessUp
}

// https://www.codewars.com/kata/5ea39ab1d8425e0029fcd035

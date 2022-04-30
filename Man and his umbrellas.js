function minUmbrellas(weather) {
  let umbrellas = [0, 0]
  
  weather.forEach( (walk, i) => {
    if (walk === 'rainy' || walk === 'thunderstorms') {
      const comingFrom = i % 2
      const goingTo = (i + 1) % 2
      umbrellas[goingTo]++
      if (umbrellas[comingFrom]) umbrellas[comingFrom]--
    }
  })
  return umbrellas[0] + umbrellas[1] 
}

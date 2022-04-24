function escape(carpark){
  let currentFloor = carpark.findIndex (floor => floor.includes(2))
  let currentColumn = carpark[currentFloor].findIndex(spot => spot === 2)
  const numFloors = carpark.length
  const directions = []
  
  carpark[numFloors - 1][carpark[0].length - 1] = 1
  
  
  
  let processRow = startingPointOnThisFloor => {
    const floor = carpark[currentFloor]
    const destinationIndex = floor.findIndex(spot => spot === 1)
    currentColumn = destinationIndex
    if (startingPointOnThisFloor < destinationIndex)
      return {'direction': 'R', 'distance': destinationIndex - startingPointOnThisFloor}
    else return {'direction': 'L', 'distance': startingPointOnThisFloor - destinationIndex}
  }


  let goDownstairs = startingPointOnThisFloor => {
    if (currentFloor + 1 === numFloors)
      return 0
    currentFloor++
    const row = carpark[currentFloor]
    const destinationIndex = row.findIndex(spot => spot === 1)
    if (startingPointOnThisFloor === destinationIndex)
      return 1 + goDownstairs(destinationIndex)
    else
      return 1
  }
  
  
  while (currentFloor < numFloors) {
    const whereToDriveHorizontally = processRow(currentColumn)
    if (whereToDriveHorizontally.distance > 0)
      directions.push(`${whereToDriveHorizontally.direction}${whereToDriveHorizontally.distance}`)
    
    if (currentFloor === numFloors - 1)
      return directions
    
    const howManyTimesToGoDownstairs = goDownstairs(currentColumn)
    directions.push(`D${howManyTimesToGoDownstairs}`)
  }
  
  return directions
  
}

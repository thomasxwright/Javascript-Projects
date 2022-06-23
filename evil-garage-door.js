function door(events) {
  let doorPosition = 0
  let direction = 1
  let inMotion = false
  let returnString = ''
  
  let moveDoor = () => {
    doorPosition += direction
    if (doorPosition === 0 || doorPosition === 5) {
      direction *= -1
      inMotion = false
    }
  }
  
  for (const instruction of events) {
    switch (instruction) {
        case 'P':
        inMotion = !inMotion
        if (inMotion) {
          moveDoor()
        }
        break;
        
        case 'O':
        if (inMotion) {
          direction *= -1
          moveDoor()
        }
        break;
        
        case '.':
        if (inMotion) {
          moveDoor()
        }
        break;
    }
    returnString += doorPosition
  }
  return returnString
}

// https://www.codewars.com/kata/58b1ae711fcffa34090000ea

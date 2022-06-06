let montyHall = (correctDoorNumber, participantGuesses) => Math.round(100 * participantGuesses.filter(guess => guess !== correctDoorNumber).length / participantGuesses.length)


// https://www.codewars.com/kata/54f9cba3c417224c63000872

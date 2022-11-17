let montyHall = (correctDoorNumber, participantGuesses) => Math.round(100 * participantGuesses.filter(guess => guess !== correctDoorNumber).length / participantGuesses.length)

//monty hall problem is the commonly misunderstood statistics game where one door of three contains a prize. after picking one door, one of the two remaining doors is revealed as false, and the player is then given the option to swap again.

// https://www.codewars.com/kata/54f9cba3c417224c63000872

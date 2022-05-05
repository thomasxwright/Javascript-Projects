class Vehicle {
    constructor (hourlyRate, dailyRate, perMileRate) {
        this._hourlyRate = hourlyRate
        this._dailyRate = dailyRate
        this._perMileRate = perMileRate
    }
    get hourlyRate() {return this._hourlyRate}
    get dailyRate() {return this._dailyRate}
    get perMileRate() {return this._perMileRate}


    getFee(rentalDuration, unitsOfRental) {
        if (unitsOfRental === 'hourly') return rentalDuration * this._hourlyRate
        if (unitsOfRental === 'daily') return rentalDuration * this._dailyRate
        if (unitsOfRental === 'per mile') return rentalDuration * this._perMileRate
    }
}

let vehicles = {'bus': new Vehicle(13, 100, .5),
                'partyBus': new Vehicle(60, 300, 1),
                'sailboat': new Vehicle(60, 350, 3),
                'air balloon': new Vehicle(150, 950, 200)
}

let vehicleType = document.querySelector('whatever').value
let durationOfRental = document.querySelector('idk what it is').value
let unitsOfRental = document.querySelector('[whatever it is]').value

const fee = vehicles[vehicleType].getFee(durationOfRental, unitsOfRental)
alert(`you're gonna be paying ${fee} dollars`)

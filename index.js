// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length -2, drivers.length)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return multiplier * fare
    }
}

let innerFareFunction = createFareMultiplier(5)
let finalFare = innerFareFunction(6)

let fare = createFareMultiplier(3)(2)

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, selectFunction) => {
    let result = selectFunction(drivers) 
return result
}
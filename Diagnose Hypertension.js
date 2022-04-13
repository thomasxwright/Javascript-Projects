let hasHypertension = input => {
  input = input.map(bloodPressure => bloodPressure.split('/'))
  let averageSystolic = input.reduce((acc, bloodPressure) => Number(bloodPressure[0]) + acc, 0)/input.length
  if (averageSystolic >= 140 && input.length > 1)
    return true
  let averageDiastolic = input.reduce((acc, bloodPressure) => Number(bloodPressure[1]) + acc, 0)/input.length
  if (averageDiastolic >= 90 && input.length > 1)
    return true
  return Boolean(input.find(reading => Number(reading[0]) >= 180 && Number(reading[1]) >= 110))
}

let hypertensive = function(patients) {
  return patients.reduce((tally, patient) => tally + hasHypertension(patient), 0)
}

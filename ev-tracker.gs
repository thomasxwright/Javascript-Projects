var sheet = SpreadsheetApp.getActiveSheet();

function onEdit(e) {
  for (let i = 1; i < 300; i++) {
    let cell = sheet.getRange(i, 1).getValue()
    if (cell.includes("Nature")) {
      sheet.getRange(i, 1).setValue(getName(cell))
      const evs = getEVs(cell)
      evs.forEach((ev, j) => {
        if (ev > 0) sheet.getRange(i, 2+j).setValue(ev)
      })
      sheet.getRange(i, 8).setValue(getNature(cell))
      sheet.getRange(i, 9).setValue(getAbility(cell))
      sheet.getRange(i, 10, 1, 4).setValues(getMoveset(cell))
    }
  }
}

function getName(data) {
  const nameLine = data.split('\n')[0].trim()
  if (!nameLine.includes('@')) return nameLine
  return nameLine.substring(0, nameLine.indexOf('@') - 1)
}
  
function getNature(data) {
  let natureLine = data.split('\n').find(line => line.includes('Nature'))
  return natureLine.split(' ')[0]
}

function getAbility(data) {
  let natureLine = data.split('\n').find(line => line.includes('Ability: '))
  return natureLine.substr(9)
}

function getEVs(data) {
  const valuePositions = { HP: 0, Atk: 1, Def: 2, SpA: 3, SpD: 4, Spe: 5 }
  const evs = [0, 0, 0, 0, 0, 0]
  let evsLine = data.split('\n').find(line => line.includes('EVs:'))
  .substr(5)
  .split(' / ')

  evsLine.forEach(stat => {
    const [evTarget, statName] = stat.split(' ')
    evs[valuePositions[statName]] = +evTarget
  })
  return evs
}

function getMoveset(data) {
  const moves = []
  for (let line of data.split('\n')) {
    if (line.substring(0, 2) === '- ')
    moves.push(line.substr(2))
  }
  return [moves]
}
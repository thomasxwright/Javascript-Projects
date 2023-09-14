// https://www.codewars.com/kata/5f885fa9f130ea00207c7dc8

function loneliest(str) {
    str = str.trim()

    let spacingList = str.trim()
        .match(/ +|[a-z]/g)
        .map(result => result.trim() === '' ? result.length : result)

    let winners = [], record = 0

    for (let i = 0; i < spacingList.length; i++) {
        if (typeof spacingList[i] === 'number') continue
        let size = 0
        if (typeof spacingList[i - 1] === 'number')
            size += spacingList[i - 1]
        if (typeof spacingList[i + 1] === 'number')
            size += spacingList[i + 1]

        if (size > record) {
            record = size
            winners = [spacingList[i]]
        }
        else if (size === record)
            winners.push(spacingList[i])
    }
    return winners
}
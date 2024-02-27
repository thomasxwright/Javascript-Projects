function longestPalindrome(str) {
    str = str.toLowerCase()

    let tally = {}
    for (let i of str) {
        if (!i.match(/[0-9a-z]/g)) continue
        tally[i] = tally[i] ? tally[i] + 1 : 1
    }

    let total = 0
    const sortedTally = Object.entries(tally).sort((a, b) => b[1] - a[1])

    for (let letter of sortedTally) {
        if (letter[1] % 2 === 0
            || total % 2 === 0)
            total += letter[1]
        else
            total += letter[1] - 1
    }
    return total
}
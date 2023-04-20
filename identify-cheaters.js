function findHack(arr) {
	    const gradeScores = {
		            A: 30,
		            B: 20,
		            C: 10,
		            D: 5
		        }

	    return arr
	        .filter(([name, allegedScore, grades]) => {
			            let bonus = grades.length >= 5

			            const baseScore = grades
			                .reduce((acc, cur) => {
						                    if (bonus && gradeScores[cur] < 20 || !gradeScores[cur])
							                        bonus = false
						                    return acc + (gradeScores[cur] || 0)
						                }, 0)
			            const totalScore = Math.min(200, baseScore + (bonus ? 20 : 0))
			            return totalScore !== allegedScore
			        })
	        .map(cheater => cheater[0])
}

// https://www.codewars.com/kata/59f70440bee845599c000085

function wave(str){
	  const wave = []
	  for (let i = 0; i < str.length; i++) {
		      if (str[i] === ' ') continue
		      let word = str.substr(0, i) + str[i].toUpperCase() + str.substr(i+1)
		      wave.push(word)
		    }
	  return wave
}

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

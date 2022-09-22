function likeOrDislike(buttons) {
	  let state = "Nothing"
	  for (let i = 0; i < buttons.length; i++) {
		      const next = buttons[i]
		      if (state === next) {
			            state = "Nothing"
			          }
		      else state = next
		    }
	  return state
}

// https://www.codewars.com/kata/62ad72443809a4006998218a

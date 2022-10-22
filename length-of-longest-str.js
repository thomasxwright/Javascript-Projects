var lengthOfLongestSubstring = function(s) {  let recordLength = 0

	  for (let i = 0; i < s.length; i++) {
		      let letters = {}
		      let substr = s.slice(i)
		      let segmentLength = 0
		      for (let j = 0; j < substr.length; j++) {
			            if (letters[substr[j]]){
					            segmentLength = j
					            break
					          }
			            letters[substr[j]] = true
			          }
		      if (segmentLength === 0)
			        segmentLength = substr.length
		      if (segmentLength > recordLength)
			        recordLength = segmentLength
		    }
	  return recordLength
}

// https://leetcode.com/problems/longest-substring-without-repeating-characters

function countPhotos(road){
	  road = road.split('.')
	  let photos = 0
	  const numSegments = road.length
	  road.forEach((data, segment) => {
		      for (let char of data) {
			            if (char === '>') photos += numSegments - segment - 1
			            else if (char === '<') photos += segment
			          }
		    })
	  return photos
}

// https://www.codewars.com/kata/6319dba6d6e2160015a842ed

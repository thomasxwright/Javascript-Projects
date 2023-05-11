function travel(r, zipcode) {
	    const places = r.split(',')
	    .filter (address => {
		          return address.substr(-8) === zipcode
		        })
	  
	  const streetNames = places.map(address => {
		      const split = address.split(' ')
		      return split.slice(1, split.length - 2).join(' ')
		    })
	  const streetNums = places.map(address => address.match(/[0-9]+/))
	  
	  return `${zipcode}:${streetNames.join(',')}/${streetNums.join(',')}`
}

// https://www.codewars.com/kata/56af1a20509ce5b9b000001e

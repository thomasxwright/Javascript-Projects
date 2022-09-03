function compareVersions (version1, version2) {
	  version1 = version1.split('.').map(num => +num)
	  version2 = version2.split('.').map(num => +num)
	  let numEntries = Math.max(version1.length, version2.length)
	  for (let i = 0; i < numEntries; i++) {
		      if (version1[i] > version2[i]) return true
		      if (version1[i] < version2[i]) return false
		    }
	  return version1.length >= version2.length ? true : false
}

// https://www.codewars.com/kata/53b138b3b987275b46000115

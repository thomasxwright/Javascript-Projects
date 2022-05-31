function remove (string) {
  return string.split(' ').filter(word => word.split('!').length !== 2).join(' ')
}

// https://www.codewars.com/kata/57fafb6d2b5314c839000195

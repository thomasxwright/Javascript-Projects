function getMiddle(s)
{
  let pos = Math.floor(s.length/2)
  if (s.length % 2)
    return s[pos]
  return s.slice(pos - 1, pos+1)
}

// https://www.codewars.com/kata/56747fd5cb988479af000028

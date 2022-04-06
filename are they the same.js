function comp(array1, array2){
  if (array1 == null || array2 == null || array1.length !== array2.length)
    return false
  array1.sort((a,b)=>a-b)
  array2.sort((a,b)=>a-b)
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] ** 2 !== array2[i])
      return false
  }
  return true
}

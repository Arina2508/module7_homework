function checkProperty(a, b) {
 
  
  if (a in b) {
    return true
  } else return false
}
console.log(checkProperty("asd", {asd:1, c:2}))

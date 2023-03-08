
function factorial(n) {
  let value = n
  switch (n) {
    case 0:
      return 1
    default:
      for (let a = 1; a < (n - 1); a++) {
        value = value * (n - a)
      }
      return value
  }
}
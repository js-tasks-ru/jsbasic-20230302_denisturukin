function checkSpam(str) {
  str = str.toUpperCase();
  if (str.includes('1XBET')) {
    return true
  } else if (str.includes('XXX')) {
    return true
  } else {
    return false
  }
}
// Да, не очень изящно, зато работает
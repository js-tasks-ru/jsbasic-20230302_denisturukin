function getMinMax(str) {
  let arr = str
    .split(' ')
    .map(item => +item)
    .filter(item => !Number.isNaN(item));
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  }
}

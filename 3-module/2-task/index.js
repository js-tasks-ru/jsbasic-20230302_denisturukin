function filterRange(arr, a, b) {
  const result = arr.filter((n) => a <= n && n <= b)
  return result
}

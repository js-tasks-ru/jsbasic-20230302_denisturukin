function ucFirst(str) {
  switch (str) {
    case "":
      return str
    default:
      return str[0].toUpperCase() + str.slice(1)
  }
}
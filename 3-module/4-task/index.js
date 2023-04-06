function showSalary(users, age) {
  let user = users.filter(item => item.age <= age)
    .map((item) => [item.name, ' ' + item.balance + '\n'])
    .join('')
  return user.substring(0, user.length - 1)
}

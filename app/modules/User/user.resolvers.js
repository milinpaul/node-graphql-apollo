const users = [
  {
    name: 'milin',
    email: 'milin.paul@gmail.com',
    username: 'milinpaul'
  },
  {
    name: 'anju',
    email: 'anju.mathew@gmail.com',
    username: 'anjumathew'
  }
]

module.exports = {
  Query: {
    users: () => users,
    user: (parent, { name }, context, info) => users.find((item) => item.name === name)
  }
}

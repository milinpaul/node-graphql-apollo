const UserModel = require('../../models/User')

const getAllUsers = async () => {
  return await UserModel.find({})
}

const createUser = async (parent, { user }, context, info) => {
  try {
    const newUser = await UserModel.create(user)
    return newUser
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  Query: {
    users: getAllUsers,
    user: (parent, { name }, context, info) => users.find((item) => item.name === name)
  },
  Mutation: {
    createUser
  }
}

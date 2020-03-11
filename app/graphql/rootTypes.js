const { gql } = require('apollo-server-express')

const userTypes = require('../modules/User/user.types')

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`

const rootTypes = [root, userTypes]

module.exports = rootTypes

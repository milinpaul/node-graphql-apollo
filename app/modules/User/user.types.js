const { gql } = require('apollo-server-express')

module.exports = gql`
  type User {
    name: String
    username: String
    email: String
  }

  extend type Query {
    users: [User!]!
    user(name: String!): User
  }
`

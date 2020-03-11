const { gql } = require('apollo-server-express')

module.exports = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }

  extend type Query {
    users: [User!]!
    user(name: String!): User
  }

  input UserParams {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  extend type Mutation {
    createUser(user: UserParams): User!
  }
`

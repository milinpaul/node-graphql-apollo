const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./rootTypes')
const resolvers = require('./rootResolvers')

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
})

const setGraphqlMiddleware = (app) =>
  graphqlServer.applyMiddleware({
    app
  })

module.exports = setGraphqlMiddleware

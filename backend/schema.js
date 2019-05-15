
//const { buildSchema } = require('graphql')
const  resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

// Main type
const typeDefs = `
  type Query {
    name: String
    number: Int
    people(id: String!): String
    sample: [Sample]
    swapi: Swapi
  }

  type Swapi {
    count: Int
    results: [Results]
  }

  type Results {
    name: String!
    height: String
  }
  # Sample type 
  type Sample {
    name: String
  }
`

// Export the query type and the resolvers
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})
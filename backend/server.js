const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const express = require('express')
const app = express()

const PORT = 8080

// graphql middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

// Server listener
app.listen(PORT)
console.log(`Server running on http://localhost:${PORT}`)
console.log(`Graphql running http://localhost:${PORT}/graphql`)

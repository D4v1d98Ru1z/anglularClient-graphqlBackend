const fetch = require('node-fetch')
const sample = require('./sample')

const resolvers = {
  Query: {
    name: () => (
      'Hello GraphQL'
    ),
    number: () => ('2'),
    /**
     * the function has two parameters 
     * @param {root} 
     * @param {args} gets the value from the schema
     */
    people: async (root, args) => {
      // get the data from SWAPI
      const req = await fetch(`https://swapi.co/api/people/${args.id}`)
      const json = await req.json()
      return json.name
    },
    sample: () => (
      sample
    ),
    swapi: async () => {
      const req = await fetch(`https://swapi.co/api/people/`)
      const json = await req.json()
      return json
    }
  },
  Swapi: {
    results: async () => {
      const req = await fetch(`https://swapi.co/api/people/`)
      const json = await req.json()
      return json.results
    }
  }
}

module.exports = resolvers
const hello = require('./hello')
const merge = require('lodash/merge')

module.exports = {
  typeDefs: [
    hello.typeDefs,
  ].join(' '),
  resolvers: merge({}, hello.resolvers)
}
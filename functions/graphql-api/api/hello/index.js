module.exports = {
    resolvers: require('./hello.resolvers'),
    typeDefs: require('../../utils/gqlLoader')('hello/hello.graphql'),
  }
const serverless = require("serverless-http");
const path = require('path');
const { GraphQLServerLambda } = require('graphql-yoga');
const gqlServerConfig = require('./api');

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true
}

const server = new GraphQLServerLambda(gqlServerConfig)

// server.start(serverOptions, ({port}) => console.log(`Server on port ${port}`))

exports.handler = server.handler
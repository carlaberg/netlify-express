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

exports.handler = server.handler
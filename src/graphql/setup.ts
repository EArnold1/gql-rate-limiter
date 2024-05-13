import { makeExecutableSchema } from '@graphql-tools/schema';
import TYPE_DEFS from './gql-types';
import { AppResolver } from './resolver';
import { ApolloServer } from '@apollo/server';

let schema = makeExecutableSchema({
  typeDefs: TYPE_DEFS, // type definitions
  resolvers: [AppResolver],
});

// setup apollo server
const server = new ApolloServer({
  schema,
});

export default server;

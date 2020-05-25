import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Type definition for Book

  # Type definition of resolvers
  type Query {
    hello: String
  }
`;

export const resolvers = {
  // Resolver implementation
  Query: {
    hello: () => 'Hello WTM Manila',
  },
};

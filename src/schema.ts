import { gql } from 'apollo-server-express';
import Books from './models/book';

export const typeDefs = gql`
  # Type definition for Book
  type Book {
    id: ID
    isbn: String
    name: String
    author: String
    year: Int
  }
  # Type definition of resolvers
  type Query {
    books: [Book]
    bookById(id: String!): Book
  }
`;

export const resolvers = {
  // Resolver implementation
  Query: {
    books: async () => await Books.find(),
    bookById: async (parent: any, { id }: any, context: any, info: any) =>
      await Books.findById(id),
  },
};

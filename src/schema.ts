import { gql } from 'apollo-server-express';

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    year: 1998,
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    year: 1990,
  },
];

export const typeDefs = gql`
  # Type definition for Book
  type Book {
    title: String
    author: String
    year: Int
  }
  # Type definition of resolvers
  type Query {
    books: [Book]
  }
`;

export const resolvers = {
  // Resolver implementation
  Query: {
    books: () => books,
  },
};

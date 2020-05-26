import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import setupDatabase from './config/mongoose';
import { typeDefs, resolvers } from './schema';

const setupServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await setupDatabase();

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
};

setupServer();

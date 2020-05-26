# GraphQL backend with TypeScript.

This is code repository for my session on same name. This will be used in the Hands-on session to teach participants about implementation.

## Some of cool open-source projects we are using to accomplish this.

- [Node.js](https://nodejs.org/).
- [TypeScript](https://www.typescriptlang.org/).
- [Apollo GraphQL Server](https://github.com/apollographql/apollo-server).
- [TypeGraphQL](https://typegraphql.com/).
- [Typegoose](https://typegoose.github.io/typegoose/).
- [Yarn](https://classic.yarnpkg.com/lang/en/).

> Note: You need to have Node version greater than 10.15+ to run this. Latest LTS version is recommended.

### How to start with project.

- Clone the project.
- Open terminal in project root and run `yarn` to install dependencies.
- Type `yarn dev` to start server.

### Setting up database

- Create [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (Free).
- Create a cluster of AWS provider in Singapore region.
- Allow the 0.0.0.0/0 IP for development.
- Get the user and password and get your connection URL.
- Copy `.env.example` as `.env`.
- Update `MONGODB_URI` to your connection URL.
- Restart the server.
- To Run seeds run `yarn seed`.

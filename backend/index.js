const { GraphQLServer } = require("graphql-yoga");
const Query = require("./src/resolvers/Query");
const Mutation = require("./src/resolvers/Mutation");
const isAuth = require("./src/middleware/is-auth");

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({ ...req })
});

const options = {
  port: 4000,
  endpoint: "/graphql",
  playground: "/playground"
};

server.use(isAuth);

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);

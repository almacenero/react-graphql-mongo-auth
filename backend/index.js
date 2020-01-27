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

// server.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   next();
// });

server.use(isAuth);

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);

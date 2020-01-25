const hello = (_, { name }) => `Hello ${name || "World"}`;
module.exports = { hello };

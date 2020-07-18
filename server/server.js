const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');



// Initialize the app
const app = express();



// Start the server
app.listen(4000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});
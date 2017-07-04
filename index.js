import express from 'express';
import mongoose from 'mongoose';
import graphQLHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

mongoose.connect('mongodb://gotadmin:campus2017@ds011715.mlab.com:11715/got_api');
const db = mongoose.connection;

db.on('error',() => console.log("Failed to conect to database"))
    .once('open', () => console.log("Connected to the database"))

app.get('/',(req,res) => {
    res.send("Hello World from Graph API");
});

//GraphQL endpoint 

app.use('/graphql', graphQLHTTP(() => ({
    schema,
    graphiql:true,
    pretty:true
})))

app.listen(3000,() => {
    console.log("The magic starts on 3000 port")
})
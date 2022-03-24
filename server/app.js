const cors = require('cors');
const express   = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();


const URI = "mongodb://localhost:27017/graphql"
mongoose.connect(URI);
mongoose.connection.once('open', ()=>{
  console.log("Connected to database");
})

app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql : true
}));

app.get("/", (req, res)=>{
  res.send("Hello world")
});

app.listen( 4000 ,()=>{
  console.log("Server ready at", "http://localhost:4000");
});
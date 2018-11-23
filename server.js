const express = require ('express');
const MongoClient = require ('mongodb').MongoClient;
const bodyParser = require ('body-parser');

const app = express();

//specifying the port
const port = 4000;

//listening 
app.listen(port, ()=>console.log(`we're live bb at ${port}`))


const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./app/routes/api');



//setup express
const app = express();



//body parser
app.use(bodyParser.json()); 

//using routes on routes file ---- > app's middleware
app.use('/api',routes);


//specifying the port
const myPort = 4000;

//listening 
app.listen(process.env.port || myPort, ()=>console.log(`we're live bb at ${myPort}`))






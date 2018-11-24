const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./app/routes/api');
//const justify = require('./app/JustifyAlgo/justify');


//setup express
const app = express();



//body parser
app.use(bodyParser()); 

//using routes on routes file ---- > app's middleware
app.use('/api',routes);


//specifying the port
const myPort = 4000;

//listening 
app.listen(process.env.port || myPort, ()=>console.log(`we're live bb at ${myPort}`))






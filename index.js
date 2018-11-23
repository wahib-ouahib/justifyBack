const express = require ('express');
const routes = require('./app/routes/api');

//setup express
const app = express();

//using routes on routes file ---- > app's midleware
app.use('/api',routes);


//specifying the port
const myPort = 4000;

//listening 
app.listen(process.env.port || myPort, ()=>console.log(`we're live bb at ${myPort}`))






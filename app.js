const express = require ('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/api');
const mongoose = require('mongoose');

//seting up express
const app = express();

//handling the Mongoose promise connection
mongoose.Promise = global.Promise;

//Connecting to mongoose
const dbUrl = 'mongodb://wahib:'+process.env.MONGO_ATLAS_PW+'@cluster0-shard-00-00-auv4t.mongodb.net:27017,cluster0-shard-00-01-auv4t.mongodb.net:27017,cluster0-shard-00-02-auv4t.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(dbUrl,{useNewUrlParser: true});

//handling connection to Mongodb Atlas errors
mongoose.connection.on('connected', () => {    
    console.log(`mongoose connection open to dbUrl`); 
 });
 
 mongoose.connection.on('error', (err) => {    
   console.log(`mongoose connection err: `, err); 
 });

//body parser (using body whith a ContentType of text/plain)
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.text()); 
app.use(bodyParser.json()); 

//using routes on routes file form of URL/api/... (Check api.js for middleware)
app.use('/api',routes);

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})

//specifying the port
const myPort = 4000 || process.env.port;

//listening to port
app.listen(myPort, ()=>console.log(`we're live  at port ${myPort}`))






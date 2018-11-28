//Calling modules and dependencies
const express    = require ('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const routes     = require('./app/routes/api');
const mongoose   = require('mongoose');

//seting up express
const app = express();

//handling the Mongoose promise connection
mongoose.Promise = global.Promise;

//Connecting to mongoose
const dbUrl = 'mongodb://wahib:wahib123456*/-+@ds119734.mlab.com:19734/justifyback';
mongoose.connect(dbUrl,{useNewUrlParser: true});

//handling connection to Mongodb Atlas errors
mongoose.connection.on('connected', () => {    
    console.log(`mongoose connection open to dbUrl`); 
 });
 mongoose.connection.on('error', (err) => {    
   console.log(`mongoose connection err: `, err); 
 });

//using morgan
app.use(morgan('dev'));

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
const myPort = process.env.port || 8080;

//listening to port
app.listen(myPort, ()=>console.log(`we're live  at port ${myPort}`))






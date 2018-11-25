const express = require ('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/api');
const mongoose = require('mongoose');

//seting up express
const app = express();

//Connecting to mongoose
mongoose.connect('mongodb://wahib:' +process.env.MONGO_ATLAS_PW+ '@justifybackdb-shard-00-00-k2n4k.mongodb.net:27017,justifybackdb-shard-00-01-k2n4k.mongodb.net:27017,justifybackdb-shard-00-02-k2n4k.mongodb.net:27017/test?ssl=true&replicaSet=JustifyBackDB-shard-0&authSource=admin&retryWrites=true',
{
    useNewUrlParser: true
});

//body parser (using body whith a ContentType of text/plain)
app.use(bodyParser.text()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

//using routes on routes file form of URL/api/... (Check api.js for middleware)
app.use('/api',routes);

//handling errors
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next)=>{
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

//specifying the port
const myPort = 4000 || process.env.port;

//listening to port
app.listen(myPort, ()=>console.log(`we're live  at port ${myPort}`))






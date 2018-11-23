const express = require ('express');
const MongoClient = require ('mongodb').MongoClient;
const bodyParser = require ('body-parser');
const db = require('./config/db')

const app = express();

//specifying the port
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}))

//listening 

require('./app/routes')(app, {});
app.listen(port, ()=>console.log(`we're live bb at ${port}`))

MongoClient.connect(db.url, (err, database)=>{
    if (err){ return console.log(err)}
    require('./app/routes')(app, database);
    app.listen(port, ()=>console.log(`we're live bb at ${port}`))

})


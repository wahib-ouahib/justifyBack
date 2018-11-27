const express = require('express');
const router = express.Router();
const justify = require('../JustifyAlgo/justify');
const mongoose = require('mongoose');
const Texts = require('../../config/db');


//Default GET
router.get('/justify', (req,res)=>{
    console.log('GET method triggered');
    res.end("Please trigger a POST request to justify your text");
})

//Post the input (unjustified text)
router.post('/justify', (req,res)=>{
    console.log('POST method triggered'); 
    const nbrMots = string_to_array(req.body).length;
    const text = new Texts({
        //_id: new mongoose.Types.ObjectId,
        size: string_to_array(req.body).length
    })
    
    //saving data
    text.save()
    .then(result=>{
        console.log('saved ' + result);
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
       
    console.log("nbre de mots justifiés : "+nbrMots); 
    Texts.find()
        .exec()
        .then(doc => console.log('from DB' + doc)) 
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        })
            
        
    
    
    console.log('text.size = '+ text.size)
    
    console.log(`Vous pouvez encore justifier ${80000-nbrMots} mots :) .`);
    if(nbrMots<=200){
        res.send((justify.fullJustify(string_to_array(req.body),80)));
    } else {
        res.send("you should pay dawg :(");
    }
    
});



//Exporting the route   
module.exports = router

const express = require('express');
const router = express.Router();
const justify = require('../JustifyAlgo/justify');

//Default GET
router.get('/justify', (req,res)=>{
    console.log('GET method triggered');
    res.end("Please trigger a POST request to justify your text");
})

//Post the input (ujustified text)
router.post('/justify', (req,res)=>{
    console.log('POST method triggered'); 
    const nbrMots = string_to_array(req.body).length;   
    console.log("nbre de mots justifiés : "+nbrMots);   
    console.log(`Vous pouvez encore justifier ${80000-nbrMots} mots :) .`);
    //res.send(["nbre de mots justifiés:"+ nbrMots]);
    res.send((justify.fullJustify(string_to_array(req.body),80)));
    })

//Exporting the route   
module.exports = router;



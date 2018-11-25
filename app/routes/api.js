const express = require('express');
const router = express.Router();
const justify = require('../JustifyAlgo/justify');


//Default get ( ujustified text)
router.get('/justify', (req,res)=>{
    console.log('GET method triggered');
    res.end("Please trigger a POST request to justify your text");
})


//Post the input (ujustified text)
router.post('/justify', (req,res)=>{
    console.log('POST method triggered');       
    

 

   //res.send(req.length());
     
     console.log(`you still can justify ${80000-string_to_array(req.body).length} words :) .`);

     res.send((justify.fullJustify(string_to_array(req.body),80)));
    
    
    

    })

module.exports = router;



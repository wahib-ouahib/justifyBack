const express = require('express');
const router = express.Router();

//get the unjustified text
router.get('/justify', (req,res)=>{
    res.send({type :'GET'});
    res.end()
})

router.post('/justify', (req,res)=>{
    res.send({type :'POST'});
})

router.put('/justify/:id', (req,res)=>{
    res.send({type :'PUT'});
})

router.delete('/justify/:id', (req,res)=>{
    res.send({type:'DELETE'});
})


//EXPORTING THE ROUTES
module.exports = router;


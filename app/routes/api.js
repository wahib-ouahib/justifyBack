const express = require('express');
const router = express.Router();
const justify = require('../JustifyAlgo/justify');
const mongoose = require('mongoose');
const Texts = require('../../config/db');
const User = require('../../config/users')

//Default GET
router.get('/justify', (req,res)=>{
    console.log('GET method triggered');
    res.end("Please trigger a POST request to justify your text");
})

//Post route to get a TOKEN
router.post('/token', (req, res,next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user){
                res.status(409).json({
                    mesage: "mail exists"
                });
            }else{
                const user = new User({email: req.body.email});
                user.save()
                    .then(result => {
                        res.status(201).json({
                            message: 'User created'
                        });
                    })
                    .catch(next)
            }
        })
    
})

//Post the input (unjustified text)
router.post('/justify', (req, res, next)=>{
    console.log('POST method triggered'); 
    const nbrMots = string_to_array(req.body).length;
    Texts.create({size: string_to_array(req.body).length})
        .then((x)=>console.log('created doc ' + x))
        .catch(next);
    var smth = 0;
    console.log("nbre de mots justifiés : "+nbrMots); 
    Texts.find({}, (err, text) => {
        if(err){console.log(error)}
        text.map(text=>{smth+=text.size;})
        console.log('blabla' +smth);
    });
    

    //console.log('text.size = '+ x.size)
    
    console.log(`Vous pouvez encore justifier ${80000-nbrMots} mots :) .`);
    if(nbrMots<=200){
        res.send((justify.fullJustify(string_to_array(req.body),80)));
    } else {
        res.send("you should pay dawg :(");
    }
    
});



//Exporting the route   
module.exports = router

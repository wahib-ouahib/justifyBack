const express = require('express');
const router = express.Router();
const justify = require('../JustifyAlgo/justify');
const jwt = require('jsonwebtoken');
const Texts = require('../../config/db');
const User = require('../../config/users');
const verifyToken = require('../../app/verifyToken/checkToken');

//Default GET (just to inform the user to trigger a post for justifying his text)
router.get('/justify', (req,res)=>{
    console.log('GET method triggered');
    res.end("Please trigger a POST request to justify your text");
})

//Post route to get a TOKEN (Token required before anabling the text justification on api/justify route)
router.post('/token', (req, res,next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length>=1){
                res.status(409).json({
                    mesage: "mail exists"
                });
            }else{           
                const user = new User({email: req.body.email});
                const token = jwt.sign(
                    {
                        email: req.body.email
                    },
                    process.env.JWT_KEY,
                    {
                        //token expires in 24 hours
                        expiresIn: "24h"
                    }
                );
                user.save()
                    .then(result => {
                        res.status(201).json({
                            message: 'User created',
                            token
                        });
                    })
                    .catch(next)
            }    
        })
        .catch(next)
})

//Post the input (unjustified text) to justify it, condition: valid token
router.post('/justify', verifyToken, (req, res, next)=>{
    console.log('POST method triggered'); 
    Texts.create({size: string_to_array(req.body).length})
        .then((x)=>console.log('created doc ' + x))
        .catch(next);
    var y = 0; 
    Texts.find({}, (err, text) => {
        //waiting for the code to calculate the number of words used
        try{
            text.map(text=>{y+=text.size;})
        }catch(error){
            return res.status(401).json({
                message: "couldn't calculate the text's words number"
            });
        }
        //then comparing
        //compare the number of used words in unjustified texts with 80000
        if (y<80000){res.send((justify.fullJustify(string_to_array(req.body),80)))}
        else {res.send("402 Payment Required.")}
        console.log("nombre total de tous les mots justifiés : "+y);
        console.log(`Il vous reste encore ${80000-y} à justifier avant que vous devez payer`);
        });
});

//Exporting routes   
module.exports = router

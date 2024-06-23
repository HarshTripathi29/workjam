const express = require('express');
const router = express.Router();
const User = require('../db');

router.post('/signup', async function(req, res) {
    const { firstname, lastname, email, password } = req.body;


    let stored
    try{
        stored = User.create({
            firstname, lastname, email, password 
        }
   )
   if(stored){
    res.json({
        msg : "user created"
    })
}   else{
    res.json({
        msg : "user not created"
    })
}
    }catch(error){
        console.log("error signing up : ",error);
    }

});

router.post('/signin', async function(req, res){
    const {email, password} = req.body;

    let userExists
    try{
        userExists = await User.findOne({
            email,
            password
        })
        if(userExists){
            res.json({
                msg :  "user found"
            })
        }
        else{
            res.json({
                msg : "user not found"
            })
        }
    }catch(error){
        console.log("error signing in :", error);
}})

module.exports = router;

const router = require('express').Router();
const objectID = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

const User = require('../models/user.model');
const passport = require('passport');

router.route('/').get((req, res) => {
    User.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/new').post((req, res) => {
    User.findOne({"username": req.body.username})
    .then(async (item)=>{
        if(item === null)
        {
            var hashedPassword = await bcrypt.hash(req.body.password, 10)
            var newUser = new User({
                "username": req.body.username,
                "password": hashedPassword
            })
            newUser.save()
                .then(() => res.json('Item Added!'))
                .catch(err => res.status(200).json('Error: ' + err));
        
        }
        else res.json(item + 'User already exists');
    })
    .catch(err => res.status(200).json('Error: ' + err));
});

router.route('/login').post((req, res, next)=>{

   passport.authenticate('local',(err,user,info)=>{
     if(err) throw err;
     if(!user) res.json("NO user found !");
     else{
         req.logIn(user,(err)=>{
             if(err) throw err;
             res.json("Successfully Authenticated");
             console.log(req.user);
         })
     }  
   })(req, res, next);
});

module.exports = router;
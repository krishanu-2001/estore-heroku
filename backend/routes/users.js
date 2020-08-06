const router = require('express').Router();
const objectID = require('mongoose').Types.ObjectId;

const User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/new').post((req, res) => {
    var newUser = new User({
        "username": req.body.username,
        "password": req.body.password
    })

    newUser.save()
        .then(() => res.json('Item Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res)=>{

   var username = req.body.username;
   var password = req.body.password;
    
    User.findOne({"username": username, "password": password})
        .then((item)=>{
            if(item === null)
            res.json({message: "No such entry found"});
            res.json(item);
        })
        .catch((err)=>{
            res.status(400).json('Error: ' + err);
        })
});

module.exports = router;
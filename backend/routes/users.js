const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/authentication');
const User = require('../models/user.model');


router.route('/').get((req, res) => {
    User.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/new').post((req, res) => {
    User.findOne({"username": req.body.username})
    .then(async (user)=>{
        if(user === null)
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
        else res.json(user + 'User already exists');
    })
    .catch(err => res.status(200).json('Error: ' + err));
});

router.route('/login').post((req, res)=>{
    User.findOne({"username": req.body.username})
    .then(async (user)=>{
        if(user === null)
        {
            res.json({msg: "User does not exist"});
        }
        else{
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if(!isMatch){ return res.json({msg: "Password does not match"})};
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET);
            res.json({
                token,
                user
            })
        }
    })
    .catch(err => res.status(200).json('Error: ' + err)); 
});

router.route('/userInfo').post(Authenticate,async (req, res)=>{
    User.findOne({"_id": req.user_id.id})
    .then((user)=>{
        res.json({
            token: req.header('x-auth-token'),
            userInfo: user

        })
    })
})

module.exports = router;
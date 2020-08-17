const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/authentication');
const User = require('../models/user.model');
const mongoose = require("mongoose");


router.route('/').get((req, res) => {
    User.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route("/add").post((req, res) => {
    User.findOne({"username": req.body.username})
    .then(user=>{

        user.username= req.body.username;
        user.password= req.body.password;
        const basket ={
            itemname: req.body.itemname,
            price: req.body.price,
            quantity: Number(req.body.quantity),
        };

        console.log("basket");
        console.log(basket);
        user.basket.push(basket);
    
       user.save()
      .then(()=> {res.json('Item added');console.log(user.basket);})
      .catch(err => res.status(400).json('Error '+err));
  })
  .catch(err=> res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('item deleted'))
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

module.exports = router ;
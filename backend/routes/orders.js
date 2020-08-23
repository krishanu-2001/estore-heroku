const router = require('express').Router();
const User = require('../models/user.model');
const Order = require('../models/orders.model');
const mongoose = require("mongoose");
const Authenticate = require('../middleware/authentication');


router.route("/confirm").post(Authenticate,(req, res) => {

    User.findById(req.user_id)

    .then((user)=>{

        console.log(req.body);
        var newOrder = new Order({
            "user_id": req.user_id,
            "username": user.username,
            "order": req.body.orderBasket,
            "state": "Pending"
        })
        newOrder.save()
            .then(() => res.json('Order Placed'))
            .catch(err => res.status(200).json('Error: ' + err));

  })

  .catch(err=> res.status(400).json('Error: '+err));

});

router.route("/").get((req, res) =>{
    Order.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/deliver").post((req, res) => {

    console.log(req.body);
    Order.findByIdAndUpdate(req.body.orderID,{state: "Delivered"})
            .then(() => res.json('Order Delivered'))
            .catch(err => res.status(200).json('Error: ' + err));

});


module.exports = router;
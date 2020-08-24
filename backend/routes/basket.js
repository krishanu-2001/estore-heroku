const router = require('express').Router();

const User = require('../models/user.model');

const mongoose = require("mongoose");

const Authenticate = require('../middleware/authentication');



router.route("/add").post(Authenticate,(req, res) => {

    User.findById(req.user_id)

    .then((user)=>{

        let obj = req.body.newBasketItem;

        console.log(req.body);

        user.basket.push(obj);

    

       user.save()

       .then(()=> {res.json({msg: "Item Added",basket: user.basket });console.log(user.basket);})

      .catch(err => res.status(400).json('Error '+err));  

  })

  .catch(err=> res.status(400).json('Error: '+err));

});



router.route("/remove").post(Authenticate,(req, res) => {

    User.findById(req.user_id)

    .then((user)=>{

        console.log(req.body);

        var remIndex = [];
        var check=[];

        user.basket.forEach((element, index) => {

            remItem = req.body.itemname;

            exiItem = element.itemname;

            if (exiItem === remItem) {

                console.log('hi');

                //user.basket.splice(index,1);
                remIndex.push(index);

            }
            else{
                check.push(exiItem);
            }

        });
        var cnt=0;
         remIndex.forEach(element =>{
             console.log(element);
             user.basket.splice(element-cnt, 1);
             cnt++;
         });



         user.save()

         .then(()=> {res.json({msg: "Item Removed",basket: user.basket ,cnt:cnt, check:check});console.log(user.basket);})

      .catch(err => res.status(400).json('Error '+err));

           

       

  })

  .catch(err=> res.status(400).json('Error: '+err));

});



module.exports = router;

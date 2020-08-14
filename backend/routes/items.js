const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
    Item.find()
        .then((items)=>{
            res.json(items);
            console.log(items);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const itemname = req.body.itemname;
    const description = req.body.description;
    const price = Number(req.body.price);    

    const newItem = new Item({
        itemname,
        description,
        price,
    });

    newItem.save()
        .then(() => res.json('Item Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req,res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('item deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});






router.route('/adminwebsite/update/:id').post((req,res) => {
    Item.findOne({"itemname": req.params.id})
        .then(item => {
            item.itemname = req.body.itemname;
            item.description = req.body.description;
            item.price = req.body.price;

            item.save()
                .then(() => res.json('Item updated'))
                .catch(err => res.status(400).json('Error: ' + err));
            })

        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/adminwebsite/update/:id').get((req,res) => {
    Item.findOne({"itemname":req.params.id})
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/adminwebsite/add').post((req, res) => {
    Item.findOne({"itemname": req.body.itemname})
    .then(async (item)=>{
        if(item === null)
        {
            var newItem = new Item({
                "username": req.body.itemname,
                "description": req.body.description,
                'price': req.body.price,
                'quantity': req.body.quantity,
            })
            newItem.save()
                .then(() => res.json('Item Added!'))
                .catch(err => res.status(200).json('Error: ' + err));
        
        }
        else res.json(item + 'User already exists');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

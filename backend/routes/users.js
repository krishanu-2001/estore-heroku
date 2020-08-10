const router = require('express').Router();
const objectID = require('mongoose').Types.ObjectId;

const User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
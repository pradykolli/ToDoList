const express = require("express");
const router = express.Router();

// Item model
const Item = require('../../models/item');

// @route  Get api/items
// @desc   Get all items
// @access Public

router.get('/', (req , res) => {
    Item.find()
        .sort({date : -1})
        .then(items => res.json(items)) 
});

// @route  POST api/items
// @desc   Post items
// @access Public

router.post('/', (req , res) => {
    const newItem = new Item({
        name:  req.body.name
    });
    newItem.save().then(item => res.json(item));
});


// @route  Delete api/items
// @desc   Delete items
// @access Public

router.delete('/:id', (req , res) => {
    Item.findById(req.params.id)
    .then( items => items.remove()
        .then(() => res.json({success :true}))
    ).catch(err => escape.status(404).json({success: false}));
})

module.exports = router;
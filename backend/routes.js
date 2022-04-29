const express = require('express');
const router = express.Router();
const Item = require("./models/item");

// Get all items
router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json({items: items});
});
// Get one item
router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    const item = await Item.findById(req.params.id);
    res.json({item: item});
});
//create an item
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const item = new Item({
        name: name,
        description: description
    });
    console.log("item created");
    await item.save();
    res.json({message: 'Item Saved'});
});
//update an item
router.put('/', async (req, res) => {
    const { id } = req.query;
    const { name, description } = req.body;
    await Item.findByIdAndUpdate(id, {
        name: name,
        description: description
    });
    res.json({message: 'Item Updated'});
});
//delete an item
router.delete('/', async (req, res) => {
    const { id } = req.query;
    await Item.findByIdAndRemove(id);
    res.json({message: 'Item Deleted'});
});

module.exports = router;
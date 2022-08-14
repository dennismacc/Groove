const router = require('express').Router();
const { Tag, Todo, Habit } = require('../../models');
const chalk = require('chalk');

// Get all tags
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.find();
        res.json(tags);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})


// Get one tag
router.get('/:tagId', async (req, res) => {
    try {
        const tag = await Tag.findOne({ _id: req.params.tagId });
        res.json(tag);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

// Create a tag
router.post('/', async (req, res) => {
    try {
        const newTag = req.body;
        const tag = await Tag.create(newTag);
        res.status(201).json(tag);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

// Update a tag
router.put('/:tagId', async (req, res) => {
    try {
        const updatedTag = req.body;
        const tag = await Tag.findOneAndUpdate(
            { _id: req.params.tagId }, { $set: updatedTag }, { new: true }
        );
        res.status(200).json(tag);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

// Get all todos with a tag
router.get('/:tagId/todos', async (req, res) => {
    try {
        const tag = await Tag.findOne({ _id: req.params.tagId });
        // this is to get the todos that have the tagId
        const todos = await tag.Todo;
        res.status(200).json(todos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

// Get all Habit with a tag 
router.get('/:tagId/habits', async (req, res) => {
    try {
        const tag = await Tag.findOne({ _id: req.params.tagId });
        // this is to get the habits that have the tagId
        const habits = await tag.Habit;
        res.status(200).json(habits);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})

// Delete a tag
router.delete('/:tagId', async (req, res) => {
    try {
        const tag = await Tag.findOneAndDelete({ _id: req.params.tagId });
        res.status(200).json(tag);
    } catch (err) {
        console.log(chalk.red(err));
        res.status(500).json({ message: err.message });
    }
})



module.exports = router;

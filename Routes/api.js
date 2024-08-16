const express = require('express');
const router = express.Router();

const { people } = require('../data');

// GET request to fetch all people
router.get('/', (req, res) => {
    res.json(people);
});

// POST request to add a new person
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' });
    }
    res.status(201).json({ success: true, person: name });
});

// PUT request to update a person by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find(x => x.id === Number(id));
    if (!person) {
        return res.status(404).json({ succ: false, msg: `No person with the id ${id}` });
    }

    const updatedPeople = people.map(x => {
        if (x.id === Number(id)) {
            return { ...x, name }; // Spread operator to create a new object with the updated name
        }
        return x;
    });

    res.status(200).json({ succ: true, data: updatedPeople });
});

// DELETE request to remove a person by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find(p => p.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    const newPeople = people.filter(x => x.id !== Number(id));

    res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;

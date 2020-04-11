const express = require('express');

//Initialize express router
const router = express.Router();

// Routes for bootcamps
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'});
});

router.get('/:id', (req,res) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

router.post('/', (req,res) => {
    res.status(201).json({ success: true, msg: 'Created new bootcamp' });
});

router.put('/:id', (req,res) => {
    res.status(201).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(204).json({ success: true, msg: 'Delete bootcamp' });
});

module.exports = router;
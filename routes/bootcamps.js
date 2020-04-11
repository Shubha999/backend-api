const express = require('express');

// Get all conroller methods for the router
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/bootcamps');

//Initialize express router
const router = express.Router();

// Routes for bootcamps
router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports = router;
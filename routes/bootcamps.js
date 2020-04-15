const express = require('express');

// Get all conroller methods for the router
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius } = require('../controllers/bootcamps');

// Include other resource router
const courseRouter = require('./courses');

//Initialize express router
const router = express.Router();

// Re-route into other resources routers
router.use('/:bootcampId/courses', courseRouter);

// Routes for bootcamps
router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

// Route for bootcamps by distance
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

module.exports = router;
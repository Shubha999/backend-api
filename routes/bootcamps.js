const express = require('express');

// Get all conroller methods for the router
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius, bootcampPhotoUpload } = require('../controllers/bootcamps');
const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');
// Include other resource router
const courseRouter = require('./courses');
const reviewRouter = require('./reviews');

//Initialize express router
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

// Re-route into other resources routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

// Routes for bootcamps
router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(protect, authorize('publisher', 'admin'), createBootcamp);
router.route('/:id').get(getBootcamp).put(protect, authorize('publisher', 'admin'), updateBootcamp).delete(protect, authorize('publisher', 'admin'), deleteBootcamp);
router.route('/:id/photo').put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload);

// Route for bootcamps by distance
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

module.exports = router;
const express = require('express');

// Get all controller methods for the router
const { getReviews, getReview } = require('../controllers/review');
const Review = require('../models/Review');
const advancedResults = require('../middleware/advancedResults');

//Initialize express router
const router = express.Router({ mergeParams: true });
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description'
}), getReviews);

router.route('/:id').get(getReview);

module.exports = router;
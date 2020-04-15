const express = require('express');

// Get all controller methods for the router
const { getCourses } = require('../controllers/courses');

//Initialize express router
const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses);

module.exports = router;
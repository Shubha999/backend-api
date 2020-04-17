const express = require('express');

// Get all controller methods for the router
const { getCourses, getCourse, addCourse, updateCourse, deleteCourse } = require('../controllers/courses');

//Initialize express router
const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses).post(addCourse);
router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;
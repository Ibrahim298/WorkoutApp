const express = require('express');
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router();
 

//get all workouts
router.get('/', getAllWorkouts)
//get a single workouts
router.get('/:id', getSingleWorkout)
//post a workout
router.post('/', createWorkout)
//delete a workout
router.delete('/:id', deleteWorkout)
//update a workout
router.patch('/:id', updateWorkout)

module.exports = router;
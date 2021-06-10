//Require for router
const router = require('express').Router();

//Need model for workouts
const Workout = require("../models/Workout");

//Getting workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});

//Posting workouts


//Getting workouts in range





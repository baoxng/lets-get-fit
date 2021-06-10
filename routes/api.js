//Require for router
const router = require('express').Router();

//Need model for workouts
const Workout = require("../models/Workout");

//Getting workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(evt => {
                total += evt.duration;
            });
            workout.totalDuration = total;
        });   
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
    });
});

//Posting workouts
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


//Adding exercise
router.put("/api/workouts/:id", (req, res) => {

    Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
          $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
      },
      { new: true }).then(dbWorkout => {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      });

});


//Getting workouts in range

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      // .sort({ day: -1 })
      // .limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


  module.exports = router;



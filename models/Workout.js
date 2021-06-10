//Require Mongoose 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Needed for model

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: "enter an exercise"
            },
            name: {
                type: String,
                required: "enter the name of the exercise"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number,
                required: "enter length of exercise"
            },
            distance: {
                type: Number
            }

        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;

//export model
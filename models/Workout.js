const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require('./Exercise');

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: new Date()
    },

    exercises: [Exercise]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
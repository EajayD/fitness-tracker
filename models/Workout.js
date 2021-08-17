const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require('./Exercise');

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now()
    },

    exercises: [Exercise]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

mondule.exports = Workout;
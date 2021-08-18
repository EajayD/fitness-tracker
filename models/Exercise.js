const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "String is Required"
      },
    
      name: {
        type: String,
        unique: true,
        required: true
      },
    
      duration: {
        type: Number,
      },
    
      weight: {
          type: Number,
      },
    
      reps: {
          type: Number,
      },
    
      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = ExerciseSchema;
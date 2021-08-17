const router = require('express').Router();
const { Workout } = require('../../models');
const mongojs = require('mongojs');

// const databaseUrl = "workoutdb";
// const collections = ["workouts"]

// const db = mongojs(databaseUrl, collections);

router.get('/', async (req, res) => {
    Workout.aggregate([
        {$addFields: {totalDuration: {$sum: "$exercises.duration"}}},
        {$sort: { day: 1 }}],
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            res.json(data);
          }
        });
    })

module.exports = router;
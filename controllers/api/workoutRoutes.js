const router = require('express').Router();
const { Workout } = require('../../models');
const mongojs = require('mongojs');


// get all workouts
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
    });

// add new workout
router.post('/', async (req, res) => {
  Workout.insertMany([{}], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.json(data[0]);
    }
  });
});

// Add an exercise to a specific workout    
router.put('/:id', async (req,res) => {
  Workout.updateOne({"_id": mongojs.ObjectId(req.params.id)},
    {$push: {"exercises": req.body }}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    });
});

// get workouts for last 7 days
router.get('/range', async (req, res) => {
  Workout.aggregate([
    {$addFields: { totalDuration: { $sum: "$exercises.duration"}}},
    {$sort: {day: -1}}, // get newest results
    {$limit: 7}, // limit the results by 7
    {$sort: {day: 1}} // re-sort the results 
  ],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        res.json(results);
      }
    });
});

module.exports = router;
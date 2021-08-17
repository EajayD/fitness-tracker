const router = require('express').Router();
const db = require('../../models');
const mongojs = require('mongojs');

const databaseUrl = "workoutdb";
const collections = ["workouts"]

const db = mongojs(databaseUrl, collections);

router.get('/', async (req, res) => {
    db.workouts.find.sort({day: 1}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

module.exports = router;
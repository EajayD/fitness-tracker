const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
const router = require('express').Router();

const apiRoutes = require('./api');
const exerciseRoutes = require('./exerciseRoutes');
const statsRoutes = require('./statsRoutes');

router.use('/api', apiRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/stats', statsRoutes);

module.exports = router;
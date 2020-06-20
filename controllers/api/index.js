const router = require('express').Router();

//create route paths
const userRoutes = require('./user-routes');

//call route paths
router.use('/users', userRoutes);

module.exports = router;
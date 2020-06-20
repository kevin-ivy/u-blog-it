const router = require('express').Router();

//create route paths
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

//call route paths
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

//Get all users
router.get('/', (req, res) => {
    //Access the User Model and run findAll() method
    User.findAll({
        attributes: {exclude: ['password']}
    }).then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
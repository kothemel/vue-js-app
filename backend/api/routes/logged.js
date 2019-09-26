const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const loggedUser = require('../models/users')

router.get('/', (req, res, next) => {
    /*User.find()
    .exec()
    .then(docs => {
      console.log(docs)
      res.status(200).json(docs)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })*/
})

router.post('/:user', (req, res, next) => {
    loggedUser.find()
    const user = new User(
        {
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        }
    )
    user
    .save()
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err))
    res.status(201).json({
        message: 'Handling POST request to /users',
        createdUser: user
    })
})

module.exports = router;
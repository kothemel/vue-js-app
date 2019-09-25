const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/users')

router.get('/', (req, res, next) => {
    User.find()
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
    })
})

router.post('/', (req, res, next) => {
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

router.post('/delete/:id', (req,res) => {
  console.log(req.params.id)
    User.findByIdAndRemove(req.params.id, (err) => {
      if (err) return res.status(404).send({message: err.message})
      return res.send({ message: 'user deleted!' })
    });
  });

module.exports = router;
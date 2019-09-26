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

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err) => {
    if (err) return res.status(404).send({message: err.message})
    return res.send({ message: 'User with id: '+ req.params.id + ' found!' })
  })
})

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.status(404).send({message: err.message})
    return res.send({ message: 'User with id: '+ req.params.id + ' deleted!' })
  })
})

module.exports = router;
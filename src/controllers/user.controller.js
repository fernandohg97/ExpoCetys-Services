'use strict'

const User = require('../models/user')
const service = require('../services')

// Sign up user
function signUp (req, res) {
  let user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  })

  user.save((err) => {
    if (err) res.status(500).send({message: 'Error al crear el usuario' + err})
    res.status(201).send({token: service.createToken(user)})
  })
}

// Sign in user
function signIn (req, res) {
  let findUser = User.find({email: req.body.email})

  findUser.then(user => {
    if (user) {
      res.status(200).json({message: 'Te has logueado correctamente', token: service.createToken(user)})
      req.user = user
    }
    res.status(404).send({message: 'El usuario no existe'})
  }).catch(err => {
    res.status(500).send({message: 'Error del servidor' + err})
  })
}

module.exports = {
  signUp,
  signIn
}

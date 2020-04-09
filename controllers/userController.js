const {Users} = require('../models')

const userController = {
  signin : (req, res) => {
    const {username, password} = req.body
    Users.findOne({
      where:username
    }).then(result => {
      if (!result) {
        res.sendStatus(404)
      }

      if (result.dataValues.password !== password) {
        res.sendStatus(401)
      } else {
        res.status(200).json({token:"temptoken"})
      }
    })
    
    
  },
  signup : (req, res) => {
    const {username, password, nickname, email} = req.body

    Users.findOrCreate({
      where: {
        username
      },
      defaults: {
        password,
        nickname,
        email
      }
    }).then(([result, created]) => {
      if (!created) {
        res.sendStatus(409)
      } else {
        res.sendStatus(201)
      }
    })
  },
  signout : (req, res) => {
    res.sendStatus(200)
  }
}

module.exports = userController
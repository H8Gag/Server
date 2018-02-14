const userModel = require('../models/user');

class UserController {

  static findOrCreate (req,res) {
    userModel.findOneOrCreate(req.body.token, (jwt, user) => {
      res.send({jwt: jwt, user: user})
    })
  }

}

module.exports = UserController;
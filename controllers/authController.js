const { userModel } = require('../models/mongoose/mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
/**
 * -----------------------------------------------------------------
 * Node, Express, Mongodb and React js Application
 * -----------------------------------------------------------------
 * NAME : authController.js
 * PURPOSE : Login.logout and other authentication functions
 */

function login(req,res){
    userModel.findOne({email : req.body.email},function(err,result){
      if(result){
        bcrypt.compare(req.body.password, result.password, function(err, crypt) {
              if(crypt){
                res.send({
                code     : 1,
                message  : "Successfully Logged in",
                payload  : {
                  token :  jwt.sign({
                    data: {
                      name  : result.name,
                      email : result.email
                    }
                  }, 'secret', { expiresIn: '1h' })
                }
            })
          }else {
            res.send({
              code :   2,
              message : "Incorrect email or password",
              payload : {}
            })
          }
        });
      }else {
        res.send({
          code :   2,
          message : "Incorrect email or password",
          payload : {}
        })
      }
    })
}

module.exports = {login}
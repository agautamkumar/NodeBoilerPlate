const {userModel} = require('../models/mongoose/mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;



function signup(req,res){
  userModel.find({email: req.body.email})
  .then(result => {
    if(result.length>0){
      return res.send({
        code    : 2,
        message : "Email already exsists",
        payload :[]
      })
    }else{
            bcrypt.genSalt(saltRounds, function(err, salt) {
              bcrypt.hash(req.body.password, salt, function(err, hash) {
                var user = new userModel({
                                             name     : req.body.name,
                                             email    : req.body.email,
                                             contact  : req.body.contact,
                                             password : hash
                                        });
                                        
                user.save(function(err,result){
                  if(!err){
                    res.send({ 
                      code    : 1,
                      message : "successfullly signed up!",
                      payload : {
                        data : result
                      }
                    })
                  }
                })
                        // Store hash in your password DB.
              });
            });

    }
  })

}
module.exports = {signup}
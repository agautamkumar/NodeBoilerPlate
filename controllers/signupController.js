const {userModel} = require('../models/mongoose/mongoose')
function signup(req,res){

  var user = new userModel({
                               name    : req.body.name,
                               email   : req.body.email,
                               contact : req.body.contact
                          });
                          
  user.save(function(err,result){
    if(!err){
      res.send({
        code    : 1,
        message : "signup controller",
        payload : {
          data : result
        }
      })
    }
  })
}
module.exports = {signup}
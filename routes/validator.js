const Joi = require('joi')
function loginValidator(req,res,next){
    try{
        const schema = Joi.object().keys({
            email    : Joi.string().email({ minDomainAtoms: 2 }).required(),
            password : Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            // access_token: [Joi.string(), Joi.number()],
            // birthyear: Joi.number().integer().min(1900).max(2013),
            // email: Joi.string().email({ minDomainAtoms: 2 })
        })
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                return res.send({
                    code    : 3,
                    message : "Invalid Parameters",
                    payload : err.details
                })
            }
            next()
         });  // err === null -> valid
         
    }catch(error){
        return res.send({
            code    : 3,
            message : "Invalid Parameters",
            payload : error
        })
    }
}

module.exports = { loginValidator }
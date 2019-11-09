/**
 * -----------------------------------------------------------------
 * Node, Express, Mongodb and React js Application
 * -----------------------------------------------------------------
 * NAME : authController.js
 * PURPOSE : Login.logout and other authentication functions
 */

function login(req,res){
    console.log("In login controller ",req.body)
    res.send({
        code     : 1,
        message  : "Successfully Logged in",
        payload  : req.body
    })
}

module.exports = {login}
/**
 * @author Ajilore Raphael Olamide < reaphealolams@gmail.com >
 * Right reserved 
*/
'use strict';
const transformResponse = require('./../utils/transformer').transformResponse
const generateAccessToken = require('../middleware/auth').generateAccessToken


let User = {};

User.login = function(req, res, next) {
    try {
        let user = {
            username: req.body.username,
            password: req.body.password
        }
        if (user.username.toLowerCase() === "admin" && user.password.toLowerCase() === "admin") {
            generateAccessToken(user, (err, token) => {
                if (err || !token) return res.status(401).json(transformResponse(0, "error", {"responseMessage": "Username or Password not valid"}, "Error"))
                else {
                    return res.status(200).json(transformResponse(1, "success", {token}, "Success"))
                    
                }
            })
        }

        else res.status(401).json(transformResponse(0, "error", {"responseMessage": "incorrect username or password"}))

    } catch (error) {
        console.error({error})
        next(error)
    }
};


module.exports = User;
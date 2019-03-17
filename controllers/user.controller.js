/**
 * @author Ajilore Raphael Olamide < reaphealolams@gmail.com >
 * Right reserved 
*/
'use strict';
const transformResponse = require('./../utils/transformer').transformResponse


let User = {};

User.login = function(req, res, next) {
    try {
        



    } catch (error) {
        res.status(401).json(transformResponse(0, "error", {responseMessage: "incorrect username or password"}))
    }
};


module.exports = User;
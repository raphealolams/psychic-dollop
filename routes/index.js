/**
 * @author Ajilore Raphael Olamide < reaphealolams@gmail.com >
 * Right reserved 
 *  
*/
'use strict';

const express = require('express');
const router = express.Router();


const users = require('./user.route');
const countries = require('./countries.route');

router.use('/', users);
router.use('/', countries);

module.exports = router;
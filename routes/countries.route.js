/**
 * Ajilore Raphael Olamide < reaphealolams@gmail.com >
 * Right reserved 
 *  
*/

const express = require('express');
const router = express.Router();
const countries = require("./../controllers/countries.controller");
const Auth = require('../middleware/auth').verifyToken

router.get('/countries', Auth, countries.getCountries)
router.put('/countries', Auth, countries.updateCountries)
router.delete('/countries/:name', Auth, countries.deleteCountries)

module.exports = router
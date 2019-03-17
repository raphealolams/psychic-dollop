/**
* All right reserved  
* @author Ajilore Raphael Olamide < raphealolams@gmail.com >
*/

'use strict';

const jwt = require('jsonwebtoken');
const transFormers = require('../utils/transformer').transformResponse

module.exports = {

	generateAccessToken: (user, cb) => {
		jwt.sign({
				username: user.userName,
				password: user.password

			}, process.env.SECRET, {expiresIn: 60 * 60 * 60}, (err, token) => {
				if (err) cb(err)
				else cb(null, token)
			});

	},

	verifyToken: (req, res, next) => {
		let token = req.body.token || req.query.token || req.headers['x-access-token'];
		if (!token) return res.status(401).json(transFormers(5, 'No token provided'));
		
		jwt.verify(token, process.env.SECRET, verifyCallBack);

		function verifyCallBack(error, decoded) {
			if (error) return res.status(401).json(transFormers(5, error.message));

			res.decoded = decoded;
			next();
		}
	}
}
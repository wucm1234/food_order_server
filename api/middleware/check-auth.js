const jwt = require('jsonwebtoken');
const config = require('config')

module.exports = (req, res, next) => {
	const token = req.header('token');

	if (!token) return res.status(401).json({error: {message: "Unauthorized"}});

	try {
		const decoded = jwt.verify(token, config.get('jwtPrivateKey'),);
		req.userData = decoded;
		next();
	} catch (error) {
		return res.status(403).json({
			message: 'auth failed',
			error: error
		});
	}
};

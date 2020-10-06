const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWTSECRET);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            res.json({ status: false })
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            status: false,
            message: 'Invalid request!'
        });
    }
};













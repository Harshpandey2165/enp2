const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

const isBanker = (req, res, next) => {
    if (req.user.role !== 'banker') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

module.exports = { authenticate, isBanker };

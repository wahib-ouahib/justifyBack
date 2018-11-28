const jwt = require('jsonwebtoken');

//setting up the token
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "wahib123");
        req.userData = decoded;
        next();
    } catch(error){
        return res.status(401).json({
            message: 'Token invalid / please make sure you have entered a valid Token'
        });
    }
}
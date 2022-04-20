const jwt = require('jsonwebtoken');



const authMiddleware = (req, res, next) => {
    var token = req.headers["x-access-token"];
    if(token == null){
        res.send("please enter a token");
    }
        try {
            var decoded = jwt.verify(token,"helloworldthisisjsonwebtoken");
            next();
        }
        
	catch (e) {
        res.send("wrong token");
    }
}


module.exports = authMiddleware;
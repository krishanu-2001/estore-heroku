const jwt = require('jsonwebtoken');

const authentication = (req, res, next) =>{
    const token = req.header('x-auth-token');
    console.log(token);

    if(!token){
        return res.json({'msg': 'Token not found'});
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);

    if(!verify)
    return res.json({msg: 'token not verified'});

    console.log(verify);
    req.user_id = verify;
    next();

}

module.exports = authentication;
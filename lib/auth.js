import 'dotenv/config';
import jwt from 'jsonwebtoken';

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    //check for token
    if(!token) 
        return res.status(401).json({ msg: 'No token, user not authorized' });

    try {
        //check token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //add user from payload
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({ msg: ''});
    }
}

export default auth;
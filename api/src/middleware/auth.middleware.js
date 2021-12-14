const HttpException = require('../utils/HttpException.utils');
const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userModel = require('../models/user.model');
dotenv.config();

const auth = (...roles) => {
    return async function(req,res,next){
        try{
            const authHeader = req.headers.authorization;
            const bearer = 'Bearer ';
            if (!authHeader || authHeader.startsWith(bearer)){
                throw new HttpException(401, 'Access denied. No Credentials sent!');

            }
            const token = authHeader.replace(bearer,'');
            const secretKey = process.env.SECRET_JWT || "";

            // Verify Token 
            const decoded = jwt.verify(token, secretKey);
            const user = await userModel.findOne({id: decoded.user_id})

            if (!user){
                throw new HttpException(401, 'Authentication Failed')
            }

            // Check if the current user is the owner
            // if the user doenst have permission to do this , they will get the error

            const ownerAuthorized = req.params.id == user.id;
            if(!ownerAuthorized && roles.length && !roles.includes(user.role)){
                throw new HttpException(401,"Unauthorized")
            }

            // If the user has permission 
            req.currentUser = user;
            next();

        }catch(e){
            e.status = 401;
            next(e);
        }
    }
}

module.exports = auth;
import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import User from "../module/userModel.js";

export const protect = AsyncHandler(async (req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECERET);
            req.user = await User.findById(decoded.id).select('-password');

            
        } catch (error) {
            res.status(401);
            throw new Error ('Not Authorized token failed')
            
        }
    }
    next();
})
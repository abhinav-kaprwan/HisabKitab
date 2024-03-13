import { ApiError } from "../utils/ApiError"
import { jwt } from "jsonwebtoken"
import { User } from "../models/user.model"


export const verifyJwt = async(req,_, next)=> {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if(!token) {
            throw new ApiError(400,"Unauthorized request")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KEY) 
        const user = await User.findById(decodedToken?._id).select("-password")
        if(!user) {
            throw new ApiError(401, "Invalid token")
        }
        req.user = user
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
}
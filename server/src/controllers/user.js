import { User } from "../models/user.model.js"
import mongoose from "mongoose"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = async (req,res)=> {
    const {username, email, password, confirmPassword} = req.body
    if (
        [username,email, password, confirmPassword].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    
    if(password !== confirmPassword) {
        throw new ApiError(402, "See you password again")
    }
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser) {
        throw new ApiError(401, "User already exist")
    }

    const user = await User.create({
        username,
        email,
        password
    })

    return res.status(201).json(
        new ApiResponse(200, user, "User registered Successfully")
    )
}


export {registerUser}

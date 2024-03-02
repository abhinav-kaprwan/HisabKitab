import { User } from "../models/user.model.js"
import mongoose from "mongoose"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"

const registerUser = async (req,res)=> {
    try {
        // Getting data form body
        const {username, email, password, confirmPassword} = req.body

        // All data should be present
        if (
            [username,email, password, confirmPassword].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required")
        }
        
        // checking whether password is equal to confirm password
        if(password !== confirmPassword) {
            throw new ApiError(402, "See you password again")
        }

        // checking if user already exist
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })
    
        if(existedUser) {
            throw new ApiError(401, "User already exist")
        }
        // Hashing the password
        const encryptPassword = await bcrypt.hash(password,10)
    
        //sTORING VALUE IN DATABASE
        const user = await User.create({
            username,
            email,
            password:encryptPassword
        })

        // generating a token

        const accessToken = jwt.sign(
            {
                id:user._id,
                email:user.email
            },
            process.env.ACCESSTOKEN_SECRET_KEY,
            {
                expiresIn:"12h"
            }
        )

        user.accessToken = accessToken
        user.password = undefined

    
        return res.status(201).json(
            new ApiResponse(200, user, "User registered Successfully")
        )
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async(req,res)=> {
    // take all the values from user
    const {username,password} = req.body

    //Validation
    if(!(username && password)) {
        throw new ApiError(401,"Fill all the details")
    }
    // FInd on the database

    const user = await User.findOne({username})

    if(!user) {
        throw new ApiError(403, "User doesnot exist")
    }

    // check the password 

    const validateUser = await bcrypt.compare(password,user.password)

    if(!validateUser) {
        throw new ApiError(405,"Enter wrong password")
    }
    const accessToken = jwt.sign(
        {
            id:user._id,
            email:user.email
        },
        process.env.ACCESSTOKEN_SECRET_KEY,
        {
            expiresIn:"12h"
        }
    )
    user.accessToken = accessToken
    user.password = undefined
    // sENDING IT IN COOKIES

    const options={
        httpOnly:true,
        secure:true
    }

    return res
    .status(201)
    .cookie("accessToken",accessToken,options)
    .json(
         new ApiResponse(200,"User Logged in successfully")
    )

}
export {registerUser,loginUser}

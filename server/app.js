import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import 'dotenv/config'
import { User } from "./models/user.model.js";
import { ApiError } from "./utils/ApiError.js";
import { ApiResponse } from "./utils/ApiResponse.js";
const app = express();
app.use(cors())
app.use(express.json()) 


mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

app.get('/', (req,res)=> {
    res.send('hello world')
})

app.post('/register', async (req,res)=> {
    const {username, email, password, confirmPassword} = req.body
    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
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
})
app.listen(8000, ()=> {
    console.log(`Server is running on Port ${process.env.PORT}`)
})

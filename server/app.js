import express from "express";
import cors from "cors";
import 'dotenv/config'
import { Router } from "express";
import { registerUser } from "./src/controllers/user.js";
import { connectDB } from "./src/db/index,js";
const app = express();
app.use(cors())
app.use(express.json()) 

const router = Router()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running on Port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDb connection failed", error)
})

app.post("/api/register",registerUser)




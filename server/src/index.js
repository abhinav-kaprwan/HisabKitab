import { connectDB } from "./db/index.js";
import app from "../app.js";


connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Listenting at Port ${process.env.PORT}` )
    })
})
.catch(()=> {
    console.log("Mongo Db connection failed",err)
})
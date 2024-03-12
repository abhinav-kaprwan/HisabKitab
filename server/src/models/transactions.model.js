import mongoose ,{Schema} from 'mongoose'

const transactionSchema = new Schema({
    Borrower:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    Lender: {
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    Amount:{
        type:String,
    }
},{timestamps:true})

export const Transaction = mongoose.model("Transaction", transactionSchema)
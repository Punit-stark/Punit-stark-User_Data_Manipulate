const mongoose=require("mongoose")

const connectDB= async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/User_data")
        console.log("mongoDB connected")
    } catch (error) {
        console.log("mongoDB connection failed: ",error.message)
        process.exit(1)
    }
}

module.exports=connectDB
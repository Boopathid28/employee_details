import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MANGODB_URL)
        console.log("mongoose connect sucessfully")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
import mongoose from "mongoose"

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return
    }

    const conn = await mongoose.connect("mongodb+srv://ujjwal:Ujjwal%401@cluster0.lhj8u99.mongodb.net/")

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

export default connectDB

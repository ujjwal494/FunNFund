import mongoose from "mongoose"

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return
    }

    const conn = await mongoose.connect("mongodb://localhost:27017/funNfund")

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

export default connectDB

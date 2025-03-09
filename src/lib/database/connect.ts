import mongoose from "mongoose"

const connect = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            return
        }

        await mongoose.connect(process.env.MONGO_URL!)

        console.log("MONGODB CONNECTED ✅!")
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR❌")
        throw new Error("MONGODB CONNECTION ERROR!")
    }
}

export default connect
import mongoose, { Schema, Document } from "mongoose"

export interface IDiscount extends Document {
    name: string,
    description: string,
    image: string,
    interfaceImage: string
}

const Discount = new Schema<IDiscount>({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    interfaceImage: {
        type: String,
        require: true
    }
}, { timestamps: true })

const DiscountModel = mongoose.models.Discount || mongoose.model("Discount", Discount)

export default DiscountModel
import mongoose, { Schema, Document } from "mongoose"

export interface IProduct extends Document {
    name: string;
    description?: string;
    properties: object;
    price: number;
    image: string[];
    categories: string[];
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    properties: {
        type: Object,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    image: {
        type: [String],
        required: true,
    }
}, { timestamps: true })


const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema)

export default Product

import mongoose, { Schema, Document } from "mongoose"

export interface IProduct extends Document {
    name: string;
    description?: string;
    properties: object;
    price: number,
    image: string[],
    categories: []
}


const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    properties: {
        type: Object,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    categories: {
        type: Array,
        require: true
    },
    image: {
        type: Array,
        require: true
    }
}, { timestamps: true })


const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema)

export default Product
import mongoose, { Schema, Document } from "mongoose"

interface IProperty {
    name: string,
    value: string
}


interface ICredit {
    [key: string]: number;
}



export interface IProduct extends Document {
    name: string;
    description?: string;
    properties: IProperty[];
    price: number;
    images: string[];
    categories: string[];
    credit: ICredit
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
        type: [Object],
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
    images: {
        type: [String],
        required: true,
    },
    credit: {
        type: Object,
        required: true
    }
}, { timestamps: true })


const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema)

export default Product

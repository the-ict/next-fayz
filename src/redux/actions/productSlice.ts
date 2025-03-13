"use client";

import { IProduct } from "@/lib/models/Product";
import { createSlice } from "@reduxjs/toolkit";


interface IProudctSlice extends IProduct {
    overNumber: number
}

export interface productI {
    products: IProudctSlice[]
}


const initialState: productI = {
    products: []
}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(item => item._id !== action.payload)
        },
    }
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer
"use client";

import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "@/lib/data"

export interface productI {
    products: ProductItem[]
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
            // product id bizga keladi
            state.products = state.products.filter(item => item.id !== action.payload)
        },
    }
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer
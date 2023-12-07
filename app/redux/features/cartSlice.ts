import { ProductType } from "@/interfaces/types";
import { createSlice } from "@reduxjs/toolkit/react";


const ifCartExists = localStorage.getItem("cart");
const cartFromLocalStorage = ifCartExists ? JSON.parse(ifCartExists) : null;


type CartType = {
    product: ProductType;
    quantity: number;
}

const initialState: {cart: CartType[]} = {
    cart: cartFromLocalStorage || []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            
        },
        removeFromCart: (state, action) => {

        },
        incrementQuantity: (state, action) => {

        },
        decrementQuantity: (state, action) => {

        },
        clearCartItems: (state, action) => {

        }
    }
})
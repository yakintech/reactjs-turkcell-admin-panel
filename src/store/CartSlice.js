import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart: []
}


const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            //eğer ürün sepette varsa quantity 1 artsın yoksa yeni bir cartItem oluşturup sepete ekle!
            let cartItem = state.cart.find(q => q.id == action.payload.id)
            if (cartItem) {
                cartItem.quantity++
            }
            else {
                let newCartItem = {
                    id: action.payload.id,
                    unitPrice: action.payload.unitPrice,
                    quantity: 1,
                    name:action.payload.name
                }
                state.cart.push(newCartItem)
            }
        },
        removeFromCart: (state,action) => {
            let filteredCart = state.cart.filter(q => q.id != action.payload.id)
            state.cart = filteredCart
        },
        empty: (state) => {
            state.cart = []
        }
    }
})


export default cartSlice.reducer
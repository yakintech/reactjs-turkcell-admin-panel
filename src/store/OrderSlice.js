import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchOrders = createAsyncThunk("orders/fetchorders", async () => {
    const response = await fetch("https://northwind.vercel.app/api/orders")
    return await response.json()
})


const initalState = {
    orders: [],
    loading: false
}


const orderSlice = createSlice({
    name: "orders",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.orders = action.payload
            state.loading = false
        })
    }
})

export default orderSlice.reducer
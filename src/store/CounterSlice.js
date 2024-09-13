import { createSlice } from "@reduxjs/toolkit"

//global state default değeri
const initalValue = {
    value: 22
}


const counterSlice = createSlice({
    name: "counter",
    initialState: initalValue,
    reducers: {
        increase: (state) => {
            console.log("state", state)
            state.value = state.value + 1
        },
        decrease: (state) => {
            state.value = state.value - 1
        },
        empty: (state) => {
            state.value = 0
        },
        increaseByValue: (state, action) => {
            state.value = state.value + action.payload
        }

    }
})


export default counterSlice.reducer
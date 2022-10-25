import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            // console.log(action)
            state.counter = state.counter + action.payload.amount;
        },
        toogleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
})

// export fungsi
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
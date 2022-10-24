import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: true };

// using plugins
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


const store = configureStore({
    reducer: counterSlice.reducer
});

// using manually
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// }

// const store = createStore(counterSlice.reducer);

// export fungsi
export const counterActions = counterSlice.actions;

// export data
export default store; 
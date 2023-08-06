import {createReducer} from '@reduxjs/toolkit';

export const initialState = {
    value: 0,
}

export type TinitialState = typeof initialState;
export const customReducer = createReducer(initialState, {
    increment: (state) => {
        state.value += 1;
    },
    decrement: (state) => {
        state.value -= 1;
    }

})


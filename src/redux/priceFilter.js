import { createSlice } from '@reduxjs/toolkit'
import { api } from './fetchAllData';

const initialState = {
    priceFilter: { minPrice: 0, maxPrice: "", absoluteMaxPrice: 0 },
}

export const priceFilterSlice = createSlice({
    name: 'priceFilter',
    initialState,
    reducers: {
        updateMinPrice: (state, action) => {
            state.priceFilter.minPrice = +action.payload
        },
        updateMaxPrice: (state, action) => {
            state.priceFilter.maxPrice = +action.payload
        },
        updateAbsoluteMaxPrice: (state, action) => {
            state.priceFilter.absoluteMaxPrice = +action.payload
        }
    },
    extraReducers: (builder) => {
       // builder.addCase(api.fulfilled, (state, action) => {
            //return "All good thanks "
            // Handle the fulfilled action if needed
            // You can update the state based on the API response
            // For example: state.someData = action.payload;
            //return state
       // });

    }
})

export const { updateMaxPrice, updateMinPrice, updateAbsoluteMaxPrice } = priceFilterSlice.actions

export default priceFilterSlice.reducer
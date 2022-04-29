import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: "items",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {
        getAllStart: (state) => {
            state.list = [];
            state.loading = true;
            state.error = null;
        },
        getAllSuccess: (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAllFailure: (state, action) => {
            state.list = [];
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default itemSlice.reducer;
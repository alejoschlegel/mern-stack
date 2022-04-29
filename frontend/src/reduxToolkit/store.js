import { configureStore } from "@reduxjs/toolkit";
//reducers
import items from "./reducers/itemSlice";

export default configureStore({
    reducer: {
        items
    }
});
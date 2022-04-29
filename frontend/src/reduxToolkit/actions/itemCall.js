import axios from "axios";
import itemSlice from "../reducers/itemSlice";

export const itemCall = (dispatch) => {
    dispatch(itemSlice.actions.getAllStart());
    try{
        const res = axios.get("http://localhost:3000/api/");
        dispatch(itemSlice.actions.getAllSuccess(res.data));
    }
    catch(err){
        dispatch(itemSlice.actions.getAllFailure(err));
    }
};
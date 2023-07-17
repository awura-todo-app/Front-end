import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
        user: userSlice,
    }
});
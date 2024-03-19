import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "../Redux/TodoSlice";

const store = configureStore({
    reducer : {
        todos : TodoReducer ,

    }
})

export default store;
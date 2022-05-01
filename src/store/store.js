import { configureStore } from "@reduxjs/toolkit";

import statusSlice from "./slices/statusSlice";

export default configureStore({
    reducer: {
        status: statusSlice
    }
})
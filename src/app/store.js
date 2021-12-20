import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/bannerSlice";
export const store = configureStore({
    reducer: {
        banner: bannerReducer,
    },
});

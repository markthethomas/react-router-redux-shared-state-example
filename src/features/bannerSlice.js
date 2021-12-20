import { createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const initialState = {
    visible: false,
    color: "green",
    message: "Success!",
    action: () => {},
};

const counterSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
        showBanner: (state, action) => {
            state.visible = true;
            state.color = action.payload.color;
            state.message = action.payload.message;
            state.action = action.payload.action;
        },
        hideBanner: (state) => {
            state.visible = false;
        },
    },
});

export const { showBanner, hideBanner } = counterSlice.actions;
export default counterSlice.reducer;

export const useBanner = () => {
    const dispatch = useDispatch();
    const showBanner = useCallback(
        ({ color, message, action }) => {
            dispatch(
                counterSlice.actions.showBanner({
                    color,
                    message,
                    action,
                })
            );
        },
        [dispatch]
    );
    const hideBanner = useCallback(
        () => dispatch(counterSlice.actions.hideBanner({})),
        [dispatch]
    );
    return {
        showBanner,
        hideBanner,
    };
};

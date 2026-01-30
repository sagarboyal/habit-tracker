import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./slice/goalSlice";

const rootStore = configureStore({
    reducer: {
        goal: goalReducer,
    },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export default rootStore;
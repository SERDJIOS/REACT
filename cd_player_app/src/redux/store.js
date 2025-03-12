import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/tracksSlice";
import playerReducer from "./slices/playerSlice";
import settingReducer from "./slices/settingSlice"; // Если у вас есть настройки

const store = configureStore({
    reducer: {
        tracks: tracksReducer,
        player: playerReducer,
        settings: settingReducer,
    }
});

export default store;

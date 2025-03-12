import { createSlice } from "@reduxjs/toolkit"

const loadFromLocalStorage = () => {
    const storedSettings = localStorage.getItem("settings");
    return storedSettings ? JSON.parse(storedSettings) : { mode: "normal", volume: 0.5 };
};

const initialState = loadFromLocalStorage();

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setPlayingMode: (state, action) => {
            state.mode = action.payload;
            localStorage.setItem("settings", JSON.stringify(state));
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
            localStorage.setItem("settings", JSON.stringify(state));
        },
        resetSettings: (state) => {
            state.mode = "normal";
            state.volume = 0.5;
            localStorage.removeItem("settings");
        },
    },
});

export const { setPlayingMode, setVolume, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;

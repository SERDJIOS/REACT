import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Начальное состояние
const initialState = {
    tracks: [],
    status: "idle",
    error: null,
};

// Асинхронный thunk для имитации загрузки треков
export const fetchTracks = createAsyncThunk("tracks/fetchTracks", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Имитация задержки 1 сек.
    return [
        {
            id: 1,
            title: "Bohemian Rhapsody",
            artist: "Queen",
            duration: 5.55,
        },
        {
            id: 2,
            title: "SOS",
            artist: "ABBA",
            duration: 3.23,
        },
        {
            id: 3,
            title: "Beat it",
            artist: "Michael Jackson",
            duration: 4.18,
        },
    ];
});

// Slice для управления треками
const trackSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTracks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTracks.fulfilled, (state, action) => {
                state.status = "idle";
                state.tracks = action.payload;
            })
            .addCase(fetchTracks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default trackSlice.reducer;

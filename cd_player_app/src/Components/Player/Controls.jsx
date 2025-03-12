import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../redux/slices/playerSlice";


export default function Controls() {
    const dispatch = useDispatch();
    const handlePrevTrack = () => {
        dispatch(setCurrentTrack({ track: "track1", index: 0 }));
    }

    return (
        <div>
            <button onClick={() => dispatch(setCurrentTrack())}>Play/Pause</button>
            <button>Previous</button>
            <button>Next</button>
        </div>
    )
}
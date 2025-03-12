import React from "react";
import { useSelector } from "react-redux";

export default function TrackInfo() {
    const tracks = useSelector((state) => state.tracks);
    
    return (
        <div className="track-info">
            <h3>Track Info</h3>
        </div>
    )
}
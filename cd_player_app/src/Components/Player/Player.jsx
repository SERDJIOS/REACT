import React, { seEffect, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackInfo from "../TrackInfo";
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";
import { fetchTracks } from "../../redux/slices/tracksSlice";
import { useState } from "react";


export default function Player() {
    const tracks = useSelector((state) => state.tracks);
    const status = useSelector((state) => state.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks());
    }, [dispatch]);

    return (
        <div>
          {tracks.map((track) => {
            <TrackInfo track ={track} />;
            <Controls />;
            <ProgressBar />
          })}
        </div>
    )
}
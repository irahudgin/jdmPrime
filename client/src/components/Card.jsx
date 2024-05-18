import React from "react";
import { useState } from "react";

export default function Card(props) {
    return (
        <div className="overflow-hidden relative flex flex-col justify-center p-4">
            {props.newArrival == true ? (
                <div className="absolute top-5 left-5 bg-emerald-600 rounded-lg text-white p-1">
                    New Arrival!
                </div>
            ) : (
                <div></div>
            )}

            <img
                className="rounded-lg object-cover object-center h-64 w-full"
                src={props.src}
            ></img>
            <h1>{props.name}</h1>
            <h1 className="font-sans text-xs font-bold">{props.price}</h1>
        </div>
    );
}

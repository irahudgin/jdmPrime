import React from "react";

export default function BackgroundVideo() {
    const videoPath = "/media/initialD.mp4";

    return (
        <div className="">
            <div className="bottom-0 left-0 absolute w-full h-1/2 bg-gradient-to-t to-transparent from-slate-500 shadow-lg"></div>
            <video
                className="opacity-50 object-cover w-screen h-screen absolute top-0 left-0 -z-20"
                loop
                autoPlay
                muted
                id="bg-video"
            >
                <source src={videoPath} type="video/mp4" />
            </video>
        </div>
    );
}

import React from "react";
import { useRef, useEffect } from "react";

export default function BackgroundVideo() {
    const videoPath = "/media/initialD.mp4";
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                const videoDimensions =
                    videoRef.current.getBoundingClientRect();

                if (videoDimensions.bottom < 300) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="">
            <div className="bottom-0 left-0 absolute w-full h-1/2 bg-gradient-to-t to-transparent from-slate-500 shadow-lg"></div>
            <div className="h-full w-full absolute top-0 left-0 bg-black -z-20"></div>
            <video
                className="opacity-50 object-cover w-screen h-screen absolute top-0 left-0 -z-10"
                loop
                autoPlay
                muted
                id="bg-video"
                ref={videoRef}
            >
                <source src={videoPath} type="video/mp4" />
            </video>
        </div>
    );
}

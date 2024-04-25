import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import Agents from "../components/Agents";
import Arrivals from "../components/Arrivals";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Home() {
    const container = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap
            .timeline()
            .fromTo(
                ".hero-drive",
                { opacity: 0 },
                {
                    opacity: 1,
                    y: window.innerHeight / -10,
                    duration: 0.5,
                }
            )
            .fromTo(
                ".hero-japanese",
                { opacity: 0 },
                {
                    opacity: 1,
                    y: window.innerHeight / -10,
                    duration: 0.5,
                },
                "-=0.2"
            )
            .fromTo(
                ".hero-buttons",
                { opacity: 0 },
                {
                    opacity: 1,
                    y: window.innerHeight / -10,
                    duration: 0.5,
                },
                "-=0.2"
            );
    });

    return (
        <div>
            <div
                ref={container}
                className="flex justify-center flex-col items-end w-auto top-0"
                style={{ height: "calc(100vh - (88px + 2.5rem))" }}
            >
                <BackgroundVideo />
                <div
                    id=""
                    className="flex flex-col w-1/2 items-right ml-5 mr-5 "
                >
                    <h1 className="hero-drive text-white  text-5xl text-left">
                        Drive Right.
                    </h1>
                    <h1 className="hero-japanese text-white mt-5 text-2xl  text-left">
                        Japanese. From overseas. Yes Please.
                    </h1>
                    <div className="hero-buttons  flex p-0">
                        <ul className="flex flex-row mt-10 gap-5">
                            <li className="text-black bg-white p-4 rounded-full">
                                Newest Arrivals
                            </li>
                            <li className="text-black bg-white p-4 rounded-full">
                                Auctions
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-screen bg-slate-400">
                <Arrivals />
            </div>
        </div>
    );
}

export default Home;

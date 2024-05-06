import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import Arrivals from "../components/Arrivals";
import Footer from "../components/Footer";

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
                    x: window.innerWidth / 4,
                    // y: window.innerHeight / -10,
                    duration: 0.5,
                }
            )
            .fromTo(
                ".hero-buttons",
                { opacity: 0 },
                {
                    opacity: 1,
                    x: window.innerWidth / 4,
                    // y: window.innerHeight / -10,
                    duration: 0.5,
                },
                "-=0.2"
            );
    });

    return (
        <div>
            <div
                ref={container}
                className="flex justify-center flex-col items-start w-auto"
                style={{ height: "calc(100vh - (88px + 2.5rem))" }}
            >
                <BackgroundVideo />
                <div
                    id=""
                    className="flex flex-col w-1/2 items-center ml-5 mr-5 "
                >
                    <h1 className="hero-drive m-0 p-0 text-white  text-5xl text-left">
                        Drive Right.
                    </h1>

                    <div className="hero-buttons m-0 flex p-0">
                        <ul className="flex flex-row mt-10 gap-5">
                            <li className="text-black bg-white p-6 text-xl rounded-full">
                                Newest Arrivals
                            </li>
                            <li className="text-black bg-white p-6 text-xl rounded-full">
                                Auctions
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-screen bg-slate-300">
                <Arrivals />
            </div>
            <Footer />
        </div>
    );
}

export default Home;

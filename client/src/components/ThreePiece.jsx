import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ThreePiece() {
    const container = useRef();
    const tl = useRef();
    const threePiece = useRef();
    const threePieceAbout = useRef(null);
    const threePieceChoose = useRef(null);
    const threePieceAfterSales = useRef(null);

    useEffect(() => {
        tl.current = gsap
            .timeline({ paused: true })
            .fromTo(
                threePieceAbout.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1 }
            )
            .fromTo(
                threePieceChoose.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=0.3"
            )
            .fromTo(
                threePieceAfterSales.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1 },
                "-=0.3"
            );

        const handleScroll = () => {
            if (threePiece.current) {
                const tpDim = threePiece.current.getBoundingClientRect();

                if (tpDim.y < 600) {
                    tl.current.play();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useGSAP(() => {});

    return (
        <div
            ref={threePiece}
            className="shadow-lg flex m-4 rounded-lg bg-white justify-center items-center gap-4 p-6"
        >
            <div
                ref={threePieceAbout}
                className="shadow-md bg-blue-400 w-full flex flex-col  h-full rounded-lg p-4"
            >
                <p className="text-3xl text-white p-4">JDM Prime</p>
                <p className=" text-black font-sans font-bold p-4 ">
                    We specialize in sourcing and importing high-quality
                    Japanese cars directly to Canada. With a passion for unique
                    and high-performance vehicles, we provide Canadian car
                    enthusiasts with unparalleled access to Japan’s most
                    exclusive cars. Our expert team, based both in Japan and
                    Canada, ensures a seamless process from selection to
                    delivery, handling all aspects of logistics, customs, and
                    compliance.
                </p>
                <button className="text-xl text-white border-2 m-4 rounded-lg w-1/4">
                    Learn more
                </button>
            </div>
            <div className="flex flex-col w-full h-full  gap-4 ">
                <div
                    ref={threePieceChoose}
                    className="shadow-md bg-purple-400 w-full flex flex-col rounded-lg h-full p-4"
                >
                    <p className="text-3xl text-white p-4">Why choose Us?</p>
                    <p className="text-black font-sans font-bold p-4">
                        With JDM Prime Auto Imports, you gain access to Japan’s
                        exceptional vehicles with the confidence of full
                        compliance with Canadian laws. Our commitment to quality
                        and customer satisfaction ensures that your car buying
                        experience is as exciting and smooth as the cars we
                        import.
                    </p>
                    <button className="text-xl text-white border-2 m-4 rounded-lg w-1/4">
                        Learn more
                    </button>
                </div>
                <div
                    ref={threePieceAfterSales}
                    className="shadow-md bg-orange-400 w-full flex flex-col  rounded-lg h-full p-4"
                >
                    <p className="text-3xl text-white p-4">
                        After Sales Support
                    </p>
                    <p className=" text-black font-sans font-bold p-4">
                        Our relationship doesn’t end at delivery. We offer
                        after-sales support including parts sourcing,
                        maintenance tips, and more to keep your Japanese import
                        in top condition.
                    </p>
                </div>
            </div>
        </div>
    );
}

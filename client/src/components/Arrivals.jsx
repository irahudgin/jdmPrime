import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function Arrivals() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    return (
        <div className="flex justify-center shadow-lg pt-6 pb-6">
            <div className="slider-container w-10/12 h-fit">
                <Slider {...settings}>
                    <div className="">
                        <Card
                            src="/images/car1.jpg"
                            name="1992 Nissan 180sx"
                            price="$9 899"
                            newArrival={true}
                        />
                    </div>
                    <div>
                        <Card
                            src="/images/car2.jpg"
                            name="1999 Nissan Skyline GT-R"
                            price="$43 399"
                            newArrival={true}
                        />
                    </div>
                    <div>
                        <Card
                            src="/images/car3.jpg"
                            name="1995 Toyota Supra"
                            price="$49 999"
                            newArrival={true}
                        />
                    </div>
                    <div>
                        <Card
                            src="/images/car4.jpg"
                            name="1993 Mazda Rx-7"
                            price="$32 999"
                            newArrival={true}
                        />
                    </div>
                    <div>
                        <Card
                            src="/images/car5.jpg"
                            name="2009 Subaru WRX STI"
                            price="$14 599"
                            newArrival={true}
                        />
                    </div>
                    <div>
                        <Card
                            src="/images/car6.jpg"
                            name="1991 Toyota Landcruiser"
                            price="$15 999"
                            newArrival={true}
                        />
                    </div>
                </Slider>
                <button className="text-xl bg-white text-black border-2 border-black m-4 p-2 rounded-lg w-1/4">
                    Browse all new arrivals
                </button>
            </div>
        </div>
    );
}

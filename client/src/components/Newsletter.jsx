import React from "react";

export default function Newsletter() {
    return (
        <>
            <div className="m-4 flex">
                <div className="p-6 w-full flex justify-between rounded-lg shadow-lg bg-white">
                    <div className=" flex justify-center flex-col">
                        <h1 className=" text-3xl">Join Us!</h1>
                        <p className="font-sans">
                            Sign Up To Get Emails On New Arrivals!
                        </p>
                    </div>
                    <div className="flex w-full justify-end gap-2 p-6">
                        <input
                            className="bg-white border-2 p-4 border-black w-1/2 rounded-lg"
                            type="email"
                            id="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Please Enter Valid Email"
                        ></input>
                        <button className="text-xl bg-white text-black border-2 border-black p-2 rounded-lg ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

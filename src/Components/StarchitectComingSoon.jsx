import React, { useState } from "react";
import brownsofa from '../assets/blackSofa-png2.png';
import blacksofa from '../assets/blackSofa-png.png';
import spotlight from '../assets/white-stage-spotlight-png.webp';
import backimage from '../assets/Bg-texture.jpg';
import OffButton from "../assets/OffButton.png";
import OnButton from "../assets/OnButton.png";

function StarchitectComingSoon() {
    const [light, setLight] = useState(false);

    function switchLight() {

        setLight(prevLight => !prevLight);
    }

    return (
        <div className={`flex flex-col w-full h-full relative justify-center  ${light ? "bg-white text-black" : "bg-black text-white"} items-center`}
        >
            {/* <div className="flex flex-col items-center">       */}
            <img
                src={spotlight}
                className={`absolute top-[-10%] opacity-60 h-[85%] md:h-[85%] lg:h-[92%] transition-all ${light ? "hidden" : "block"}`}
                alt="Spotlight"
            />
            <div className="z-50 flex flex-col items-center mt-44">

                <img
                    src={light ? brownsofa : blacksofa}
                    className="z-40 w-[15rem] md:w-[20rem] lg:w-[22rem] cursor-pointer"
                    alt="Sofa"

                />
                <img
                    src={light ? OffButton : OnButton}
                    alt={light ? "Turn Off Button" : "Turn On Button"}
                    width={70}
                    onClick={switchLight}
                    className="cursor-pointer z-50" // Ensure cursor is pointer
                />
                <p className="text-sm font-mono">Switch to turn {light ? "ON" : "OFF"} the lights</p>
                <h1 className="font-semibold z-50 text-4xl font-[cinzel] text-center">Coming Soon</h1>
                <h2 className="font-semibold z-50 text-lg font-[Kaushan,cursive]">We Will Be Live Soon</h2>
                <form action="" className="flex gap-1 mt-2 ">
                    <input
                        type="text"
                        className={` px-2 backdrop-blur-md py-1 ${light ? "bg-gray-400 text-white placeholder:text-white" : "bg-gray-100 text-gray-700"} md:w-[40vw] w-[50vw] lg:w-[20vw] outline-none rounded-l-md border-white border`}
                        placeholder="Enter Your Email"
                    />
                    <button className={`bg-white px-2 py-1  ${light ? "text-black bg-white" : "text-gray-700 bg-gray-400"} rounded-r-md`}>Subscribe</button>
                </form>
            </div>
        </div>
        // </div>
    );
}

export default StarchitectComingSoon;

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
        console.log('Button clicked'); // Ensure this logs to console
        setLight(prevLight => !prevLight);
    }

    return (
        <div className="flex flex-col w-full h-full relative justify-center text-white items-center"
             style={{ backgroundImage: `url(${backimage})` }}>
            <img
                src={spotlight}
                className="absolute top-[-10%] opacity-90 h-[85%] md:h-[85%] lg:h-[92%] transition-all ease-in-out"
                alt="Spotlight"
            />
            <h1 className="font-semibold z-50 text-4xl font-[cinzel] text-center">Coming <br /> Soon</h1>
            <img
                src={light ? brownsofa : blacksofa}
                className="z-40 w-[15rem] md:w-[20rem] lg:w-[22rem] cursor-pointer"
                alt="Sofa"
                onClick={switchLight} // Add onClick to the sofa image for testing
            />
            <img
                src={light ? OffButton : OnButton}
                alt={light ? "Turn Off Button" : "Turn On Button"}
                width={50}
                onClick={switchLight}
                className="cursor-pointer" // Ensure cursor is pointer
            />
            <h2 className="font-semibold z-50 font-[Kaushan,cursive]">Site is Under Maintenance</h2>
            <form action="" className="flex gap-1 mt-2 backdrop-blur-sm">
                <input
                    type="text"
                    className="bg-white px-2 py-1 text-black md:w-[40vw] w-[50vw] lg:w-[20vw] outline-none rounded-l-md border-white border"
                    placeholder="Enter Your Email"
                />
                <button className="bg-white px-2 py-1 text-black rounded-r-md">Subscribe</button>
            </form>
            {/* Test button to ensure click event works */}
            <button onClick={switchLight} className="bg-white px-2 py-1 text-black rounded-md mt-4">Toggle Light</button>
        </div>
    );
}

export default StarchitectComingSoon;

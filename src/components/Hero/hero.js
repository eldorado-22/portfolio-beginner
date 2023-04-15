import React from 'react';
import heroImg from "./../../images/heroImg.png"
const Hero = () => {
    return (
        <section id="hero" style={{
            background: "rgba(1,1,21,0.91)"
        }} className="">
            <div className="cotainer">
                <div className="hero py-10 flex items-center justify-around">
                    <div className="hero--text">
                        <h4 className="text-amber-50 uppercase text-2xl">Hello</h4>
                        <h1 className="text-amber-50 uppercase text-3xl py-2">I'm Jumashev <br/> Eldorado</h1>
                        <p className="text-gray-500 text-xl">I've been doing web design, front-end development for <br/>
                            a year now. Do you need a website design, site layout, <br/>
                            or maybe a turnkey website? Then contact me
                        </p>
                        <button className="text-xl px-10 mt-3 py-2 bg-black text-amber-50 rounded-3xl">Call Me</button>
                    </div>
                    <div className="hero--images">
                        <img src={heroImg} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
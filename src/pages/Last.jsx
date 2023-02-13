import { useState } from "react";
import Layout from "../Layout";
import Confetti from "react-confetti";
import { useEffect } from "react";
import Sound from "react-sound";
import { Animated } from "react-animated-css";

const Last = () => {
    const [run, setRun] = useState(true);
    const [play, setPlay] = useState("PAUSED");
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setPlay(true);
        setInterval(() => {
            setRun(false);
        }, 10000);
    }, []);
    return (
        <Layout>
            <Sound url="https://ucarecdn.com/d4841cd8-dc7a-4ac6-822e-f0e19efcb2d5/" playStatus={play} />

            {display ? (
                <>
                    <div className="w-full  flex flex-col items-center justify-center px-3 overflow-x-hidden">
                        <Animated animationIn="fadeIn" animationInDuration={2000}>
                            <h1 className="text-2xl font-bold text-white tracking-tighter antialiased mb-3">
                                Sekali lagi, Happy Birthdayyyy kakkk🥳🥳🥳
                            </h1>
                        </Animated>
                        <Animated animationIn="fadeIn" animationInDuration={2000}>
                            <div className="max-w-3xl  border-gray-300 rounded-xl bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80 drop-shadow-md overflow-hidden">
                                <Animated animationIn="fadeIn" animationInDuration={1000} animationInDelay={2000}>
                                    <div className="flex items-center px-4 py-2 gap-x-2">
                                        <img
                                            src="https://ucarecdn.com/2ce8f883-7ace-43e6-9e2b-52fb4d12f877/"
                                            alt="avatar-ig"
                                            className="w-7 h-7 rounded-full"
                                        />
                                        <span className="font-semibold leading-tight antialiased tracking-tight">
                                            sisternya.hadid
                                        </span>
                                    </div>
                                </Animated>
                                <Animated animationIn="fadeIn" animationInDuration={1000} animationInDelay={2000}>
                                    <img src="https://ucarecdn.com/518cd13f-354c-4188-a163-84084c7729c8/" alt="photo" />
                                    <div className="px-4 py-1">
                                        <span className="text-sm font-semibold leading-tight antialiased tracking-tight">
                                            sisternya.hadid
                                        </span>
                                        <p className="leading-relaxed text-sm">Mupullllllllllllllllanggg 😭😭</p>
                                    </div>
                                </Animated>
                            </div>
                        </Animated>
                    </div>
                    <Confetti recycle={run} />
                </>
            ) : (
                <button
                    onClick={() => {
                        setPlay("PLAYING");
                        setDisplay(true);
                    }}
                    className={`${display ? "hidden" : "block"} py-2 px-3 rounded-lg bg-white animate-bounce`}
                >
                    🎁 Pencet lagii...
                </button>
            )}
        </Layout>
    );
};

export default Last;

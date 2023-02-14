import Layout from "../Layout";
import cat from "../api/cat.json";
import Lottie from "react-lottie";
import { Animated } from "react-animated-css";
import { useState, useEffect } from "react";
import Navlink from "./../component/Navlink";
const ListGift = () => {
    const [loading, setLoading] = useState(true);
    const [displayButton, setDisplayButton] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setDisplayButton(true);
        }, 5000);
    }, []);

    const handleButton = () => {
        setLoading(false);
        setDisplayButton(false);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cat,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Layout>
            {loading ? (
                <div>
                    <div className=" absolute -top-10 md:-top-44 left-0 md:left-56 overflow-hidden">
                        <Lottie options={defaultOptions} width={400} height={400} />
                    </div>
                    <h3
                        className={`${
                            displayButton ? "hidden" : "block"
                        } mt-6 text-center font-birthday font-semibold drop-shadow-sm animate-pulse`}
                    >
                        Tunggu bentarrr.....
                    </h3>
                    <Animated animationIn="fadeIn" animationInDuration={1500} isVisible={displayButton}>
                        <button
                            onClick={() => {
                                handleButton();
                            }}
                            className={`${
                                displayButton ? "block" : "hidden"
                            } mt-6 text-center py-2 px-4 border rounded-full border-white bg-white shadow-md text-slate-900 font-semibold text-md hover:bg-gray-100 transition ease-in duration-300 hover:scale-105`}
                        >
                            Nungguin ya? yu 🚀
                        </button>
                    </Animated>
                </div>
            ) : (
                <div className="w-full md:w-3/4 p-4 border-gray-300 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 drop-shadow-md overflow-hidden">
                    <Animated animationIn="fadeIn" animationInDuration={1500}>
                        <div className="w-2/3 border-b border-gray-900 mb-3">
                            <h3 className="font-semibold font-avenir">Alasmakas skalas kasming masked</h3>
                        </div>
                        <div className="aspect-w-9 aspect-h-16 rounded-md overflow-hidden">
                            <iframe
                                src="https://player.castr.com/vod/LJ29wxYQ5VEtuIXd.mov"
                                className="w-full h-full"
                                width={"100%"}
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <span className="text-xs text-gray-700 font-thin">*Kalo udah beres silahkan kesini kak 👉</span>
                            <Navlink to={"/ba"} text={"🎁"} />
                        </div>
                    </Animated>
                </div>
            )}
        </Layout>
    );
};

export default ListGift;

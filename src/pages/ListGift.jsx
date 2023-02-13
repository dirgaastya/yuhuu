import Layout from "../Layout";
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import data from "../api/video.json";
import cat from "../api/cat.json";
import Lottie from "react-lottie";
import { Animated } from "react-animated-css";
import { useState, useEffect } from "react";
const ListGift = () => {
    const [loading, setLoading] = useState(true);
    const [displayButton, setDisplayButton] = useState(false);

    useEffect(() => {
        console.log(loading);
        setInterval(() => {
            setDisplayButton(true);
        }, 5000);
        console.log(loading);
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
                    <div className=" absolute -top-16 left-0 overflow-hidden">
                        <Lottie options={defaultOptions} width={400} height={400} />
                    </div>
                    <h3 className="mt-6 text-center font-birthday font-semibold drop-shadow-sm animate-pulse">
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
                            Nungguin ya? klik ini ajaa
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
                                src="https://ucarecdn.com/b75acdb8-e249-4f50-acf6-d922d93d5a0d/"
                                className="w-full h-full"
                                width={"100%"}
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                    </Animated>
                </div>
            )}
        </Layout>
    );
};

export default ListGift;

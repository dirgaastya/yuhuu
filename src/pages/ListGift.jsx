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

    useEffect(() => {
        setInterval(() => {
            setLoading(false);
        }, 5000);
    }, []);

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
                <Lottie options={defaultOptions} height={400} width={400} />
            ) : (
                <div className="w-4/5 mx-auto">
                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={2000}>
                        <div className="py-2 px-4 w-full mb-6 border-gray-300 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 drop-shadow-md">
                            <h3 className="font-birthday">Silahkan dibuka tuatu kakk 🎁</h3>
                        </div>
                    </Animated>
                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={2000}>
                        <div className=" w-full border-gray-300 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 drop-shadow-md overflow-hidden">
                            {data.map((gift, index) => (
                                <Link
                                    to={`${gift.id}`}
                                    key={index}
                                    className="py-2 px-4 flex justify-between items-center hover:bg-white/80  hover:font-bold transition-all duration-500 ease-linear"
                                >
                                    <h3 className="font-avenir">
                                        <span className="font-semibold ">{gift.id}. </span>
                                        {gift.title}
                                    </h3>
                                    <CiPlay1 />
                                </Link>
                            ))}
                        </div>
                    </Animated>
                </div>
            )}
        </Layout>
    );
};

export default ListGift;

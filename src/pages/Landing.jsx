import Layout from "../Layout";
import { Link } from "react-router-dom";
import Cake from "./../component/Cake";
import { Animated } from "react-animated-css";
import { useState, useEffect } from "react";

const Landing = () => {
    const [title, setTitle] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setTitle(true);
        }, 3000);
    }, []);
    return (
        <Layout>
            <div>
                <Cake className={`mb-10`} />
            </div>
            <div className="pb-6 space-y-3 flex flex-col justify-center">
                {title ? (
                    <Animated animationIn="fadeIn" isVisible={title} animationInDuration={2000}>
                        <Animated animationIn="tada" isVisible={title} animationInDuration={2000} animationInDelay={1000}>
                            <h1 className="font-birthday text-4xl text-center text-white drop-shadow-md">Happy Birthday ! </h1>
                        </Animated>
                    </Animated>
                ) : (
                    ""
                )}

                <Animated animationIn="fadeInLeft" isVisible={true} animationInDuration={2000} animationInDelay={5000}>
                    <Animated animationIn="tada" isVisible={true} animationInDuration={1000} animationInDelay={5500}>
                        <p className="font-avenir font-semibold text-xl uppercase text-center text-white drop-shadow">Kakk 🥳</p>
                    </Animated>
                </Animated>

                <div className="w-full flex justify-center pt-16">
                    <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={1000} animationInDelay={6500}>
                        <Link
                            to="greet"
                            className="w-full text-center py-2 px-4 border rounded-full border-white bg-white text-slate-900 font-semibold text-md hover:bg-gray-200 transition ease-in duration-300 hover:scale-105"
                        >
                            Mari kak mampir
                        </Link>
                    </Animated>
                </div>
            </div>
        </Layout>
    );
};

export default Landing;

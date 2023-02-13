import Layout from "../Layout";
import Navlink from "../component/Navlink";
import { Animated } from "react-animated-css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <Layout>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000}>
                <div className="w-full min-h-screen py-6 border-gray-300 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 drop-shadow-md overflow-hidden">
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationInDelay={2000}>
                        <div className="flex flex-col items-center justify-center px-6 py-4">
                            <Animated
                                animationIn="tada"
                                animationOut="fadeOut"
                                animationInDuration={3000}
                                animationInDelay={3000}
                            >
                                <img
                                    src="https://ucarecdn.com/caa035c4-91e3-431e-a9ca-5717dd44bd48/"
                                    alt="avatar"
                                    className="w-52"
                                />
                            </Animated>
                            <div>
                                <Animated
                                    animationIn="fadeInLeft"
                                    animationOut="fadeOut"
                                    animationInDuration={2000}
                                    animationInDelay={3500}
                                >
                                    <h3 className="font-birthdayWish text-6xl self-start">
                                        <TypeAnimation sequence={["Serta mulia kak", 1000]} speed={30} />
                                    </h3>
                                </Animated>
                                <Animated
                                    animationIn="fadeIn"
                                    animationOut="fadeOut"
                                    animationInDuration={3000}
                                    animationInDelay={5000}
                                >
                                    <p className="font-avenir text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt eaque voluptate
                                        eligendi dolorum nulla aspernatur temporibus animi corporis dolor modi quae, iusto fuga
                                        fugit quod, aliquam itaque placeat. Iure.
                                    </p>
                                </Animated>
                            </div>
                        </div>
                    </Animated>

                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationInDelay={6000}>
                        <div className="flex flex-col items-center justify-center px-6 py-4">
                            <Animated
                                animationIn="tada"
                                animationOut="fadeOut"
                                animationInDuration={3000}
                                animationInDelay={6500}
                            >
                                <Link to="/rahasia">
                                    <img
                                        src="https://ucarecdn.com/92ad7ab3-09a9-4ed9-b9bb-ea649a3a21b6/"
                                        alt="Gift"
                                        className="w-52"
                                    />
                                </Link>
                            </Animated>
                            <div className="mb-3">
                                <Animated
                                    animationIn="slideInUp"
                                    animationOut="fadeOut"
                                    animationInDuration={2000}
                                    animationInDelay={7500}
                                >
                                    <h3 className="font-birthdayWish text-6xl self-start">Ada sesuatu nih kakk,</h3>
                                </Animated>
                            </div>
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={3000}
                                animationInDelay={8500}
                            >
                                <Navlink
                                    to={"/gift"}
                                    text={"Yuhuuu"}
                                    className="w-full text-center py-2 px-4 border rounded-full border-white bg-white text-slate-900 font-semibold text-md hover:bg-gray-200 transition ease-in duration-300 hover:scale-105"
                                />
                            </Animated>
                        </div>
                    </Animated>
                </div>
            </Animated>
        </Layout>
    );
};

export default Menu;

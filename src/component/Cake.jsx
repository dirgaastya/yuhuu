import Fire from "./Fire";
import { Animated } from "react-animated-css";

export default function Cake({ className }) {
    return (
        <div className={`${className} flex flex-col justify-center items-center`}>
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={2000}
                animationInDelay={2000}
            >
                <Fire />
            </Animated>
            <Animated
                animationIn="bounceInDown"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={1000}
                animationInDelay={1000}
            >
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" width={150}>
                    <line
                        x1="32"
                        x2="32"
                        y1="10.62"
                        y2="4.42"
                        fill="none"
                        stroke="#3c3b72"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                    />
                    <path
                        fill="#ffe993"
                        stroke="#3c3b72"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M29.5,10.62h5a1,1,0,0,1,1,1V21.79a0,0,0,0,1,0,0h-7a0,0,0,0,1,0,0V11.62A1,1,0,0,1,29.5,10.62Z"
                    />
                    <path
                        fill="#c4c8d1"
                        stroke="#3c3b72"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M9.16,28.74H54.84a0,0,0,0,1,0,0V49.8a4,4,0,0,1-4,4H13.16a4,4,0,0,1-4-4V28.74A0,0,0,0,1,9.16,28.74Z"
                    />
                    <path
                        fill="#fffaf0"
                        stroke="#3c3b72"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M13.63,21.79H50.38a6.12,6.12,0,0,1,6.12,6.12v4.55a6.13,6.13,0,0,1-6.12,6.13h0a6.13,6.13,0,0,1-6.13-6.13h0a6.13,6.13,0,0,1-6.12,6.13h0A6.13,6.13,0,0,1,32,32.46h0a6.13,6.13,0,0,1-6.12,6.13h0a6.13,6.13,0,0,1-6.13-6.13h0a6.13,6.13,0,0,1-6.12,6.13h0A6.13,6.13,0,0,1,7.5,32.46V27.91A6.12,6.12,0,0,1,13.63,21.79Z"
                    />
                    <path
                        fill="#dee3e7"
                        stroke="#3c3b72"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M51.91,59.58H12.09a6,6,0,0,1-5.34-3.27L3.24,49.46A1,1,0,0,1,4.13,48H59.87a1,1,0,0,1,.89,1.45l-3.5,6.85A6,6,0,0,1,51.91,59.58Z"
                    />
                </svg>
            </Animated>
        </div>
    );
}

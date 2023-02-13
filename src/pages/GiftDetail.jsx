import { useParams } from "react-router-dom";
import Layout from "./../Layout";
import { useState, useEffect } from "react";
import data from "../api/video.json";
import Navlink from "./../component/Navlink";
import cat from "../api/cat.json";
import Lottie from "react-lottie";
import FlowerLoading from "../component/FlowerLoading";
import NoGift from "../component/NoGift";
import { Link } from "react-router-dom";

const GiftDetail = () => {
    const { id } = useParams();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cat,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [gift, setGift] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setGift(data.filter((gift) => gift.id == id));
        setInterval(() => {
            setLoading(false);
        }, 3000);
    }, []);
    useEffect(() => {
        setLoading(true);
        setGift(data.filter((gift) => gift.id == id));
        setInterval(() => {
            setLoading(false);
        }, 2000);
    }, [id]);
    return (
        <Layout>
            {loading ? (
                <Lottie options={defaultOptions} height={400} width={400} />
            ) : gift.length > 0 ? (
                <div className="w-full p-4 border-gray-300 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 drop-shadow-md overflow-hidden">
                    <div className="w-2/3 border-b border-gray-900 mb-3">
                        <h3 className="font-semibold font-avenir">{gift[0].title}</h3>
                    </div>
                    <div className="aspect-w-9 aspect-h-16 rounded-md overflow-hidden">
                        <iframe src={gift[0].url} className="w-full h-full" width={"100%"}></iframe>
                    </div>
                    <div className="my-3 flex justify-between items-center">
                        <Navlink to={"/gift"} text={"Liat lagii daftar"} />
                        <Navlink to={`/gift/${gift[0].id + 1}`} text={"Atau berikutnyaa"} />
                    </div>
                </div>
            ) : (
                <div className="h-screen w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <NoGift />
                        <p className="font-avenir font-bold text-xl">Yah gaada lagi maap:(</p>
                    </div>
                    <Link to="/rahasia" className="absolute bottom-10 text-xs text-white">
                        Made by ❤️
                    </Link>
                </div>
            )}
        </Layout>
    );
};

export default GiftDetail;

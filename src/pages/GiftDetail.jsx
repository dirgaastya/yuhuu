import { useParams } from "react-router-dom";
import Layout from "./../Layout";
import { useState, useEffect } from "react";
import data from "../api/video.json";
import Navlink from "./../component/Navlink";

const GiftDetail = () => {
    const { id } = useParams();

    const [gift, setGift] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setGift(data.filter((gift) => gift.id == id));
        setInterval(() => {
            setLoading(false);
        }, 2000);
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
            {gift.length > 0 ? (
                <div className="w-full p-4 border-gray-300 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 drop-shadow-md overflow-hidden">
                    <div className="w-2/3 border-b border-gray-900 mb-3">
                        <h3 className="font-semibold font-avenir">{gift[0].title}</h3>
                    </div>
                    <div className="aspect-w-9 aspect-h-16 rounded-md overflow-hidden">
                        <iframe src={gift[0].url}></iframe>
                    </div>
                    <div className="my-3 flex justify-between items-center">
                        <Navlink to={"/gift"} text={"Liat lagii daftar"} />
                        <Navlink to={`/gift/${gift[0].id + 1}`} text={"Atau berikutnyaa"} />
                    </div>
                </div>
            ) : (
                <div>Yah gaada:(</div>
            )}
        </Layout>
    );
};

export default GiftDetail;

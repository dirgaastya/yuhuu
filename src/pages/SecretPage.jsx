import Layout from "../Layout";
import Navlink from "../component/Navlink";
import NoGift from "../component/NoGift";
const SecretPage = () => {
    return (
        <Layout>
            <div className="h-screen w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <NoGift />
                    <p className="font-avenir font-bold text-xl">Yah gaada apa apa maap:(</p>
                    <Navlink to={"/greet"} text={"Balik lagi siniii"} />
                </div>
                <div className="absolute bottom-0 ">
                    <p className=" text-center text-xs text-white">Created with ❤️ by maskedd.</p>
                    <p className="text-center text-xs text-white">Video by luv.</p>
                </div>
            </div>
        </Layout>
    );
};

export default SecretPage;

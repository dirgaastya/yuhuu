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
                <p className="absolute bottom-10 text-xs text-white">Created with ❤️ by maskedd.</p>
            </div>
        </Layout>
    );
};

export default SecretPage;

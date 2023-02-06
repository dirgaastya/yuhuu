import Layout from "../Layout";
import Navlink from "../component/Navlink";
import Avatar from "../assets/img/boy-exploding-party-popper.png";
import Gift from "../assets/img/valentine-gift.png";
const Menu = () => {
    return (
        <Layout>
            <div className="w-full border-gray-300 rounded-lg bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 drop-shadow-md overflow-hidden">
                <div className="flex flex-col items-center justify-center px-6 py-4">
                    <img src={Avatar} alt="avatar" className="w-52" />
                    <div>
                        <h3 className="font-birthdayWish text-6xl self-start">Serta mulia kak,</h3>
                        <p className="font-avenir text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt eaque voluptate eligendi dolorum
                            nulla aspernatur temporibus animi corporis dolor modi quae, iusto fuga fugit quod, aliquam itaque
                            placeat. Iure.
                        </p>
                    </div>
                    {/* <img src={Gift} alt="gift" /> */}
                </div>
                <div className="flex flex-col items-center justify-center px-6 py-4">
                    <img src={Gift} alt="Gift" className="w-52" />
                    <div className="mb-4">
                        <h3 className="font-birthdayWish text-6xl self-start">Ada sesuatu nih kakk,</h3>
                    </div>
                    <Navlink to={"/"} text={"Yuhuuu!"} />
                </div>
            </div>
        </Layout>
    );
};

export default Menu;

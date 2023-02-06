import { Link } from "react-router-dom";
const Navlink = ({ to, text }) => {
    return (
        <Link
            to={to}
            className="text-center py-2 px-4 border rounded-full border-white bg-white shadow-md text-slate-900 font-semibold text-md hover:bg-gray-200 transition ease-in duration-300 hover:scale-105"
        >
            {text}
        </Link>
    );
};

export default Navlink;

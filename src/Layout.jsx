const Layout = ({ children }) => {
    return (
        <div
            className="min-h-screen w-full flex flex-col justify-center items-center  scroll-smooth py-6 px-3 md:px-24"
            style={{
                backgroundImage: "linear-gradient(to right bottom, #60a5fa, #7db9fc, #9cccfd, #bddffe, #dff1ff)",
            }}
        >
            {children}
        </div>
    );
};

export default Layout;

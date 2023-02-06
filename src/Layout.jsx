const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-blue-400 to-blue-200 flex flex-col justify-center items-center p-6">
            {children}
        </div>
    );
};

export default Layout;

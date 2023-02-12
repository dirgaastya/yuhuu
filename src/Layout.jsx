const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-blue-400 via-blue-200 to-blue-100/60 flex flex-col justify-center items-center p-6 scroll-smooth">
            {children}
        </div>
    );
};

export default Layout;

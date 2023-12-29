const Navbar = () => {
    return(
        <div className={"flex justify-between items-center bg-secondary py-4 px-10 md:px-20"}>
            <div className={"py-2"}>
                <h1 className={"text-lg md:text-xl font-bold"}>SIEMENS Virtual Room Creator</h1>
            </div>

            <div className={"flex-col"}>
                <button
                    className={"bg-white text-primary font-medium px-5 py-2 rounded-2xl hover:bg-primary hover:text-white transition duration-500 ease-in-out"}
                    onClick={() => {
                        // @TODO: Implement logout
                        console.log("Logout")
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
};

export default Navbar;
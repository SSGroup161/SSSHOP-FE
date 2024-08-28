{
    /* <Drawer
                open={isOpenMenu}
                onClose={handleClose}
                className="z-50 w-full"
                position="left"
            >
                <Drawer.Header titleIcon={() => <></>} />
                <Drawer.Items>
                    <div className="flex flex-col justify-between h-screen pb-10">
                        <div className="flex flex-col gap-10 px-4 ">
                            <div className="flex items-center gap-2 cursor-pointer justify-center">
                                <img
                                    src="/SS-Shop-Logo-Black.svg"
                                    width={50}
                                    height={50}
                                    alt="LogoSS"
                                    className="w-10 cursor-pointer"
                                    onClick={() => navigate("/")}
                                />
                            </div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                id="SubMenu"
                            >
                                <h1
                                    className="font-poppins text-lg hover:underline"
                                    onClick={() => {
                                        navigate("/");
                                        setIsOpenMenu(false);
                                    }}
                                >
                                    {isIndo ? "Beranda" : " Maison"}
                                </h1>
                            </div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                id="SubMenu"
                            >
                                <h1
                                    className="font-poppins text-lg hover:underline"
                                    onClick={() => {
                                        navigate("/our-heritage");
                                        setIsOpenMenu(false);
                                    }}
                                >
                                    {isIndo ? "Sejarah Kami" : " Our Heritage"}
                                </h1>
                            </div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                id="SubMenu"
                            >
                                <h1
                                    className="font-poppins text-lg hover:underline"
                                    onClick={() => {
                                        navigate("/concierge");
                                        setIsOpenMenu(false);
                                    }}
                                >
                                    {isIndo ? "Kontak" : " Concierge"}
                                </h1>
                            </div>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                id="SubMenu"
                            >
                                <h1
                                    className="font-poppins text-lg hover:underline"
                                    onClick={() => {
                                        navigate("/under-construction");
                                        setIsOpenMenu(false);
                                    }}
                                >
                                    {isIndo ? "Koleksi" : " Couture"}
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-4 px-4 mb-6">
                                <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    id="SubMenu"
                                >
                                    <h1
                                        className="font-poppins text-lg hover:underline"
                                        onClick={() =>
                                            navigate("/under-construction")
                                        }
                                    >
                                        FAQ&apos;s
                                    </h1>
                                </div>
                                <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    id="SubMenu"
                                >
                                    <h1
                                        className="font-poppins text-lg hover:underline"
                                        onClick={() =>
                                            navigate("/under-construction")
                                        }
                                    >
                                        {isIndo
                                            ? "Kebijakan Pribadi"
                                            : " Privacy Policy"}
                                    </h1>
                                </div>
                                <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    id="SubMenu"
                                >
                                    <h1
                                        className="font-poppins text-lg hover:underline"
                                        onClick={() =>
                                            navigate("/under-construction")
                                        }
                                    >
                                        {isIndo
                                            ? "Syarat dan Ketentuan"
                                            : " Terms and Conditions"}
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="text-xs text-center font-roboto">
                                        {isIndo
                                            ? "Semua Hak Dilindungi Undang-Undang ©2024 SS Shop | Bagian dari SS Grup"
                                            : "All Rights Reserved ©2024 SS Shop | Part of SS Group"}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer.Items>
            </Drawer>

            <Drawer
                open={isOpenProfile}
                onClose={handleClose}
                position="right"
                className="z-50 w-full"
            >
                <Drawer.Header titleIcon={() => <></>} />
                <Drawer.Items>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                        Supercharge your hiring by taking advantage of our&nbsp;
                        <a
                            href="#"
                            className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
                        >
                            limited-time sale
                        </a>
                        &nbsp;for Flowbite Docs + Job Board. Unlimited access to
                        over 190K top-ranked candidates and the #1 design job
                        board.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <a
                            href="#"
                            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                            Learn more
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Get access&nbsp;
                            <svg
                                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </Drawer.Items>
            </Drawer> */
}

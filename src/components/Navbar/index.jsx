import React, { useState, useEffect } from "react";
import { Drawer } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../utils/LanguageContext";

export default function Navbar() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const { isIndo, setIsIndo } = useLanguage();

    const handleClose = () => {
        setIsOpenMenu(false);
        setIsOpenProfile(false);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Drawer
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
            </Drawer>

            <div
                className={`w-screen h-20 md:h-28 bg-white py-6 px-6 md:px-20 fixed top-0 z-40 transition-all duration-500 ease-in-out ${
                    isScrolled ? "bg-opacity-100" : "bg-opacity-0"
                }`}
            >
                <div className=" w-full h-full flex items-center justify-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="lg:hidden mt-2 cursor-pointer"
                        onClick={() => setIsOpenMenu(true)}
                    >
                        <path
                            d="M3 6H21M3 12H21M3 18H21"
                            stroke={isScrolled ? "black" : "white"}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="flex items-center gap-10">
                        <div className="relative">
                            <img
                                src="/SS-Shop-Logo-White.svg"
                                alt="LogoMain"
                                width={20}
                                height={20}
                                className={`w-8 md:w-11 transition-opacity absolute duration-400  cursor-pointer ${
                                    isScrolled ? "opacity-0" : "opacity-100"
                                }`}
                                onClick={() => navigate("/")}
                            />
                            <img
                                src="/SS-Shop-Logo-Black.svg"
                                alt="LogoMain"
                                width={20}
                                height={20}
                                className={`w-8 md:w-11 transition-opacity duration-400  cursor-pointer ${
                                    isScrolled ? "opacity-100" : "opacity-0"
                                }`}
                                onClick={() => navigate("/")}
                            />
                        </div>
                        <div className="lg:flex items-center justify-between gap-20 mt-2 hidden">
                            <h1
                                className={`font-legitima cursor-pointer transition-colors ease-in-out hover:underline duration-600 text-lg tracking-wide ${
                                    isScrolled ? "text-black" : "text-white"
                                }`}
                                onClick={() => navigate("/")}
                            >
                                {isIndo ? "Beranda" : "Maison"}
                            </h1>
                            <h1
                                className={`font-legitima cursor-pointer transition-colors ease-in-out hover:underline duration-600 text-lg tracking-wide ${
                                    isScrolled ? "text-black" : "text-white"
                                }`}
                                onClick={() => navigate("/our-heritage")}
                            >
                                {isIndo ? "Sejarah Kami" : "Our Heritage"}
                            </h1>
                            <h1
                                className={`font-legitima cursor-pointer transition-colors ease-in-out hover:underline duration-600 text-lg tracking-wide ${
                                    isScrolled ? "text-black" : "text-white"
                                }`}
                                onClick={() => navigate("/concierge")}
                            >
                                {isIndo ? "Hubungi" : "Concierge"}
                            </h1>
                            <h1
                                className={`font-legitima cursor-pointer transition-colors ease-in-out hover:underline duration-600 text-lg tracking-wide ${
                                    isScrolled ? "text-black" : "text-white"
                                }`}
                                onClick={() => navigate("/under-construction")}
                            >
                                {isIndo ? "Koleksi" : "Couture"}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="flex items-center justify-center gap-2">
                            <p
                                onClick={() => setIsIndo(true)}
                                className={`font-legitima cursor-pointer transition-colors ease-in-out ${
                                    isIndo ? "underline" : ""
                                } hover:underline duration-600 md:text-xl  ${
                                    isScrolled ? "text-black" : "text-white"
                                }`}
                            >
                                IND
                            </p>
                            <p
                                className={`font-legitima transition-colors ease-in-out duration-600 md:text-2xl ${
                                    isScrolled ? "text-black" : "text-white"
                                }`}
                            >
                                |
                            </p>
                            <p
                                onClick={() => setIsIndo(false)}
                                className={`font-legitima cursor-pointer transition-colors ${
                                    isIndo ? "" : "underline"
                                } hover:underline ease-in-out duration-600 md:text-xl ${
                                    isScrolled ? "text-black" : "text-white"
                                }`}
                            >
                                ENG
                            </p>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="transition-colors ease-in-out duration-600 hidden"
                            onClick={() => setIsOpenProfile(true)}
                        >
                            <path
                                d="M6.57796 15.482C5.16296 16.324 1.45296 18.044 3.71296 20.197C4.81596 21.248 6.04496 22 7.58996 22H16.408C17.954 22 19.183 21.248 20.286 20.197C22.546 18.044 18.836 16.324 17.421 15.482C15.7788 14.5119 13.9063 14.0001 11.999 14.0001C10.0916 14.0001 8.22017 14.5119 6.57796 15.482ZM16.5 6.5C16.5 7.69347 16.0259 8.83807 15.1819 9.68198C14.338 10.5259 13.1934 11 12 11C10.8065 11 9.66189 10.5259 8.81798 9.68198C7.97407 8.83807 7.49996 7.69347 7.49996 6.5C7.49996 5.30653 7.97407 4.16193 8.81798 3.31802C9.66189 2.47411 10.8065 2 12 2C13.1934 2 14.338 2.47411 15.1819 3.31802C16.0259 4.16193 16.5 5.30653 16.5 6.5Z"
                                stroke={isScrolled ? "black" : "white"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

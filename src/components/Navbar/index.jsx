import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../utils/LanguageContext";

export default function Navbar() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const { isIndo, setIsIndo } = useLanguage();
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [thirdDrawer, setThirdDrawer] = useState(false);
    const [isCouture, setIsCouture] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };
    const showThirdDrawer = () => {
        setThirdDrawer(true);
    };
    const onThirdDrawerClose = () => {
        setThirdDrawer(false);
    };
    const showCouture = () => {
        setIsCouture(true);
    };
    const onCoutureClose = () => {
        setIsCouture(false);
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
                title={isIndo ? "Koleksi Kami" : "Our Couture"}
                width={320}
                closable
                placement="left"
                onClose={onCoutureClose}
                open={isCouture}
            >
                <div className="w-full h-full flex flex-col items-center justify-between">
                    <div
                        className="relative w-full h-32 rounded-xl cursor-pointer overflow-hidden"
                        onClick={showThirdDrawer}
                    >
                        <div className="bg-image w-full h-full absolute top-0 left-0"></div>
                        <div className="bg-black/30 w-full h-full flex items-center justify-center px-6 relative z-10">
                            <h1 className="text-white font-legitima text-3xl drop-shadow-lg">
                                Deluxe Collection
                            </h1>
                        </div>
                    </div>
                    <h1
                        className="font-legitima underline cursor-pointer"
                        onClick={() => navigate("/our-couture")}
                    >
                        See All Collection
                    </h1>
                </div>
                <Drawer
                    title={isIndo ? "Koleksi Mewah" : "Deluxe Collection"}
                    width={320}
                    closable
                    placement="left"
                    onClose={onThirdDrawerClose}
                    open={thirdDrawer}
                >
                    <div className="w-full h-full flex flex-col gap-2 justify-start items-center">
                        <div className="w-full h-44 gap-2 bg-slate-300 bg-[url('/AssetSidebar2.png')] bg-cover bg-top ">
                            <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start font-legitima p-4 text-lg">
                                <h1 className="text-white">
                                    {isIndo ? "Gaun Putih" : "White Dresses"}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-full flex gap-2">
                            <div className="w-full h-full gap-2 bg-slate-300 bg-[url('/AssetSidebar3.png')] bg-cover bg-top ">
                                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start font-legitima p-4 text-lg">
                                    <h1 className="text-white">
                                        {isIndo ? "Gaun" : "Dress"}
                                    </h1>
                                </div>
                            </div>
                            <div className="w-full h-full gap-2 bg-slate-300 bg-[url('/AssetSidebar4.png')] bg-cover bg-top ">
                                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start font-legitima p-4 text-lg">
                                    <h1 className="text-white">
                                        {isIndo ? "Satu Set" : "One Set"}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full mt-2 bg-transparent items-center justify-center flex border-2 border-black shadow-lg hover:bg-black text-black hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
                            onClick={() =>
                                navigate("/our-couture/deluxe-collection")
                            }
                        >
                            <button className="py-[6px]">
                                {isIndo ? "Lihat Semua" : "See More"}
                            </button>
                        </div>
                    </div>
                </Drawer>
            </Drawer>
            <Drawer
                title={
                    <div className="w-full justify-center items-center flex">
                        <img
                            src="/SS-Shop-Logo-Black.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-8 -ms-10"
                            loading="lazy"
                        />
                    </div>
                }
                width={320}
                closable
                onClose={onClose}
                open={open}
                placement="left"
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-10 px-4 ">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            id="SubMenu"
                        >
                            <h1
                                className="font-poppins text-lg hover:underline"
                                onClick={() => {
                                    navigate("/");
                                    setOpen(false);
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
                                    setOpen(false);
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
                                    setOpen(false);
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
                                onClick={showChildrenDrawer}
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
                                        ? "Semua Hak Dilindungi Undang-Undang ©2024 Shellasaukia.co | Bagian dari SS Grup"
                                        : "All Rights Reserved ©2024 Shellasaukia.co | Part of SS Group"}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Drawer
                    title={isIndo ? "Koleksi Kami" : "Our Couture"}
                    width={320}
                    closable
                    placement="left"
                    onClose={onChildrenDrawerClose}
                    open={childrenDrawer}
                >
                    <div className="w-full h-full flex flex-col items-center justify-between">
                        <div
                            className="relative w-full h-32 rounded-xl cursor-pointer overflow-hidden"
                            onClick={showThirdDrawer}
                        >
                            <div className="bg-image w-full h-full absolute top-0 left-0"></div>
                            <div className="bg-black/30 w-full h-full flex items-center justify-center px-6 relative z-10">
                                <h1 className="text-white font-legitima text-3xl drop-shadow-lg">
                                    Deluxe Collection
                                </h1>
                            </div>
                        </div>
                        <h1
                            className="font-legitima underline cursor-pointer"
                            onClick={() => navigate("/our-couture")}
                        >
                            See All Collection
                        </h1>
                    </div>
                    <Drawer
                        title={isIndo ? "Koleksi Mewah" : "Deluxe Collection"}
                        width={320}
                        closable
                        placement="left"
                        onClose={onThirdDrawerClose}
                        open={thirdDrawer}
                    >
                        <div className="w-full h-full flex flex-col gap-2 justify-start items-center">
                            <div className="w-full h-44 gap-2 bg-slate-300 bg-[url('/AssetSidebar2.png')] bg-cover bg-top ">
                                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start font-legitima p-4 text-lg">
                                    <h1 className="text-white">
                                        {isIndo
                                            ? "Gaun Putih"
                                            : "White Dresses"}
                                    </h1>
                                </div>
                            </div>
                            <div className="w-full h-80 flex gap-2">
                                <div className="w-full h-full gap-2 bg-slate-300 bg-[url('/AssetSidebar3.png')] bg-cover bg-top ">
                                    <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start font-legitima p-4 text-lg">
                                        <h1 className="text-white">
                                            {isIndo ? "Gaun" : "Dress"}
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full h-full gap-2 bg-slate-300 bg-[url('/AssetSidebar4.png')] bg-cover bg-top ">
                                    <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start font-legitima p-4 text-lg">
                                        <h1 className="text-white">
                                            {isIndo ? "Satu Set" : "One Set"}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-full mt-2 bg-transparent items-center justify-center flex border-2 border-black shadow-lg hover:bg-black text-black hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
                                onClick={() =>
                                    navigate("/our-couture/deluxe-collection")
                                }
                            >
                                <button className="py-[6px]">
                                    {isIndo ? "Lihat Semua" : "See More"}
                                </button>
                            </div>
                        </div>
                    </Drawer>
                </Drawer>
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
                        onClick={showDrawer}
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
                                onClick={showCouture}
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

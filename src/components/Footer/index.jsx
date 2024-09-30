import React from "react";
import { useLanguage } from "../../utils/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const { isIndo } = useLanguage();

    return (
        <>
            <section className="w-full lg:h-[30rem] bg-black overflow-hidden">
                <div className="max-w-screen-2xl m-auto flex flex-col md:flex-row">
                    <div className="h-full relative">
                        <div className="border-b-2 border-white px-10 py-8 flex flex-col gap-4">
                            <img
                                src="/SS-Shop-Logo-Landscape.png"
                                alt="SSShopLandscape"
                                width={20}
                                height={20}
                                loading="lazy"
                                className="w-96"
                            />
                            <p className="text-gray-300 font-poppins text-sm">
                                {isIndo
                                    ? "Dalam dunia fesyen, tren datang dan pergi, namun keanggunan sejati tetap teruji oleh waktu. Desain kami merupakan perpaduan harmonis antara kemewahan dan kecanggihan, diciptakan untuk mereka yang menghargai seni berpakaian dengan baik. Masuki dunia di mana setiap karya menceritakan kisah keanggunan dan keistimewaan."
                                    : "In the world of fashion, trends come and go, but true elegance stands the test of time. Our designs are a harmonious blend of luxury and sophistication, created for those who appreciate the art of dressing well. Enter a world where every piece tells a story of elegance and distinction."}
                            </p>
                        </div>
                        <div className="flex w-full flex-wrap items-start justify-between px-10 py-8 border-b-2 border-white">
                            <div className="">
                                <h1 className="text-white font-legitima text-lg">
                                    {isIndo ? "Akses Cepat" : "Quick Links"}
                                </h1>
                                <div className="flex flex-col gap-2 mt-4">
                                    <h1
                                        className="font-poppins text-white text-sm font-light cursor-pointer hover:underline"
                                        onClick={() => {
                                            navigate("/our-heritage");
                                        }}
                                    >
                                        {isIndo
                                            ? "Sejarah Kami"
                                            : "Our Heritage"}
                                    </h1>
                                    <h1
                                        className="font-poppins text-white text-sm font-light cursor-pointer hover:underline"
                                        onClick={() => {
                                            navigate("/concierge");
                                        }}
                                    >
                                        {isIndo ? "Hubungi" : "Concierge"}
                                    </h1>
                                    <h1
                                        className="font-poppins text-white text-sm font-light cursor-pointer hover:underline"
                                        onClick={() => {
                                            navigate("/our-couture");
                                        }}
                                    >
                                        {isIndo ? "Koleksi" : "Couture"}
                                    </h1>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-white font-legitima text-lg">
                                    {isIndo ? "Informasi" : "Information"}
                                </h1>
                                <div className="flex flex-col gap-2 mt-4">
                                    <h1
                                        className="font-poppins text-white text-sm font-light cursor-pointer hover:underline"
                                        onClick={() => {
                                            navigate("/terms-conditions");
                                        }}
                                    >
                                        {isIndo
                                            ? "Syarat dan Ketentuan"
                                            : " Terms and Conditions"}
                                    </h1>
                                    <h1
                                        className="font-poppins text-white text-sm font-light cursor-pointer hover:underline"
                                        onClick={() => {
                                            navigate("/privacy-policy");
                                        }}
                                    >
                                        {isIndo
                                            ? "Kebijakan Pribadi"
                                            : " Privacy Policy"}
                                    </h1>
                                </div>
                            </div>
                            <div className="mt-8 md:mt-0">
                                <h1 className="text-white font-legitima text-lg">
                                    {isIndo ? "Hubungi Kami" : "Get In Touch"}
                                </h1>
                                <div className="flex flex-col gap-2 mt-4">
                                    <a
                                        href="https://wa.me/6282258011491"
                                        // target="blank"
                                        className="font-poppins text-white text-sm font-light cursor-pointer hover:underline"
                                    >
                                        ‪+62 822‑5802‑2491‬
                                    </a>
                                    <a
                                        href="mailto:info@shellasaukia.co"
                                        className="font-poppins text-white text-sm font-light cursor-pointer hover:underline"
                                    >
                                        info@shellasaukia.co
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-start px-10 py-4">
                            <h1 className="text-white font-poppins text-sm">
                                {isIndo
                                    ? "Semua Hak Dilindungi Undang-Undang ©2024 PT Shella Saukia Putri | Bagian dari SS Grup"
                                    : "All Rights Reserved ©2024 PT Shella Saukia Putri | Part of SS Group"}
                            </h1>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 md:border-l-2 border-white px-10 py-8 md:py-14 flex flex-col items-center justify-start">
                        <h1 className="text-white font-legitima text-3xl md:text-2xl lg:text-3xl">
                            {isIndo ? "Ikuti Kami Di" : "Follow Us On"}
                        </h1>
                        <div className="w-full mt-8 md:mt-10">
                            <a
                                href="https://www.instagram.com/shellasaukia.co.id/"
                                target="blank"
                            >
                                <div className="w-full h-10 border-2 border-white mt-6 flex items-center justify-center rounded-lg text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
                                    <h1 className=" font-poppins font-light">
                                        Instagram
                                    </h1>
                                </div>
                            </a>
                            <a
                                href="https://www.youtube.com/@shellasaukia2979"
                                target="blank"
                            >
                                <div className="w-full h-10 border-2 border-white mt-6 flex items-center justify-center rounded-lg text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
                                    <h1 className=" font-poppins font-light">
                                        Youtube
                                    </h1>
                                </div>
                            </a>
                            <a
                                href="https://shopee.co.id/shellasaukiaofficial"
                                target="blank"
                            >
                                <div className="w-full h-10 border-2 border-white mt-6 flex items-center justify-center rounded-lg text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
                                    <h1 className=" font-poppins font-light">
                                        Shopee
                                    </h1>
                                </div>
                            </a>
                            <a
                                href="https://www.tiktok.com/@shellasaukia.co"
                                target="blank"
                            >
                                <div className="w-full h-10 border-2 border-white mt-6 flex items-center justify-center rounded-lg text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
                                    <h1 className=" font-poppins font-light">
                                        Tiktok
                                    </h1>
                                </div>
                            </a>
                        </div>
                        <div className="md:hidden flex items-center justify-start w-full mt-8">
                            <h1 className="text-white font-poppins text-xs text-center">
                                {isIndo
                                    ? "Semua Hak Dilindungi Undang-Undang ©2024 PT Shella Saukia Putri| Bagian dari SS Grup"
                                    : "All Rights Reserved ©2024 PT Shella Saukia Putri| Part of SS Group"}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

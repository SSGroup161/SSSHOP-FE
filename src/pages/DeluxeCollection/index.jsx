import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../utils/LanguageContext";

export default function DeluxeCollection() {
    const navigate = useNavigate();
    const { isIndo } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = "Deluxe Collection - SHELLA SAUKIA.CO©";
    const description =
        "Shella Saukia Shop (SS Shop) is a branch company of the Shella Saukia Group that focuses on the world of fashion, the business has been started since 2014 which was started directly by Shella Saukia who initially started this business only as a reseller and is now developing and building her own company and holds the position as Chief Executive Officer (CEO) Shella Saukia Group.";

    const canonicalUrl =
        "https://www.shellasaukia.co/our-couture/deluxe-collection";

    useEffect(() => {
        document.title = title;

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const meta = document.createElement("meta");
            meta.setAttribute("name", "description");
            meta.setAttribute("content", description);
            document.head.appendChild(meta);
        }

        const linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute("href", canonicalUrl);
        } else {
            const link = document.createElement("link");
            link.setAttribute("rel", "canonical");
            link.setAttribute("href", canonicalUrl);
            document.head.appendChild(link);
        }
    }, [title, description, canonicalUrl]);

    return (
        <>
            <Navbar />
            <section className="w-full h-screen bg-[url('/AssetDeluxeCollection1.png')] bg-cover bg-top">
                <div className="bg-drop w-full h-full flex items-end">
                    <div className="w-full h-40 md:h-32 bg-black/20 flex flex-col items-center justify-center gap-1 px-10">
                        <h1 className="font-legitima text-white text-xl md:text-3xl">
                            {isIndo
                                ? "Selamat datang di Elegance Redefined"
                                : "Welcome to Elegance Redefined"}
                        </h1>
                        <p className="font-poppins text-white text-center text-xs max-w-[60rem] font-light">
                            {isIndo
                                ? "Temukan pesona abadi Azalea, pesona Petunia yang canggih, dan keanggunan Freesia. Koleksi eksklusif kami mewujudkan lambang kemewahan dan keanggunan, yang dikurasi bagi mereka yang menghargai hal-hal yang lebih baik dalam hidup."
                                : "Discover the timeless charm of Azalea, the sophisticated charm of Petunia, and the elegance of Freesia. Our exclusive collection embodies the epitome of luxury and elegance, curated for those who appreciate the finer things in life."}
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection2.png"
                        alt="AssetDeluxeCollection2"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
                        <h1 className="font-legitima text-2xl md:text-3xl">
                            Azalea One Set
                        </h1>
                        <p className="font-poppins">IDR. 4.500.000</p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-2"
                            onClick={() =>
                                navigate(
                                    `/our-couture/deluxe-collection/azalea-one-set`
                                )
                            }
                        >
                            <span className=" text-white group-hover:text-black relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection3.png"
                        alt="AssetDeluxeCollection3"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl">
                            Petunia Dress
                        </h1>
                        <p className="font-poppins">IDR. 9.800.000</p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-2"
                            onClick={() =>
                                navigate(
                                    `/our-couture/deluxe-collection/petunia-dress`
                                )
                            }
                        >
                            <span className=" text-white group-hover:text-black relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection4.png"
                        alt="AssetDeluxeCollection4"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl">
                            Freesia Dress
                        </h1>
                        <p className="font-poppins">IDR. 12.000.000</p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/freesia-dress"
                                )
                            }
                        >
                            <span className=" text-white group-hover:text-black relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="w-full h-[80vh] bg-[url('/AssetDeluxeCollection5.png')] bg-cover bg-top">
                <div className="bg-drop w-full h-full flex items-end">
                    <div className="w-full h-40 md:h-32 bg-black/20 flex flex-col items-center justify-center gap-1 px-10">
                        <h1 className="font-legitima text-white text-xl md:text-3xl">
                            {isIndo ? "Merangkul Abadi" : "Embrace Timeless"}
                        </h1>
                        <p className="font-poppins text-white text-center text-xs max-w-[60rem] font-light">
                            {isIndo
                                ? "Masuki dunia kecanggihan dengan Athena, esensi kecantikan klasik. Rasakan pesona anggun Kavala, keanggunan tenang Larissa, dan daya tarik memikat Khania. Koleksi pilihan kami mewakili puncak mode mewah, yang diciptakan untuk penikmat yang cerdas."
                                : "Enter a world of sophistication with Athena, the essence of classic beauty. Experience the graceful charm of Kavala, the serene elegance of Larissa, and the alluring allure of Khania. Our curated collections represent the pinnacle of luxury fashion, created for the discerning connoisseur."}
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#171717]">
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection6.png"
                        alt="AssetDeluxeCollection6"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl text-white">
                            Athena Dress
                        </h1>
                        <p className="font-poppins text-white">
                            IDR. 9.800.000
                        </p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-white mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/athena-dress"
                                )
                            }
                        >
                            <span className=" text-black group-hover:text-white relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-white duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection7.png"
                        alt="AssetDeluxeCollection7"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl text-white">
                            Kavala One Set
                        </h1>
                        <p className="font-poppins text-white">
                            IDR. 6.500.000
                        </p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-white mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/kavala-one-set"
                                )
                            }
                        >
                            <span className=" text-black group-hover:text-white relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-white duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection8.png"
                        alt="AssetDeluxeCollection8"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl text-white">
                            Larissa Dress
                        </h1>
                        <p className="font-poppins text-white">
                            IDR. 9.800.000
                        </p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-white mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/larissa-dress"
                                )
                            }
                        >
                            <span className=" text-black group-hover:text-white relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-white duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection9.png"
                        alt="AssetDeluxeCollection9"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl text-white">
                            Khania One Set
                        </h1>
                        <p className="font-poppins text-white">
                            IDR. 8.500.000
                        </p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-white mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/khania-one-set"
                                )
                            }
                        >
                            <span className=" text-black group-hover:text-white relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-white duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-white duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="w-full h-[80vh] bg-[url('/AssetDeluxeCollection10.png')] bg-cover bg-top">
                <div className="bg-drop w-full h-full flex items-end">
                    <div className="w-full h-40 md:h-32 bg-black/20 flex flex-col items-center justify-center gap-1 px-10">
                        <h1 className="font-legitima text-white text-xl md:text-3xl">
                            {isIndo
                                ? "Puncak Keanggunan"
                                : "Pinnacle of Elegance"}
                        </h1>
                        <p className="font-poppins text-white text-center text-xs max-w-[60rem] font-light">
                            {isIndo
                                ? "Benamkan diri Anda dalam dunia mewah Roose, kecanggihan klasik Breda, keanggunan abadi Almere, dan keanggunan kontemporer Zoe. Koleksi kami mewujudkan esensi mode kelas atas, yang dirancang bagi mereka yang menginginkan yang terbaik."
                                : "Immerse yourself in the luxurious world of Roose, the classic sophistication of Breda, the timeless elegance of Almere and the contemporary grace of Zoe. Our collections embody the essence of high fashion, designed for those who demand the best."}
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection11.png"
                        alt="AssetDeluxeCollection4"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl">
                            Roose One Set
                        </h1>
                        <p className="font-poppins">IDR. 6.500.000</p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/roose-one-set"
                                )
                            }
                        >
                            <span className=" text-white group-hover:text-black relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection12.png"
                        alt="AssetDeluxeCollection12"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl">
                            Breda Dress
                        </h1>
                        <p className="font-poppins">IDR. 9.900.000</p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/breda-dress"
                                )
                            }
                        >
                            <span className=" text-white group-hover:text-black relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection13.png"
                        alt="AssetDeluxeCollection13"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl">
                            Almere Dress
                        </h1>
                        <p className="font-poppins">IDR. 6.500.000</p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/almere-dress"
                                )
                            }
                        >
                            <span className=" text-white group-hover:text-black relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
                <div className="w-full py-10 md:py-20 flex flex-col justify-center items-center max-w-screen-2xl m-auto">
                    <img
                        src="/AssetDeluxeCollection14.png"
                        alt="AssetDeluxeCollection14"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-5/6 md:w-3/4"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h1 className="font-legitima text-2xl md:text-3xl">
                            Zoe One Set
                        </h1>
                        <p className="font-poppins">IDR. 9.500.000</p>
                        <button
                            className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-2"
                            onClick={() =>
                                navigate(
                                    "/our-couture/deluxe-collection/zoe-one-set"
                                )
                            }
                        >
                            <span className=" text-white group-hover:text-black relative z-10 duration-500">
                                {isIndo ? "Lihat Lebih Lanjut" : "View More"}
                            </span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

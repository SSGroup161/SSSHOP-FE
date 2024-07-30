import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../utils/LanguageContext";

export default function Home() {
    const [mapUrl, setMapUrl] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1499624642765!2d106.78087857592165!3d-6.243959261141998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1175b92614f%3A0x6173704d396d5a99!2sGandaria%20City!5e0!3m2!1sid!2sid!4v1721704678210!5m2!1sid!2sid"
    );
    const { isIndo } = useLanguage();

    const switchMap = (url) => {
        setMapUrl(url);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = "SHELLA SAUKIA.CO© Official Website";
    const description =
        "Shella Saukia Shop (SS Shop) is a branch company of the Shella Saukia Group that focuses on the world of fashion, the business has been started since 2014 which was started directly by Shella Saukia who initially started this business only as a reseller and is now developing and building her own company and holds the position as Chief Executive Officer (CEO) Shella Saukia Group.";

    const canonicalUrl = "https://www.shellasaukia.co";

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
            <section className="w-full h-screen flex justify-center items-center bg-[url('/bg-main.png')] bg-cover bg-center md:bg-left lg:bg-top">
                <div className="bg-drop w-full h-full">
                    <div className="w-full h-full flex max-w-screen-2xl items-center justify-center m-auto">
                        <div className="flex-1 w-full h-full"></div>
                        <div className="flex-1 w-full h-full flex flex-col items-end justify-between py-24 md:py-36 lg:py-28 px-4 md:px-12 xl:px-20 2xl:py-48 2xl:px-10">
                            <h1 className="text-shadow font-legitima text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl text-end text-white w-80 md:w-[35rem] xl:w-[40rem] 2xl:w-[48rem] drop-shadow-lg">
                                {isIndo
                                    ? "Tunjukkan Kemewahan Batin Anda dengan Koleksi Eksklusif Kami "
                                    : "Unveil Your Inner Deluxe with Our Exclusive Collection"}
                            </h1>
                            <p className="font-poppins text-xs md:text-sm xl:text-base w-60 md:w-96 2xl:w-[27rem] text-white">
                                {isIndo
                                    ? "Masuki dunia tempat bertemunya keanggunan abadi kecanggihan masa kini. Pilihan kami yang telah dikurasi Potongan busana mewah dirancang untuk mempercantik penampilan Anda gaya dan mendefinisikan ulang kemewahan. Jelajahi yang terbaru dari kami koleksi dan rasakan daya tarik yang indah keahlian dan kualitas yang tak tertandingi."
                                    : "Step into a world where timeless elegance meets modern sophistication. Our curated selection of deluxe fashion pieces is designed to elevate your style and redefine luxury. Explore our latest collection and experience the allure of exquisite craftsmanship and unparalleled quality."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col justify-center items-center mt-4 md:mt-10">
                <div className="flex w-full gap-4 lg:gap-6 px-2 md:px-4 lg:px-6 max-w-screen-2xl m-auto flex-col md:flex-row">
                    <div className="flex-1 relative bg-[url('/AssetHome1.png')] bg-cover bg-center">
                        <div className="h-[80vh] lg:h-[110vh] xl:h-[130vh] w-full bg-black/20 flex items-end justify-center pb-20">
                            <div className="flex flex-col items-center justify-center lg:gap-4">
                                <h1 className="font-legitima text-white text-2xl md:text-3xl lg:text-4xl">
                                    {isIndo
                                        ? "Koleksi Gaun Mewah"
                                        : "Dress Deluxe Collection"}
                                </h1>
                                <p className="font-poppins text-white/80 text-xs text-center w-72 lg:w-full max-w-[30rem]">
                                    {isIndo
                                        ? "Dikurasi dengan sempurna, setiap set menyatu Keanggunan abadi dengan modernitas kecanggihan, memastikan Anda selalu mencari disatukan dengan sempurna."
                                        : "Curated to perfection, each set combines timeless elegance with modern sophistication, ensuring you always look impeccably put together."}
                                </p>
                                <button className="cursor-pointer relative group overflow-hidden border-2 px-16 py-2 border-white mt-4">
                                    <span className=" text-white relative z-10 duration-500">
                                        {isIndo ? "Lihat Semua" : "See All"}
                                    </span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:-translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                    <span className="absolute delay-300 top-0 left-0 w-full bg-black duration-500 group-hover:translate-y-full h-full"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative bg-[url('/AssetHome2.png')] bg-cover bg-center">
                        <div className="h-[80vh] lg:h-[110vh] xl:h-[130vh] w-full bg-black/20 flex items-end justify-center pb-20">
                            <div className="flex flex-col items-center justify-center lg:gap-4">
                                <h1 className="font-legitima text-white text-2xl md:text-3xl lg:text-4xl">
                                    {isIndo
                                        ? "Satu Set Koleksi Mewah"
                                        : "One Set Deluxe Collection"}
                                </h1>
                                <p className="font-poppins text-white/80 text-xs text-center w-72 lg:w-full max-w-[30rem]">
                                    {isIndo
                                        ? "Koleksi kami berkisar dari gaun koktail hingga gaun malam yang elegan, penawaran koleksi kami serangkaian desain yang memancarkan kelas dan kecanggihan."
                                        : "Our collection from cocktail dresses to elegant evening gowns, our collection offers a range of designs that exude class and sophistication."}
                                </p>
                                <button className="cursor-pointer relative group overflow-hidden border-2 px-16 py-2 border-white mt-4">
                                    <span className=" text-white relative z-10 duration-500">
                                        {isIndo ? "Lihat Semua" : "See All"}
                                    </span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:-translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                    <span className="absolute delay-300 top-0 left-0 w-full bg-black duration-500 group-hover:translate-y-full h-full"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 md:px-4 lg:px-6 w-full max-w-screen-2xl">
                    <div className="w-full mt-6 md:mt-4 lg:mt-6 bg-[url('/AssetHome3.png')] bg-cover bg-center ">
                        <div className="h-[80vh] md:h-[100vh] w-full bg-black/20 flex items-end justify-center pb-20">
                            <div className="flex flex-col items-center justify-center lg:gap-4">
                                <h1 className="font-legitima text-white text-2xl md:text-3xl lg:text-4xl">
                                    {isIndo
                                        ? "Koleksi Mewah Gaun Putih"
                                        : "Deluxe Collection of White Dresses"}
                                </h1>
                                <p className="font-poppins text-white/80 text-xs text-center w-72 lg:w-full max-w-[30rem]">
                                    {isIndo
                                        ? "Menampilkan desain cantik yang diwujudkan kemurnian dan kecanggihan, koleksi ini Membawa sentuhan elegan untuk semua orang peluang."
                                        : " Featuring exquisite designs that embody purity and sophistication, this collection brings a touch of elegance to every occasion."}
                                </p>
                                <button className="cursor-pointer relative group overflow-hidden border-2 px-16 py-2 border-white mt-4">
                                    <span className=" text-white relative z-10 duration-500">
                                        {isIndo ? "Lihat Semua" : "See All"}
                                    </span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:-translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 group-hover:translate-x-full h-full"></span>
                                    <span className="absolute top-0 left-0 w-full bg-black duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                    <span className="absolute delay-300 top-0 left-0 w-full bg-black duration-500 group-hover:translate-y-full h-full"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full lg:h-[70vh] bg-black mt-6 md:mt-10 flex justify-center">
                <div className="flex justify-center max-w-screen-2xl 2xl:px-6 flex-col-reverse lg:flex-row">
                    <div className="lg:w-[35rem] px-6 md:px-10 lg:px-20 py-10">
                        <div>
                            <h1 className="text-white/50 font-poppins ">
                                {isIndo
                                    ? "Memperkenalkan Koleksi Trending kami"
                                    : "Introducing our Trending Collection"}
                            </h1>
                            <h1 className="text-white font-legitima text-4xl mt-10 leading-10">
                                {isIndo
                                    ? "Sempurnakan Lemari Pakaian Anda dengan Sophistic Deluxe Koleksi"
                                    : "Elevate Your Wardrobe with Sophistic Deluxe Collection"}
                            </h1>
                            <p className="font-poppins text-white/90 mt-8 font-extralight">
                                {isIndo
                                    ? "Jelajahi Koleksi Deluxe kami, di mana setiap bagian merupakan bukti pengerjaan halus dan desain indah. Ketersediaan terbatas dan dibuat dengan sangat memperhatikan detail, seri ini mewujudkan kemewahan dalam bentuknya yang paling murni. Rasakan mode yang melampaui tren dan mendefinisikan ulang keanggunan."
                                    : "Delve into our Deluxe Collection, where each piece is a testament to fine craftsmanship and exquisite design. Limited in availability and crafted with the utmost attention to detail, this series embodies luxury in its purest form. Experience fashion that transcends trends and redefines elegance."}
                            </p>
                            <button className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-white mt-8">
                                <span className=" text-black group-hover:text-white relative z-10 duration-500">
                                    {isIndo
                                        ? "Jelajahi Koleksi Kami"
                                        : "Explore Our Collection"}
                                </span>
                                <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:-translate-x-full h-full"></span>
                                <span className="absolute top-0 left-0 w-full bg-white duration-500 group-hover:translate-x-full h-full"></span>
                                <span className="absolute top-0 left-0 w-full bg-white duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                <span className="absolute delay-300 top-0 left-0 w-full bg-white duration-500 group-hover:translate-y-full h-full"></span>
                            </button>
                        </div>
                    </div>
                    <div className="px-2 md:px-4 lg:px-0 mt-10 md:mt-6 lg:mt-0">
                        <img
                            src="/AssetHome4.png"
                            alt="AssetHome4"
                            width={20}
                            height={20}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
            <section className="md:h-screen w-full ">
                <div className="md:h-screen w-full flex py-10 md:py-20 px-8 md:px-10 flex-col lg:flex-row max-w-screen-2xl m-auto">
                    <div className="flex-1 ">
                        <div className="w-full md:h-full h-96">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex-1  flex items-start justify-center mt-10 lg:mt-0">
                        <div className=" flex items-center justify-center flex-col lg:px-10">
                            <h1 className="font-legitima text-3xl">
                                {isIndo
                                    ? "Temukan Toko Kami"
                                    : "Find Our Store"}
                            </h1>
                            <div
                                className="border-b-2 border-gray-400 py-6 mt-2 md:mt-6 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out"
                                id="gandariacity"
                                onClick={() =>
                                    switchMap(
                                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1499624642765!2d106.78087857592165!3d-6.243959261141998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1175b92614f%3A0x6173704d396d5a99!2sGandaria%20City!5e0!3m2!1sid!2sid!4v1721704678210!5m2!1sid!2sid"
                                    )
                                }
                            >
                                <h1 className="font-legitima text-xl">
                                    GANDARIA CITY
                                </h1>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 18 19"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.4465 17.1005C8.4465 17.1005 3 12.5135 3 8C3 6.4087 3.63214 4.88258 4.75736 3.75736C5.88258 2.63214 7.4087 2 9 2C10.5913 2 12.1174 2.63214 13.2426 3.75736C14.3679 4.88258 15 6.4087 15 8C15 12.5135 9.5535 17.1005 9.5535 17.1005C9.2505 17.3795 8.75175 17.3765 8.4465 17.1005ZM9 10.625C9.34472 10.625 9.68606 10.5571 10.0045 10.4252C10.323 10.2933 10.6124 10.0999 10.8562 9.85616C11.0999 9.6124 11.2933 9.32302 11.4252 9.00454C11.5571 8.68606 11.625 8.34472 11.625 8C11.625 7.65528 11.5571 7.31394 11.4252 6.99546C11.2933 6.67698 11.0999 6.3876 10.8562 6.14385C10.6124 5.90009 10.323 5.70674 10.0045 5.57482C9.68606 5.4429 9.34472 5.375 9 5.375C8.30381 5.375 7.63613 5.65156 7.14384 6.14385C6.65156 6.63613 6.375 7.30381 6.375 8C6.375 8.69619 6.65156 9.36387 7.14384 9.85616C7.63613 10.3484 8.30381 10.625 9 10.625Z"
                                                fill="#BBBBBB"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="font-poppins text-xs md:text-sm">
                                        {isIndo
                                            ? "Lantai 2 Jl. Sultan Iskandar Muda, Gandaria, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240"
                                            : "2nd Floor Jl. Sultan Iskandar Muda, Gandaria, Kby. Lama District, South Jakarta City, Special Capital Region of Jakarta 12240"}
                                    </h1>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 18 19"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.5625 9.035V5H8.4375V9.5L11.6197 12.6822L12.4147 11.8872L9.5625 9.035ZM9 17C4.85775 17 1.5 13.6422 1.5 9.5C1.5 5.35775 4.85775 2 9 2C13.1422 2 16.5 5.35775 16.5 9.5C16.5 13.6422 13.1422 17 9 17Z"
                                                fill="#BBBBBB"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="font-poppins text-xs md:text-sm">
                                        {isIndo
                                            ? "Buka Setiap Hari dari 10:00 WIB - 22:00 WIB"
                                            : "Open Everyday from 10:00 AM - 10:00 PM"}
                                    </h1>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 18 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.4353 12.5825L12.6953 11.3225C12.865 11.1549 13.0797 11.0402 13.3134 10.9923C13.547 10.9443 13.7896 10.9653 14.0116 11.0525L15.5472 11.6656C15.7715 11.7567 15.9639 11.9121 16.1 12.1123C16.2361 12.3125 16.31 12.5486 16.3122 12.7906V15.6031C16.3109 15.7678 16.2763 15.9306 16.2104 16.0815C16.1446 16.2325 16.0488 16.3685 15.929 16.4815C15.8092 16.5945 15.6677 16.6821 15.5132 16.739C15.3586 16.7959 15.1942 16.8209 15.0297 16.8125C4.26905 16.1431 2.0978 7.03065 1.68718 3.54315C1.66812 3.37189 1.68553 3.19853 1.73828 3.03448C1.79103 2.87044 1.87791 2.71942 1.99322 2.59136C2.10852 2.46331 2.24963 2.36111 2.40727 2.29151C2.5649 2.2219 2.73549 2.18647 2.9078 2.18752H5.62468C5.86712 2.18824 6.10381 2.26147 6.30429 2.3978C6.50477 2.53413 6.65989 2.72732 6.74968 2.95252L7.3628 4.48815C7.45295 4.70925 7.47594 4.95201 7.42893 5.1861C7.38191 5.4202 7.26695 5.63525 7.09843 5.8044L5.83843 7.0644C5.83843 7.0644 6.56405 11.975 11.4353 12.5825Z"
                                                fill="#BBBBBB"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="font-poppins text-xs md:text-sm">
                                        (+62) 822-5801-1491
                                    </h1>
                                </div>
                            </div>
                            <div
                                className="border-b-2 border-gray-400 py-6 mt-2 md:mt-6 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out"
                                id="margocity"
                                onClick={() =>
                                    switchMap(
                                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1628852794997!2d106.83184857592319!3d-6.372961662342059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec093dabf58d%3A0xd3365350a2ebe2f!2sMargoCity!5e0!3m2!1sid!2sid!4v1721707410382!5m2!1sid!2sid"
                                    )
                                }
                            >
                                <h1 className="font-legitima text-xl">
                                    MARGO CITY
                                </h1>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 18 19"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.4465 17.1005C8.4465 17.1005 3 12.5135 3 8C3 6.4087 3.63214 4.88258 4.75736 3.75736C5.88258 2.63214 7.4087 2 9 2C10.5913 2 12.1174 2.63214 13.2426 3.75736C14.3679 4.88258 15 6.4087 15 8C15 12.5135 9.5535 17.1005 9.5535 17.1005C9.2505 17.3795 8.75175 17.3765 8.4465 17.1005ZM9 10.625C9.34472 10.625 9.68606 10.5571 10.0045 10.4252C10.323 10.2933 10.6124 10.0999 10.8562 9.85616C11.0999 9.6124 11.2933 9.32302 11.4252 9.00454C11.5571 8.68606 11.625 8.34472 11.625 8C11.625 7.65528 11.5571 7.31394 11.4252 6.99546C11.2933 6.67698 11.0999 6.3876 10.8562 6.14385C10.6124 5.90009 10.323 5.70674 10.0045 5.57482C9.68606 5.4429 9.34472 5.375 9 5.375C8.30381 5.375 7.63613 5.65156 7.14384 6.14385C6.65156 6.63613 6.375 7.30381 6.375 8C6.375 8.69619 6.65156 9.36387 7.14384 9.85616C7.63613 10.3484 8.30381 10.625 9 10.625Z"
                                                fill="#BBBBBB"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="font-poppins text-xs md:text-sm">
                                        {isIndo
                                            ? "Lobi Utara Lantai Dasar Jl. Margonda Raya No.358, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423"
                                            : "North Lobby Ground Floor Jl. Margonda Raya No.358, Kemiri Muka, Beji District, Depok City, West Java 16423"}
                                    </h1>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 18 19"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.5625 9.035V5H8.4375V9.5L11.6197 12.6822L12.4147 11.8872L9.5625 9.035ZM9 17C4.85775 17 1.5 13.6422 1.5 9.5C1.5 5.35775 4.85775 2 9 2C13.1422 2 16.5 5.35775 16.5 9.5C16.5 13.6422 13.1422 17 9 17Z"
                                                fill="#BBBBBB"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="font-poppins text-xs md:text-sm">
                                        {isIndo
                                            ? "Buka Setiap Hari dari 10:00 WIB - 22:00 WIB"
                                            : "Open Everyday from 10:00 AM - 10:00 PM"}
                                    </h1>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 18 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.4353 12.5825L12.6953 11.3225C12.865 11.1549 13.0797 11.0402 13.3134 10.9923C13.547 10.9443 13.7896 10.9653 14.0116 11.0525L15.5472 11.6656C15.7715 11.7567 15.9639 11.9121 16.1 12.1123C16.2361 12.3125 16.31 12.5486 16.3122 12.7906V15.6031C16.3109 15.7678 16.2763 15.9306 16.2104 16.0815C16.1446 16.2325 16.0488 16.3685 15.929 16.4815C15.8092 16.5945 15.6677 16.6821 15.5132 16.739C15.3586 16.7959 15.1942 16.8209 15.0297 16.8125C4.26905 16.1431 2.0978 7.03065 1.68718 3.54315C1.66812 3.37189 1.68553 3.19853 1.73828 3.03448C1.79103 2.87044 1.87791 2.71942 1.99322 2.59136C2.10852 2.46331 2.24963 2.36111 2.40727 2.29151C2.5649 2.2219 2.73549 2.18647 2.9078 2.18752H5.62468C5.86712 2.18824 6.10381 2.26147 6.30429 2.3978C6.50477 2.53413 6.65989 2.72732 6.74968 2.95252L7.3628 4.48815C7.45295 4.70925 7.47594 4.95201 7.42893 5.1861C7.38191 5.4202 7.26695 5.63525 7.09843 5.8044L5.83843 7.0644C5.83843 7.0644 6.56405 11.975 11.4353 12.5825Z"
                                                fill="#BBBBBB"
                                            />
                                        </svg>
                                    </div>
                                    <h1 className="font-poppins text-xs md:text-sm">
                                        (+62) 822-5801-1492
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

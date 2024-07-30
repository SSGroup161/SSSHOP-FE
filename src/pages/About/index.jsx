import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../utils/LanguageContext";

export default function About() {
    const { isIndo } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = "Our Heritage - SHELLA SAUKIA.CO©";
    const description =
        "Our journey began with a passion for exquisite craftsmanship and a vision to create pieces that exude sophistication, deluxe and luxury Each collection is a testament to our commitment to quality, creativity and innovation.";

    const canonicalUrl = "https://www.shellasaukia.co/our-heritage";

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
            <section className="w-full h-screen bg-[url('/AssetAbout1Mobile.png')] md:bg-[url('/AssetAbout1.png')] bg-cover md:bg-right lg:bg-top">
                <div className="bg-drop w-full h-full flex items-end justify-center m-auto pb-10">
                    <div className="flex flex-col items-center justify-center gap-4 px-8 md:px-20 lg:px-0 max-w-screen-2xl">
                        <img
                            src="/Logo-SS-Hero.png"
                            alt="SSHero"
                            loading="lazy"
                            width={20}
                            height={20}
                            className="w-72 md:w-96"
                        />
                        <h1 className="font-poppins text-gray-200 text-center font-light text-xs max-w-[55rem]">
                            {isIndo
                                ? "Perjalanan kami dimulai dengan hasrat akan keahlian luar biasa dan visi untuk menciptakan karya yang memancarkan kecanggihan, kemewahan, dan kemegahan. Setiap koleksi merupakan bukti komitmen kami terhadap kualitas, kreativitas, dan inovasi."
                                : "Our journey began with a passion for exquisite craftsmanship and a vision to create pieces that exude sophistication, deluxe and luxury Each collection is a testament to our commitment to quality, creativity and innovation."}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="w-full py-20">
                <div className="max-w-screen-2xl m-auto w-full flex flex-col items-center justify-center md:px-10">
                    <div className="px-8 md:px-20 flex flex-col items-center justify-center gap-4 max-w-[50rem]">
                        <h1 className="font-legitima text-4xl">
                            {isIndo ? "Sejarah Kami" : "Our History"}
                        </h1>
                        <p className="font-poppins text-center text-sm">
                            <span className="font-bold">Shellasaukia.co</span>{" "}
                            {isIndo
                                ? "merupakan anak perusahaan Shella Saukia Group yang bergerak di bidang fesyen. Bisnis ini didirikan pada tahun 2014 oleh Shella Saukia yang awalnya merupakan bisnis reseller kecil-kecilan dan kini telah berkembang hingga mendirikan perusahaan sendiri."
                                : "is a subsidiary of Shella Saukia Group, focusing on fashion. This business was established in 2014 by Shella Saukia, starting from a small reseller business and now expanding to establish its own company."}
                        </p>
                    </div>
                    <div className="bg-black w-2/3 h-[1px] mt-16"></div>
                    <img
                        src="/AssetAbout2.png"
                        alt="AssetAbout2"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-full mt-10 h-32 md:h-auto object-cover"
                    />
                    <div className="w-5/6 h-80 border-[1px] border-black mt-10 flex flex-col items-center justify-center px-8 lg:px-0">
                        <h1 className="font-legitima text-4xl">
                            {isIndo ? "Visi" : "Vision"}
                        </h1>
                        <p className="font-poppins text-center text-xs mt-4 max-w-[35rem]">
                            {isIndo
                                ? "Menjadi yang terdepan dalam industri kecantikan dan mode dengan mengutamakan nilai tambah bagi penggunanya, baik secara lokal maupun global."
                                : "To be at the forefront of the beauty and fashion industry by prioritizing added value for its users, both locally and globally."}
                        </p>
                    </div>
                    <div className="w-5/6 h-80 border-[1px] border-black my-10 flex flex-col items-center justify-center px-8 lg:px-0">
                        <h1 className="font-legitima text-4xl">
                            {isIndo ? "Nilai-Nilai" : "Values"}
                        </h1>
                        <p className="font-poppins text-center text-xs mt-4"></p>
                        <p className="font-poppins text-center text-xs mt-4">
                            {isIndo
                                ? "Selalu berkomitmen untuk menciptakan produk berkualitas tinggi dengan bahan terbaik dan berkualitas tinggi."
                                : "Always committed to creating high quality products with the best and highest quality materials."}
                        </p>
                        <p className="font-poppins text-center text-xs mt-4">
                            {isIndo
                                ? "Terus berinovasi dalam pengembangan dan penelitian untuk meningkatkan kualitas dan kegunaan produk bagi pelanggan."
                                : "Continue to innovate in development and research to improve product quality and usability for customers."}
                        </p>
                        <p className="font-poppins text-center text-xs mt-4">
                            {isIndo
                                ? "Memberikan pelayanan yang prima kepada mitra dan pelanggan guna menjaga keberlangsungan ekosistem bisnis perusahaan dan memajukan industri fashion & kecantikan."
                                : "Providing excellent service to partners and customers to sustain the company's business ecosystem and advance the fashion & beauty industry."}
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full pb-20">
                <div className="max-w-screen-2xl m-auto w-full flex flex-col items-center justify-center px-8 md:px-10">
                    <h1 className="font-legitima text-4xl">
                        {isIndo ? "Tonggak Sejarah Kami" : "Our Milestone"}
                    </h1>
                    <img
                        src="/AssetAbout3.png"
                        alt="AssetAbout3"
                        loading="lazy"
                        width={20}
                        height={20}
                        className="w-full mt-16"
                    />
                    <p className="font-poppins text-center text-xs mt-16 max-w-[45rem]">
                        {isIndo
                            ? 'Kami telah berkontribusi dan meramaikan industri mode di Indonesia selama satu dekade. Pada tanggal 29 Februari 2024, kami menggelar peragaan busana tunggal bertajuk "The FirSSt Gala of Shella Saukia" di Ritz Carlton Ballroom, Jakarta. Kami dengan bangga mempersembahkan 70 koleksi mode baru, yang masing-masing dibagi menjadi lima tema yang unik dan memikat.'
                            : `We have been contributing and enlivening the fashion industry in Indonesia for a decade. On February 29, 2024, we held a solo fashion show titled "The FirSSt Gala of Shella Saukia" at the Ritz Carlton Ballroom, Jakarta. We proudly presented 70 new fashion collections, each divided into five unique and captivating themes.`}
                    </p>
                    <div className="bg-black w-2/3 h-[1px] mt-16"></div>
                </div>
            </section>
            <Footer />
        </>
    );
}

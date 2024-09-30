import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../utils/LanguageContext";
import { message } from "antd";
import { Spinner } from "flowbite-react";

const url = import.meta.env.VITE_REACT_APP_SHEET_KEY;

export default function Contact() {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = "Concierge - SHELLA SAUKIA.CO©";
    const description = `We’d love to hear from you! If you have questions about our collections, need help ordering, or just want to learn more about our brand, we’re here to help. Visit us at our flagship store or reach out using one of the contact methods below.`;

    const canonicalUrl = "https://www.shellasaukia.co/concierge";

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

    const [mapUrl, setMapUrl] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1499624642765!2d106.78087857592165!3d-6.243959261141998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1175b92614f%3A0x6173704d396d5a99!2sGandaria%20City!5e0!3m2!1sid!2sid!4v1721704678210!5m2!1sid!2sid"
    );

    const { isIndo } = useLanguage();

    const switchMap = (url) => {
        setMapUrl(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!formData.name || !formData.email || !formData.message) {
            message.error("Please fill out all fields");
            setIsLoading(false);
            return;
        }

        try {
            const formDataObj = new URLSearchParams();
            formDataObj.append("name", formData.name);
            formDataObj.append("email", formData.email);
            formDataObj.append("message", formData.message);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formDataObj,
                mode: "cors",
            });

            if (response.ok) {
                message.success(
                    "Message sent successfully! We get back to you soon, see you soon!"
                );
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to send message to Google Sheet");
            }
        } catch (error) {
            message.error("Failed to send message to Google Sheet");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Navbar />
            <section className="m-auto w-full h-screen bg-[url('/AssetContact1Mobile.png')] md:bg-[url('/AssetContact1.png')] bg-cover bg-center">
                <div className="bg-drop w-full h-full">
                    <div className="w-full h-full flex max-w-screen-2xl items-end justify-start m-auto py-10 px-8 xl:py-20 xl:px-24 2xl:py-24">
                        <h1 className="font-legitima text-4xl md:text-6xl text-white text-shadow drop-shadow-lg">
                            {isIndo ? (
                                <>
                                    Jangkau Kami, <br /> Kami Ada Untuk Anda
                                </>
                            ) : (
                                <>
                                    Reach Out, <br /> We&apos;re Here for You
                                </>
                            )}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="w-full max-w-screen-2xl m-auto flex flex-col items-center justify-start py-16 px-8 md:px-12 lg:px-32">
                    <h1 className="font-legitima text-3xl md:text-4xl text-center">
                        {isIndo
                            ? "Dimana anda dapat menjumpai kami?"
                            : "Where you can find us?"}
                    </h1>
                    <p className="font-poppins text-center mt-4 text-xs md:text-sm">
                        {isIndo
                            ? "Kami ingin sekali mendengar dari Anda! Jika Anda memiliki pertanyaan tentang koleksi kami, butuh bantuan untuk memesan, atau sekadar ingin mempelajari lebih lanjut tentang merek kami, kami siap membantu. Kunjungi kami di toko utama kami atau hubungi kami menggunakan salah satu metode kontak di bawah ini."
                            : `We’d love to hear from you! If you have questions about our collections, need help ordering, or just want to learn more about our brand, we’re here to help. Visit us at our flagship store or reach out using one of the contact methods below.`}
                    </p>
                </div>
            </section>
            <section className=" w-full">
                <div className="w-full lg:w-2/3 flex md:px-10 flex-col max-w-screen-2xl m-auto gap-10">
                    <div className="flex-1">
                        <div className="w-full 2xl:w-3/4 h-96 2xl:h-[30rem] m-auto">
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
                    <div className="flex-1  flex items-start justify-center mt-10 lg:mt-0 px-8 md:px-0">
                        <div className=" flex items-center justify-center flex-col">
                            <h1 className="font-legitima text-3xl md:text-4xl">
                                {isIndo
                                    ? "Temukan Toko Kami"
                                    : "Find Our Store"}
                            </h1>
                            <div
                                className="border-b-2 border-gray-400 py-6 mt-2 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out"
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
                                className="border-b-2 border-gray-400 py-6 w-full mt-2 md:mt-6 hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out"
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
            <section>
                <div className="w-full max-w-screen-2xl py-16 mt-4 m-auto">
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="font-legitima text-3xl md:text-4xl">
                            {isIndo ? "Sosial Media Kami" : "Our Social Media"}
                        </h1>
                        <div className="w-full lg:w-2/3 h-36 2xl:h-40 bg-slate-200 mt-12 bg-[url('/AssetContact2.png')] bg-cover bg-left">
                            <div className="w-full h-full bg-gradi flex items-center justify-end pr-6 md:pr-12">
                                <a
                                    href="https://shopee.co.id/shellasaukiaofficial"
                                    target="blank"
                                >
                                    <button className="cursor-pointer uppercase font-poppins text-xs md:text-base bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F84D2F,-0.5rem_-0.5rem_#F86333] transition">
                                        {isIndo ? "Shopee Kami" : "Our Shopee"}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 h-36 2xl:h-40 bg-slate-200 mt-4 bg-[url('/AssetContact3.png')] bg-cover bg-left">
                            <div className="w-full h-full bg-gradi flex items-center justify-end pr-6 md:pr-12">
                                <a
                                    href="https://www.instagram.com/shellasaukia.co.id/"
                                    target="blank"
                                >
                                    <button className="cursor-pointer uppercase font-poppins text-xs md:text-base bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#B3069E,-0.5rem_-0.5rem_#DE0641] transition">
                                        {isIndo
                                            ? "Instagram Kami"
                                            : "Our Instagram"}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 h-36 2xl:h-40 bg-slate-200 mt-4 bg-[url('/AssetContact4.png')] bg-cover bg-left">
                            <div className="w-full h-full bg-gradi flex items-center justify-end pr-6 md:pr-12">
                                <a
                                    href="https://www.tiktok.com/@shellasaukia.co"
                                    target="blank"
                                >
                                    <button className="cursor-pointer uppercase font-poppins text-xs md:text-base bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                                        {isIndo ? "Tiktok Kami" : "Our Tiktok"}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 h-36 2xl:h-40 bg-slate-200 mt-4 bg-[url('/AssetContact5.png')] bg-cover bg-left">
                            <div className="w-full h-full bg-gradi flex items-center justify-end pr-6 md:pr-12">
                                <a
                                    href="mailto:info@shellasaukia.co"
                                    target="blank"
                                >
                                    <button className="cursor-pointer uppercase font-poppins text-xs md:text-base bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#FFEFCB,-0.5rem_-0.5rem_#D2AC47] transition">
                                        {isIndo ? "Email Kami" : "Our Email"}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="w-full max-w-screen-2xl lg:px-20 py-10 md:py-16 flex items-center justify-center m-auto">
                    <div className="w-full bg-[#333333] flex flex-col py-8 px-8 md:px-14 items-center justify-start">
                        <h1 className="font-legitima text-3xl md:text-4xl text-white tracking-wider">
                            {isIndo ? "Koneksi Fesyen" : "Fashion Connect"}
                        </h1>
                        <p className="font-poppins text-white text-center font-light text-xs md:text-sm max-w-[45rem] mt-4">
                            {isIndo
                                ? "Kami menghargai masukan dan pertanyaan Anda. Jika Anda memiliki pertanyaan, saran, atau sekadar ingin berbagi pemikiran, kami siap mendengarkan. Hubungi kami dan beri tahu kami bagaimana kami dapat membantu Anda."
                                : "We value your feedback and questions. Whether you have questions, suggestions, or just want to share your thoughts, we are here to listen. Contact us and let us know how we can help you."}
                        </p>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6 md:px-8 w-full mt-16 flex flex-col items-center justify-start gap-3"
                        >
                            <div className="relative w-full">
                                <input
                                    placeholder="John Doe"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                                    required
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label
                                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                    htmlFor="name"
                                >
                                    {isIndo ? "Nama" : "Name"}
                                </label>
                            </div>
                            <div className="relative w-full">
                                <input
                                    placeholder="email"
                                    className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                                    required
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label
                                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                    htmlFor="email"
                                >
                                    {isIndo ? "Surel" : "Email"}
                                </label>
                            </div>
                            <div className="relative w-full">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    className="peer h-32 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent border-t-0 border-r-0 border-l-0 outline-none focus:outline-none focus:border-white"
                                    required
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label
                                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                    htmlFor="message"
                                >
                                    {isIndo ? "Pesan" : "Message"}
                                </label>
                            </div>
                            <button
                                className={`md:w-1/3 py-2 px-4 ${
                                    isLoading
                                        ? "bg-gray-300 hover:bg-gray-300 cursor-progress"
                                        : "hover:bg-gray-900 bg-white "
                                }  hover:text-white rounded-md shadow-lg text-gray-800 font-semibold transition-colors duration-500`}
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Spinner
                                        aria-label="Spinner button example"
                                        size="sm"
                                    />
                                ) : (
                                    <>
                                        {isIndo
                                            ? "Kirim Pesan"
                                            : "Send Message"}
                                    </>
                                )}
                            </button>
                            <div className="w-full flex-col lg:flex-row gap-2 md:gap-4 lg:gap-0 flex items-start md:items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 23 22"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.875 4.125C1.875 3.39565 2.16473 2.69618 2.68046 2.18046C3.19618 1.66473 3.89565 1.375 4.625 1.375H5.88267C6.671 1.375 7.3585 1.91217 7.55008 2.67667L8.563 6.73108C8.64447 7.05926 8.6276 7.40416 8.51448 7.72282C8.40136 8.04147 8.19699 8.31981 7.92683 8.52317L6.74158 9.41233C6.61783 9.50492 6.59125 9.64058 6.62608 9.735C7.1437 11.1418 7.96074 12.4194 9.0207 13.4793C10.0806 14.5393 11.3582 15.3563 12.765 15.8739C12.8594 15.9087 12.9942 15.8822 13.0877 15.7584L13.9768 14.5732C14.1802 14.303 14.4585 14.0986 14.7772 13.9855C15.0958 13.8724 15.4407 13.8555 15.7689 13.937L19.8233 14.9499C20.5878 15.1415 21.125 15.829 21.125 16.6182V17.875C21.125 18.6043 20.8353 19.3038 20.3195 19.8195C19.8038 20.3353 19.1043 20.625 18.375 20.625H16.3125C8.33933 20.625 1.875 14.1607 1.875 6.1875V4.125Z"
                                            fill="#BBBBBB"
                                        />
                                    </svg>
                                    <h1 className="font-poppins text-gray-400 text-xs">
                                        {" "}
                                        ‪+62 822‑5802‑2491‬
                                    </h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="22"
                                        viewBox="0 0 23 22"
                                        fill="none"
                                    >
                                        <path
                                            d="M2.70508 6.47242L11.5018 10.8702L20.2985 6.47242C20.2659 5.91191 20.0203 5.38506 19.6119 4.99977C19.2035 4.61449 18.6632 4.39992 18.1018 4.40002H4.90178C4.34032 4.39992 3.80007 4.61449 3.39167 4.99977C2.98328 5.38506 2.73764 5.91191 2.70508 6.47242Z"
                                            fill="#BBBBBB"
                                        />
                                        <path
                                            d="M20.3 8.92981L11.5 13.3298L2.69995 8.92981V15.4C2.69995 15.9835 2.93174 16.5431 3.34432 16.9556C3.7569 17.3682 4.31648 17.6 4.89995 17.6H18.1C18.6834 17.6 19.243 17.3682 19.6556 16.9556C20.0682 16.5431 20.3 15.9835 20.3 15.4V8.92981Z"
                                            fill="#BBBBBB"
                                        />
                                    </svg>
                                    <h1 className="font-poppins text-gray-400 text-xs">
                                        {" "}
                                        info@shellasaukia.co
                                    </h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        className="w-12 lg:w-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.1281 22.7196L12.1317 22.7208C12.3681 22.824 12.5001 22.8 12.5001 22.8C12.5001 22.8 12.6321 22.824 12.8697 22.7208L12.8721 22.7196L12.8793 22.716L12.9009 22.7064C13.0147 22.6534 13.1272 22.5973 13.2381 22.5384C13.4613 22.4232 13.7733 22.2504 14.1465 22.0188C14.8905 21.558 15.8805 20.8596 16.8753 19.9008C18.8625 17.9856 20.9001 14.9916 20.9001 10.8C20.9001 9.69692 20.6828 8.60462 20.2607 7.58548C19.8385 6.56635 19.2198 5.64034 18.4398 4.86033C17.6598 4.08031 16.7338 3.46158 15.7146 3.03944C14.6955 2.6173 13.6032 2.40002 12.5001 2.40002C11.397 2.40002 10.3047 2.6173 9.28556 3.03944C8.26642 3.46158 7.34041 4.08031 6.5604 4.86033C5.78039 5.64034 5.16165 6.56635 4.73951 7.58548C4.31737 8.60462 4.1001 9.69692 4.1001 10.8C4.1001 14.9904 6.1377 17.9856 8.1261 19.9008C8.95842 20.7006 9.87266 21.4105 10.8537 22.0188C11.2337 22.2545 11.6246 22.4723 12.0249 22.6716L12.0993 22.7064L12.1209 22.716L12.1281 22.7196ZM12.5001 13.5C13.2162 13.5 13.9029 13.2156 14.4093 12.7092C14.9156 12.2029 15.2001 11.5161 15.2001 10.8C15.2001 10.0839 14.9156 9.39718 14.4093 8.89083C13.9029 8.38449 13.2162 8.10002 12.5001 8.10002C11.784 8.10002 11.0973 8.38449 10.5909 8.89083C10.0846 9.39718 9.8001 10.0839 9.8001 10.8C9.8001 11.5161 10.0846 12.2029 10.5909 12.7092C11.0973 13.2156 11.784 13.5 12.5001 13.5Z"
                                            fill="#BBBBBB"
                                        />
                                    </svg>
                                    <h1 className="font-poppins text-gray-400 text-xs">
                                        {" "}
                                        JL. K.H Wahid Hasyim No.192, Kel.
                                        Kampung Bali, Tanah Abang, Jakarta
                                        Pusat, DKI Jakarta, 10250
                                    </h1>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

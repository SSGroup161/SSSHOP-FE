import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../utils/LanguageContext";

let url = import.meta.env.VITE_REACT_APP_API_KEY;

export default function ProductDetails() {
    const navigate = useNavigate();
    const { isIndo } = useLanguage();
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                window.scrollTo(0, 0);
                const response = await axios.get(`${url}product/${id}`);
                if (response.data.status === 200) {
                    setData(response.data.dataUsers);
                    setIsLoading(false);
                }
            } catch (err) {
                setError(
                    "Failed to fetch article data. Please try again later."
                );
                setIsLoading(false);
            }
        };

        getData();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="w-full flex relative">
                <div className="w-1/2">
                    {isLoading ? <div className="w-full h-screen bg-gray-300 animate-pulse">
                    </div> : 
                    <div>
                        <div className="w-full">
                        <img
                            src={data?.link_img_asset4 || '/imagenf.png'}
                            alt="ImageAset4"
                            width={5000}
                            height={5000}
                            loading="lazy"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src={data?.link_img_asset2 || '/imagenf.png'}
                            alt="ImageAset2"
                            width={5000}
                            height={5000}
                            loading="lazy"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src={data?.link_img_asset3 || '/imagenf.png'}
                            alt="ImageAset3"
                            width={5000}
                            height={5000} 
                            loading="lazy"
                            className="w-full h-auto"
                        />
                    </div>
                    </div>
                    }
                </div>
                <div className="w-1/2 h-screen  sticky top-0 flex items-center justify-center">
                    <div className="px-10">
                        <h1 className="font-legitima text-3xl">
                            {data?.product_name}
                        </h1>
                        <h2 className="font-poppins text-lg">{data?.price}</h2>
                        <h1 className="font-poppins mt-6 text-sm">{isIndo ? 'Bahan :' : 'Material :'}</h1>
                        <p className="font-poppins text-xs mt-2">
                            {data?.material}
                        </p>
                        <p className="font-poppins text-xs mt-8">
                            {isIndo ? 'Model tingginya sekitar 180 (cm)' : 'Model is approximately 180 (cm)'}
                        </p>
                        <a href="mailto:info@shellasaukia.co" className="">
                            <button className="cursor-pointer relative group overflow-hidden border-2 px-12 py-2 border-black mt-6">
                                <span className=" text-white group-hover:text-black relative z-10 duration-500 font-legitima">
                                    {isIndo
                                        ? "Hubungi Layanan Koleksi Kami"
                                        : "Contact Our Concierge Service"}
                                </span>
                                <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:-translate-x-full h-full"></span>
                                <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-x-full h-full"></span>
                                <span className="absolute top-0 left-0 w-full bg-black/60 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                <span className="absolute delay-300 top-0 left-0 w-full bg-black/60 duration-500 group-hover:translate-y-full h-full"></span>
                            </button>
                        </a>

                        <h1 className="font-poppins text-xs hover:underline mt-20 cursor-pointer">Need help?</h1>
                        <h1 className="font-poppins text-xs hover:underline mt-3 cursor-pointer">See others collection</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

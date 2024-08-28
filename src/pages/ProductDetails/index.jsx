import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../utils/LanguageContext";

export default function ProductDetails() {
    return (
        <>
            <Navbar />
            <div className="w-full h-screen"></div>
            <Footer />
        </>
    );
}

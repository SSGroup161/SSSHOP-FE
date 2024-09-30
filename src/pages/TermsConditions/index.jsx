import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../utils/LanguageContext";

export default function TermsConditions() {
    const { isIndo } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = "TERMS & CONDITIONS LEVEL UP BEAUTE";
    const description =
        "Selamat datang di situs-web yang didedikasikan untuk Shellasaukia.co dan dapat diakses melalui URL www.shellasaukia.co Mohon dibaca secara seksama Ketentuan Penggunaan situs-web ini. Dengan mengakses situs ini artinya Anda menerima Ketentuan Penggunaan situs-web tanpa penolakan.";
    const canonicalUrl = "https://www.shellasaukia.co/terms-conditions";

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
            <div className="w-full flex flex-col justify-start items-center bg-white">
                <div className="w-80 md:w-[40rem] my-20 md:my-44">
                    <h1
                        className="text-center mb-14 font-roboto font-medium tracking-wide text-2xl text-black"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        TERMS & CONDITIONS
                    </h1>
                    <h1
                        className="font-normal text-base font-roboto tracking-widest"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        WEBSITE TERMS OF USE
                    </h1>
                    <p
                        className="font-roboto mt-4 font-light tracking-wider text-sm"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        {" "}
                        Welcome to the website dedicated to Shellasaukia.co and
                        can be accessed via URL{" "}
                        <a
                            href="https://www.shellasaukia.co"
                            className="underline text-black"
                        >
                            www.shellasaukia.co
                        </a>
                        <br />
                        <br />
                        Please read the Terms of Use carefully these websites.
                        By accessing this site it means you accept the
                        Website&apos;s Terms of Use without objection.
                        <br />
                        <br />
                        This website was developed for and published by PT.
                        Shella Saukia Putri, a company that has an office on
                        Address: JL. KYAI HAJI WAHID HASYIM No. 192,
                        Desa/Kelurahan Kampung Bali, Kec. Tanah Abang, Kota Adm.
                        Jakarta Pusat, Provinsi DKI Jakarta, 10250, registered
                        at Ministry of Law and Human Rights of the Republic
                        Indonesia, with number AHU-0248597.AH.01.11.TAHUN 2023,
                        email address:{" "}
                        <a
                            href="mailto:info@shellasaukia.co"
                            className="underline text-black"
                        >
                            info@shellasaukia.co
                        </a>{" "}
                        (hereinafter referred to as the “Company” or “We”).
                        <br />
                        <br />
                        This website is managed by the company Level Up, details
                        contacts will be mentioned at the end of this document.
                    </p>
                    <h1
                        className="font-normal text-base font-roboto tracking-widest mt-10"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        ACCESS TO THE SITE
                    </h1>
                    <p
                        className="font-roboto mt-4 font-light tracking-wider text-sm"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        To access and use these websites, you are adults (aged
                        18 years or over), and have valid email address. (If you
                        haven&apos;t fulfilled these criteria, prior permission
                        is required from your parents).
                        <br />
                        <br />
                        You will be asked to fill in the required sections on a
                        form, marked by punctuation star. In this case, you are
                        required to fill in all these parts, before entering the
                        website. Inaccuracy or incompleteness of registration is
                        not acceptable.
                        <br />
                        <br />
                        You accept that the data you input to us and which are
                        stored in our information system are accurate and serves
                        as proof of your identity. Please inform us if there are
                        changes to the data You.
                        <br />
                        <br />
                        Access to certain websites and/or segments requires
                        personal access code. In such circumstances, you have
                        the freedom to take steps to safeguard confidentiality
                        of these codes. Of course you can change the code every
                        time. However, the amount of effort to access the
                        Website and/or certain segments may be limited to
                        prevent misuse these codes. Please inform us if you see
                        any abuse.
                        <br />
                        <br />
                        In case of non-fulfillment of the stated rules in the
                        Terms of Use of these websites, we reserve the right to
                        terminate your access to the website. If p If this
                        happens, we will inform you as soon as possible
                        <br />
                        <br />
                        Even though we are trying to make a website we can
                        accessible at all times, we cannot guarantee that Access
                        can be done at any time. In fact, because certain
                        reasons such as maintenance, renewal, or other reasons
                        that are beyond our control, access to the website may
                        be disrupted.
                        <br />
                        <br />
                    </p>
                    <h1
                        className="font-normal text-base font-roboto tracking-widest mt-10"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        INTELLECTUAL PROPERTY RIGHTS
                    </h1>
                    <p
                        className="font-roboto mt-4 font-light tracking-wider text-sm"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        This website and its constituent elements (e.g signs,
                        images, texts, videos, etc.) are protected by rights
                        intellectual property. The development of this site is
                        significant investment and general employment of our
                        team. For this reason, except as provided in these
                        terms, we do not provide permission use of the site
                        outside for your personal use. Any use, reproduction, or
                        representation of Websites (in whole or in part) or
                        elements contained therein, in any media, for other
                        needs, including but not limited to, commercial
                        purposes, not permitted. On condition certain, we may
                        permit you to reproduce and/or represents all or part of
                        the Website, on certain media. Any authorization request
                        in This must be submitted in advance to the address
                        following e-mail:{" "}
                        <a
                            href="mailto:info@shellasaukia.co"
                            className="underline text-black"
                        >
                            info@shellasaukia.co
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../utils/LanguageContext";

export default function PrivacyPolicy() {
    const { isIndo } = useLanguage();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="w-full flex flex-col justify-start items-center bg-white">
                <div className="w-80 md:w-[40rem] my-20 md:my-44">
                    <h1 className="text-center mb-14 font-roboto font-normal tracking-widest text-2xl text-black">
                        PRIVACY POLICY
                    </h1>
                    <h1 className="font-normal text-base font-roboto tracking-widest">
                        1. INTRODUCTION
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        This Privacy Policy explains how Shellasaukia.co
                        (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
                        collects, uses, stores, and shares your personal
                        information when you use our website.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        2. INFORMATION WE COLLECT
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        We may collect and use the following types of personal
                        information:
                    </p>
                    <div className="ms-6 font-roboto mt-4 font-light tracking-wider text-sm">
                        <p>
                            a. Information you provide when you register on our
                            website or use our services.
                        </p>
                        <p>
                            b. Details of your visits to our website and the
                            resources you access.
                        </p>
                    </div>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        3. HOW WE USE YOUR INFORMATION
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        The information we collect is used to:
                    </p>
                    <div className="ms-6 font-roboto mt-4 font-light tracking-wider text-sm">
                        <p>a. Provide and improve our services to you.</p>
                        <p>
                            b. Communicate with you regarding your use of our
                            services.
                        </p>
                        <p>
                            c. Ensure the security and integrity of our website
                            and services.
                        </p>
                    </div>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        4. SHARING YOUR INFORMATION
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        We do not sell, trade, or otherwise transfer your
                        personal information to outside parties except as
                        described in this Privacy Policy. We may share your
                        information with trusted third parties who assist us in
                        operating our website, conducting our business, or
                        providing services to you, so long as those parties
                        agree to keep this information confidential.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        5. DATA SECURITY
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        We implement a variety of security measures to maintain
                        the safety of your personal information. However, no
                        method of transmission over the Internet, or method of
                        electronic storage, is 100% secure, and we cannot
                        guarantee its absolute security.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        6. YOUR CONSENT
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        By using our website, you consent to our privacy policy.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        7. CHANGES TO OUR PRIVACY POLICY
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        We may update this Privacy Policy from time to time. We
                        will notify you of any changes by posting the new
                        Privacy Policy on our website. You are advised to review
                        this Privacy Policy periodically for any changes.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        8. WEBSITE TERMS
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        These Website Terms (together with the documents
                        referred to) tell you the terms on which you may use our
                        website
                        <a
                            href="https://www.shellasaukia.co"
                            className="underline text-black"
                        >
                            shellasaukia.co
                        </a>
                        (“Website”). Please read these terms of use (“Website
                        Terms”) carefully before you start using the Website. By
                        using the Website, you indicate that you accept these
                        Website Terms and that you agree to abide by them. If
                        you do not agree to these terms of use, please do not
                        use the Website. We reserve the right to change these
                        Website Terms from time to time without notice to you.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        9. ACCESSING THE WEBSITE
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        Access to the Website is permitted on a temporary basis,
                        and we reserve the right to withdraw or amend the
                        service we provide on the Website without notice (see
                        below). We will not be liable if for any reason the
                        Website is unavailable at any time or for any period.
                        From time to time, we may restrict access to some parts
                        or all of the Website.
                        <br />
                        <br /> If you choose, or you are provided with, a
                        username, password, or any other information as part of
                        our security procedures, you must treat such information
                        as confidential and must not disclose it to any third
                        party. We have the right to disable any username or
                        password, whether chosen by you or allocated by us, at
                        any time if, in our opinion, you have failed to comply
                        with any of the provisions of these Website Terms.
                        <br />
                        <br /> You are responsible for making all arrangements
                        necessary for you to have access to the Website. You are
                        also responsible for ensuring that all persons who
                        access the Website through your internet connection are
                        aware of these Website Terms and that they comply with
                        them.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        10. INTELLECTUAL PROPERTY RIGHTS
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        We are the owner or the licensee of all intellectual
                        property rights in the Website and in the content
                        displayed or appearing on it, including, without
                        limitation, text, graphics, photos, images, moving
                        images, sound, illustrations, and software, and our
                        trademarks. Such works are protected by trademark and
                        copyright laws and treaties around the world. All such
                        rights are reserved.
                        <br />
                        <br /> Except as explicitly permitted under this or
                        another agreement with us, no part or element of the
                        Website or its content may be copied or retransmitted
                        via any means and the Website, its content, and all
                        related rights shall remain the exclusive property of us
                        or our licensors unless otherwise expressly agreed.
                        <br />
                        <br /> You must not use any part of the materials on the
                        Website for commercial purposes without obtaining a
                        license to do so from us. If you print, copy, or
                        download any part of the Website in breach of these
                        Website Terms, your right to use the Website will cease
                        immediately, and you must, at our option, return or
                        destroy any copies of the materials you have made.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        11. WEBSITE CHANGES REGULARLY
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        We aim to update the Website regularly and may change
                        the content at any time. If necessary, we may suspend
                        access to the Website or close it indefinitely. Any of
                        the material on the Website may be out of date at any
                        given time, and we are under no obligation to update
                        such material.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        12. OUR OBLIGATIONS
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        The material displayed on the Website is provided
                        without any related warranties, conditions or guarantees
                        its accuracy. To the extent permitted by law, we, other
                        members of our group of companies and third parties
                        which is connected with us hereby expressly exclude:
                    </p>
                    <li className="ms-6 font-roboto mt-4 font-light tracking-wider text-sm">
                        All conditions, warranties and other terms are may be
                        implied by statute, common law, or law of equality.
                    </li>
                    <li className="ms-6 font-roboto mt-4 font-light tracking-wider text-sm">
                        Any liability for loss or damage direct, indirect or
                        consequential ones borne by any user in connection with
                        Website or in connection with the use, inability to use,
                        or result of use of the Website, any website linked to
                        The Website and any materials posted on it, among
                        others:
                    </li>
                    <div className="ms-12 font-roboto mt-4 font-light tracking-wider text-sm">
                        <p className="mt-2">a. loss of income or earnings;</p>
                        <p className="mt-2">b. loss of business;</p>
                        <p className="mt-2">c. loss of profits or contracts;</p>
                        <p className="mt-2">d. loss of anticipated savings;</p>
                        <p className="mt-2">e. data loss;</p>
                        <p className="mt-2">f. loss of goodwill; And</p>
                        <p className="mt-2">
                            g.management or wasted office time,
                        </p>
                    </div>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        whether caused by error (including negligence), breach
                        of contract or otherwise, even if it can estimated in
                        advance, provided that the conditions this will not
                        prevent claims for loss or damage to your tangible
                        property or other claims for non-excluded direct
                        financial losses by from the categories mentioned above.
                        <br />
                        <br />
                        This does not affect our responsibility for death or
                        personal injury arising from our negligence or our
                        liability for any misrepresentation or misrepresentation
                        of a fundamental issue, or any other liability that
                        cannot be excluded or limited based on applicable law.
                        <br />
                        <br />
                        Comments and other materials posted on the Website is
                        not intended as advice on which reliance should be
                        placed. Therefore, we disclaim all liability and
                        responsibilities arising from that dependency placed on
                        such materials by visitors to the Site Web or by anyone
                        who may be notified about its contents.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        13. INFORMATION ABOUT YOU AND YOUR VISITS TO THE SITE
                        WEB
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        We process information about you in accordance with Our
                        Privacy Policy. By using the Website, You confirm that
                        you agree to the processing set out in our and your
                        Privacy Policy guarantee that all data you provide is
                        true accurate.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        14. UPLOADING CONTENT
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        Whenever you use a feature that allows you upload
                        materials to the Website, or to interact with with us or
                        other users of the Website, you must comply with the
                        content standards set out in the Terms this Website. You
                        guarantee that every contribution complies with the
                        requirements set forth herein and that you own and/or
                        have the right to upload content. You indemnify us for
                        any breach of that warranty.
                        <br />
                        <br />
                        Any material you upload to the Website will considered
                        non-confidential and non-proprietary, and we have the
                        irrevocable right to use, copy, distribute, and disclose
                        such material to third parties to any purpose. We also
                        reserve the right to disclose your identity, in
                        accordance with the provisions of the Policy Our
                        privacy, to any third party who claim that any material
                        you post or upload to the Website is a violation of
                        rights their intellectual property or their rights. For
                        privacy.
                        <br />
                        <br />
                        We will not be responsible, or liable to any third
                        party, for content or the accuracy of any material
                        posted by you or other users of the Website.
                        <br />
                        <br />
                        We reserve the right to remove any material or posting
                        anything you make on the Website if, in your opinion us,
                        the material does not comply with our content standards
                        as set out in the acceptable use policy accepted below.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        15. ACCEPTABLE USE
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        These content standards apply to any and all materials
                        that you contribute to the Website and for services
                        interactive anything related to it.
                        <br />
                        <br />
                        You must comply with the spirit of the following
                        standards as well as the letter That. Standards apply to
                        each part of each contribution as well as to the whole.
                        <br />
                        <br />
                        Content must be accurate (if it states facts), unbiased
                        truly firmly held views (where express opinions) and
                        comply with applicable laws in United Kingdom and in the
                        country where the content is posted.
                        <br />
                        <br />
                        Content must not:
                        <br />
                        <br />
                    </p>
                    <div className="ms-12 font-roboto mt-4 font-light tracking-wider text-sm">
                        <p className="mt-2">
                            1. contains defamatory material somebody;
                        </p>
                        <p className="mt-2">
                            2.contains any material that is obscene, offensive,
                            hateful, or inflammatory;
                        </p>
                        <p className="mt-2">
                            3.promote sexually explicit material, violence or
                            illegal activities;
                        </p>
                        <p className="mt-2">
                            4.promote discrimination based on race, gender
                            gender, religion, nationality, disability,
                            orientation sexual or age;
                        </p>
                        <p className="mt-2">
                            5. violates copyright, trademark, or other rights
                            other intellectual property belonging to others;
                        </p>
                        <p className="mt-2">
                            6.include personal information from each individual
                            who do not consent to the use of personal
                            information them in that way;
                        </p>
                        <p className="mt-2">
                            7. mislead or tend to deceive anyone;
                        </p>
                        <p className="mt-2">
                            8. be an advertisement or other commercial
                            solicitation;
                        </p>
                        <p className="mt-2">
                            9.is made in breach of any legal obligation that
                            owed to a third party, such as a liability contracts
                            or obligations of trust;
                        </p>
                        <p className="mt-2">
                            10. threaten, be rude, harass or attack privacy of
                            others, or cause interference, discomfort,
                            embarrassment, alarm or anxiety unnecessary;
                        </p>
                        <p className="mt-2">
                            11.used to impersonate someone or for describe your
                            identity or affiliation with any person (including,
                            but not limited to, by giving the impression that
                            the content originates from us, if this is not the
                            case); and/or
                        </p>
                        <p className="mt-2">
                            12. recommend, promote or help unlawful acts such as
                            (for example only) copyright infringement or misuse
                            computer.
                        </p>
                    </div>
                    <p className="font-roboto mt-10 font-light tracking-wider text-sm">
                        We will determine, at our discretion, whether there has
                        been a violation of the Website Terms this is through
                        your use of the Website.
                        <br />
                        <br />
                        When a violation of these Website Terms has been occurs,
                        we may take action as we deem appropriate.
                        <br />
                        <br />
                        Failure to comply with the terms of use may accepted
                        this constitutes a material breach of the terms of use
                        by which you are permitted to using the Website and may
                        result in us take all or any of the following actions:
                        <br />
                        <br />
                    </p>
                    <div className="ms-12 font-roboto mt-4 font-light tracking-wider text-sm">
                        <p className="mt-2">
                            1.immediate, temporary or permanent withdrawal of
                            rights you to use the Website;
                        </p>
                        <p className="mt-2">
                            2.immediate, temporary or permanent removal of any
                            posts or materials uploaded by you to the Website;
                        </p>
                        <p className="mt-2">3.issuance of warnings to you;</p>
                        <p className="mt-2">
                            4. legal proceedings against you for reimbursement
                            of all costs on an indemnity basis (including, but
                            not limited to, administrative and legal costs
                            reasonable) resulting from the violation;
                        </p>
                        <p className="mt-2">
                            5.further legal action against you; And
                        </p>
                        <p className="mt-2">
                            6. disclosure of such information to authorities law
                            enforcement that we feel is necessary.
                        </p>
                    </div>
                    <p className="font-roboto mt-10 font-light tracking-wider text-sm">
                        We will determine, at our discretion, whether We exclude
                        liability for any such actions taken in response to a
                        violation of the provisions this acceptable use. That
                        response described in these Website Terms is not limited
                        and we may take other actions we deem appropriate.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        16. VIRUSES, HACKING AND OTHER VIOLATIONS
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        You must not misuse the Website by intentionally
                        introduce viruses, trojans, worms, or other materials
                        others that are malicious or technologically harmful.
                        You should not try to gain access authorized to the
                        Website, the server on which the Website is stored, or
                        any connected server, computer or database to the
                        Website. You may not attack the Website through denial
                        of service attacks or raids distributed denial of
                        service.
                        <br />
                        <br />
                        By violating these terms, you will do criminal offense
                        under the Abuse Act. We will report the violation to
                        relevant law enforcement authorities and we will
                        cooperate with those authorities with reveal your
                        identity to them. If it happens such violation, your
                        right to use The Website will be discontinued
                        immediately.
                        <br />
                        <br />
                        We will not be responsible for any loss or damage caused
                        by rejection attacks distributed services, viruses or
                        harmful materials other things that can infect your
                        computer equipment, computer programs, data, or other
                        proprietary materials due to your use of the Website or
                        for download any material posted therein or on any
                        website linked to it
                        <br />
                        <br />
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        17. LINKS TO WEBSITES
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        You may not link to our home page or create a link to
                        any part of the Website and You may not create a link in
                        such a way to suggest any form of association, approval,
                        or support from our side if there is none. We have the
                        right to withdraw unauthorized links without
                        notification.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        18.LINK FROM WEBSITE
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        If the Website contains links to other sites and
                        resources power provided by third parties, this link is
                        provided for your and your information only access it
                        entirely at your own risk. We has no control over the
                        site content or resources such and is not responsible
                        for them or for any loss or damage that may arise from
                        your use of the site or resource.
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        19. DATA USE
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        You are fully responsible for paying all fees that you
                        may incur when you access or using the Website,
                        streaming or downloading materials anything posted on it
                        or uploaded content, including internet service provider
                        fees or your data and any additional charges to that
                        provider if you have a limit on the amount of data you
                        can download. Access and use features on the Site Web to
                        stream, download, view or listen to the content
                        available on it or for uploading content may cause
                        bandwidth usage big ones by you that can be expensive so
                        you have to be careful not to exceed any bandwidth.
                        limit&apos; on your account with your internet or
                        provider your data service.
                        <br />
                        <br />
                    </p>
                    <h1 className="font-normal text-base font-roboto tracking-widest mt-10">
                        20. CONTACT US
                    </h1>
                    <p className="font-roboto mt-4 font-light tracking-wider text-sm">
                        If you have any questions about this Privacy Policy,
                        please contact us at:
                    </p>
                    <p className="font-roboto mt-2 font-light tracking-wider text-sm">
                        Email:
                        <a
                            href="mailto:info@shellasaukia.co"
                            className="underline text-black"
                        >
                            info@shellasaukia.co
                        </a>
                        <br />
                        Address: JL. KYAI HAJI WAHID HASYIM No. 192,
                        Desa/Kelurahan Kampung Bali, Kec. Tanah Abang, Kota Adm.
                        Jakarta Pusat, Provinsi DKI Jakarta, 10250.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}

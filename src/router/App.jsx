import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Underconstruction from "../pages/Underconstruction";
import DeluxeCollection from "../pages/DeluxeCollection";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import ProductCatalog from "../pages/ProductCatalog";
import ProductDetails from "../pages/ProductDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/our-heritage" element={<About />} />
                <Route path="/concierge" element={<Contact />} />
                <Route path="/our-couture" element={<ProductCatalog />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />

                <Route
                    path="/our-couture/deluxe-collection/:id"
                    element={<ProductDetails />}
                />
                <Route
                    path="/our-couture/deluxe-collection"
                    element={<DeluxeCollection />}
                />
                <Route
                    path="/under-construction"
                    element={<Underconstruction />}
                />
            </Routes>
        </Router>
    );
};

export default App;

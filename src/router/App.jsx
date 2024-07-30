import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Underconstruction from "../pages/Underconstruction";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/our-heritage" element={<About />} />
                <Route path="/concierge" element={<Contact />} />
                <Route
                    path="/under-construction"
                    element={<Underconstruction />}
                />
            </Routes>
        </Router>
    );
};

export default App;

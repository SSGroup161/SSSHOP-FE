import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import { LanguageProvider } from "./utils/LanguageContext";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </React.StrictMode>
);

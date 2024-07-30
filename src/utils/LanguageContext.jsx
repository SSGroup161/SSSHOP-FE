import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [isIndo, setIsIndo] = useState(false);

    return (
        <LanguageContext.Provider value={{ isIndo, setIsIndo }}>
            {children}
        </LanguageContext.Provider>
    );
};

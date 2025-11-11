// src/context/GeneralContext.jsx
import { createContext, useState } from "react";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
    const [isBuyWindowOpen, setBuyWindowOpen] = useState(false);
    const [buyWindowUid, setBuyWindowUid] = useState(null);

    const openBuyWindow = (uid) => {
        setBuyWindowUid(uid);
        setBuyWindowOpen(true);
    };

    const closeBuyWindow = () => {
        setBuyWindowUid(null);
        setBuyWindowOpen(false);
    };

    // Similar methods can be added for Sell Window
    const [isSellWindowOpen, setSellWindowOpen] = useState(false);
    const [sellWindowUid, setSellWindowUid] = useState(null);

    const openSellWindow = (uid) => {
        setSellWindowUid(uid);
        setSellWindowOpen(true);
    };

    const closeSellWindow = () => {
        setSellWindowUid(null);
        setSellWindowOpen(false);
    };

    return (
        <GeneralContext.Provider
            value={{
                isBuyWindowOpen,
                buyWindowUid,
                openBuyWindow,
                closeBuyWindow,
                isSellWindowOpen,
                sellWindowUid,
                openSellWindow,
                closeSellWindow,
            }}
        >
            {children}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;

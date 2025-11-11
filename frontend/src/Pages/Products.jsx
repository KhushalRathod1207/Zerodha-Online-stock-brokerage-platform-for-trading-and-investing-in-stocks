import React from "react";
import Hero from "../components/Products/Hero";
import LeftSection from "../components/Products/LeftSection";
import RightSection from "../components/Products/RightSection";
import Universe from "../components/Products/Universe";

function Products() {
    return (
        <>
            <Hero />

            <LeftSection
                imageURL="/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, and elegant UI."
                tryDemo="#"
                learnMore="#"
                googlePlayURL="#"
                appStoreURL="#"
            />

            <RightSection
                imageURL="/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments."
                learnMore="#"
            />

            <LeftSection
                imageURL="/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account."
                googlePlayURL="#"
                appStoreURL="#"
            />

            <RightSection
                imageURL="/kiteConnectAPI.svg"
                productName="Kite Connect API"
                productDescription="Build your own trading platform with our powerful and easy-to-use APIs."
                learnMore="#"
            />

            <LeftSection
                imageURL="/varsity.png"
                productName="Varsity"
                productDescription="Learn trading and investing with our comprehensive educational platform."
                googlePlayURL="#"
                appStoreURL="#"
            />

            <Universe />
        </>
    );
}

export default Products;

import React from "react";
import HeroSection from "../components/Home/HeroSection";
import TrustSection from "../components/Home/TrustSection";
import PricingSection from "../components/Home/PricingSection";
import EducationSection from "../components/Home/EducationSection";
import OpenAccount from "../components/OpenAccount";

function HomePage() {
    return (
        <>
            <HeroSection />
            <TrustSection />
            <PricingSection />
            <EducationSection />
            <OpenAccount />
        </>
    );
}

export default HomePage;

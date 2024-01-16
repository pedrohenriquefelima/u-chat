import React from "react";
import HeroOne from "./homeComponents/MainHomeContent";
import FrequentlyAskedQuestions from "../helpers/Q_And_A/FrequentlyAskedQuestions";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
    return (
        <>
            <HeroOne/>
            <FrequentlyAskedQuestions/>
            <Footer/>
        </>
    )
};

export default HomePage;
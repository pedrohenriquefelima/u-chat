import React from "react";
import HeroOne from "./homeComponents/HeroOne";
import HeroTwo from "./homeComponents/HeroTwo"
import HeroThree from "./homeComponents/HeroThree";
import FrequentlyAskedQuestions from "../helpers/Q_And_A/FrequentlyAskedQuestions";
import DownLoadAppCallOut from "../helpers/DownLoadAppCallOut";

const HomePage = () => {
    return (
        <>
            <HeroOne/>
            <HeroTwo/>
            <HeroThree/>
            <FrequentlyAskedQuestions/>
            <DownLoadAppCallOut/>
        </>
    )
};

export default HomePage;
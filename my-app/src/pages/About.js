import logo from '../assets/fonts/logo.png';
import '../App.css';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png';
import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "../Languages";
import { useTranslation, initReactI18next } from "react-i18next";

function About() {
    const background = true;
    const { t } = useTranslation();
    return (

        <div className="App">
            <h1 className="headerMapText">
                <img src={logo} style={{ height: 120, width: 120, marginLeft: "-4%", marginBlockEnd: "-2%" }} />
                About Liberation Atlas

            </h1>
            <div className="mapTextContainer2">
                <p className="mapText">{t("AboutBody")} </p></div>
        </div>


    );
}

export default About;

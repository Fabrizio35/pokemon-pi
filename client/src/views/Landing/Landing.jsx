import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={style.landing}>          
            <div className={style.infoLandingContainer}>
                <h1 className={style.landingTitle}>Pokemon APP</h1>
                <Link to="/home" className={style.linkButton}><button className={style.landingButton}>INGRESAR</button></Link>
                <p className={style.landingAuthor}>By Fabrizio Ossola</p>
            </div>              
        </div>
    );
};

export default Landing;
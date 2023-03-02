import React from "react";
import style from "./Error404.module.css";
import errorImage from "../../images/notFound-img.png";
import Navbar from "../../components/Navbar/Navbar";

const Error404 = () => {
    return (
        <div className={style.error404Container}>
            <Navbar />
            <div className={style.error404InfoContainer}>
                <img src={errorImage} alt="error404-image" className={style.error404Img} />
                <h1 className={style.error404Text}>ERROR 404 NOT FOUND</h1>
            </div>
        </div>
    );
};

export default Error404;
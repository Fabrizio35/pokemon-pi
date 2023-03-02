import React from "react";
import style from "./Loading.module.css";
import loadingGif from "../../images/loading-gif.gif"

const Loading = () => {
    return (
        <div className={style.loadingContainer}>
            <img src={loadingGif} alt="loading-gif" className={style.loadingGif} />
            <h1 className={style.loadingText}>Cargando...</h1>
        </div>
    );
};

export default Loading;
import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({image, name, types, id}) => {
    return (
        <Link to={`/detail/${id}`} className={style.linkCard}>
            <div className={style.cardContainer}>
                <p className={style.cardName}>{name}</p>
                <img src={image} alt="pokemon-image" className={style.imgCard} />
                <p className={style.tipoCardText}>Tipo</p>
                <ul className={style.unorderedList}>
                    {types.map((type, index) => {
                        return <li key={index} className={style.liCard}>{type}</li>
                    })}
                </ul>
            </div>
        </Link>
    );
};

export default Card;
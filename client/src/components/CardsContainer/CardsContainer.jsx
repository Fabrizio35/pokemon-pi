import React from "react";
import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = ({items}) => {
    const pokemonsByName = useSelector(state => state.pokemonsByName);

    return (
        <div className={style.cardsContainerMain}>

            <div className={style.cardsContainer}>
                {pokemonsByName.length ? pokemonsByName.map(pokemon => {
                    return <Card 
                    image={pokemon.image}
                    name={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                    types={pokemon.types.map(type => type = type[0].toUpperCase() + type.substring(1))}
                    id={pokemon.id}
                    key={pokemon.id}
                />
                }) : 
                items.map(pokemon => {
                    return <Card 
                        image={pokemon.image}
                        name={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                        types={pokemon.types.map(type => type = type[0].toUpperCase() + type.substring(1))}
                        id={pokemon.id}
                        key={pokemon.id}
                    />
                })}
            </div> 
                          
        </div>
    );
};

export default CardsContainer;
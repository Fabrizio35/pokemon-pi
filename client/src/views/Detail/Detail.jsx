import React, { useEffect } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, cleanPokemonDetail } from "../../redux/actions";
import Navbar from "../../components/Navbar/Navbar";

const Detail = ({match}) => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemonById);
    const id = match.params.id;

    useEffect(() => {
        dispatch(getPokemonById(id));
        return function () {
            dispatch(cleanPokemonDetail());
        };
    }, [id, dispatch]);

    return (
        <div className={style.detailContainerMain}>
            <Navbar />

            <div className={style.detailContainer}>
                <p className={style.detailName}>{pokemon.name ? pokemon.name[0].toUpperCase() + pokemon.name.substring(1) : null}</p>
                <p className={style.detailId}>#{pokemon.id}</p>
                <img src={pokemon.image} alt="pokemon-image" className={style.imageDetail} />
                <p className={style.detailHealth}>Vida: {pokemon.hp}</p>
                <p className={style.detailAttack}>Ataque: {pokemon.attack}</p>
                <p className={style.detailDefense}>Defensa: {pokemon.defense}</p>
                {pokemon.speed ? <p className={style.detailSpeed}>Velocidad: {pokemon.speed}</p> : null}
                {pokemon.height ? <p className={style.detailHeight}>Altura: {pokemon.height}</p> : null}
                {pokemon.weight ? <p className={style.detailWeight}>Peso: {pokemon.weight}</p> : null}
                <p className={style.detailTypesTitle}>Tipos:</p>
                {pokemon.types ? 
                <ul className={style.unorderedDetail}>
                    {pokemon.types.map((type, index) => {
                        return <li key={index} className={style.detailType}>{type[0].toUpperCase() + type.substring(1)}</li>
                    })}
                </ul> : null}
            </div> 

        </div>
    );
};

export default Detail;
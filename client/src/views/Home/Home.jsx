import React, { useEffect } from "react";
import style from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Loading from "../../components/Loading/Loading";
import Paginado from "../../components/Paginado/Paginado";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons, cleanPokemons, cleanPokemonsByName } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
        return function () {
            dispatch(cleanPokemons());
            dispatch(cleanPokemonsByName());
        };
    }, []);

    return (
        <div className={style.homeContainer}>

            {pokemons.length > 0 && <Navbar />}

            {pokemons.length > 0 && <Searchbar />}

            {pokemons.length === 0 && <Loading />}

            {pokemons.length > 0 && <Paginado />}

        </div>
    );
};

export default Home;
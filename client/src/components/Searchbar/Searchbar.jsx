import React, { useState } from "react";
import style from "./Searchbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsByName } from "../../redux/actions";

const Searchbar = () => {
    const dispatch = useDispatch();
    const pokemonsByName = useSelector(state => state.pokemonsByName);
    
    const [searchInput, setSearchInput] = useState("");

    const changeHandler = (event) => {
        const name = event.target.value
        setSearchInput(name);
    };

    const onSearch = () => {
        dispatch(getPokemonsByName(searchInput));
        console.log(pokemonsByName);
    };

    return (
        <div className={style.searchbarContainer}>
            <input type="text" 
                placeholder="Busca un pokemon..." 
                className={style.inputSearchbar} 
                onChange={changeHandler} 
                value={searchInput} 
            />
            <button className={style.buttonSearchbar} onClick={onSearch}>Buscar</button>
        </div>
    );
};

export default Searchbar;
import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { getAllPokemons, 
    cleanPokemons, 
    cleanPokemonsByName, 
    cleanPokemonsOrigin,
    cleanPokemonsByType,
    cleanOrderAlphAsc,
    cleanAlphDes,
    cleanOrderAttackMin,
    cleanOrderAttackMax,
    cleanPokemonDetail, 
} from "../../redux/actions";
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const pathname = location.pathname;

    const refresh = () => {
        dispatch(cleanPokemonDetail());
        dispatch(cleanPokemonsByName());
        dispatch(cleanPokemonsOrigin());
        dispatch(cleanPokemonsByType());
        dispatch(cleanPokemons());
        dispatch(cleanOrderAlphAsc());
        dispatch(cleanAlphDes());
        dispatch(cleanOrderAttackMin());
        dispatch(cleanOrderAttackMax());
        dispatch(getAllPokemons());
    };
    
    return (
        <div className={style.navbarContainer}>
            <Link to="/home" className={style.linkNavbarHomeButton}><button className={style.homeButton} onClick={pathname === "/home" ? refresh : undefined}>PÁGINA PRINCIPAL</button></Link>
            <h1 className={style.titleNavbar}>Pokemon APP</h1>
            <Link to="/create" className={style.linkNavbarCreateButton}><button className={style.createButton}>CREAR POKEMON</button></Link>
        </div>
    );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import style from "./Paginado.module.css";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useSelector, useDispatch } from "react-redux";
import { orderByDb, 
    orderByApi, 
    getAllTypes,
    orderByType,
    orderAlphAsc,
    orderAlphDes,
    orderAttackMin,
    orderAttackMax,
} from "../../redux/actions";

const Paginado = () => {
    const dispatch = useDispatch();
    let pokemons = useSelector(state => state.pokemons);
    const pokemonsByName = useSelector(state => state.pokemonsByName);
    const pokemonsByOrigin = useSelector(state => state.pokemonsByOrigin);
    const pokemonsByType = useSelector(state => state.pokemonsByType);
    const pokemonsAlphAsc = useSelector(state => state.pokemonsAlphAsc);
    const pokemonsAlphDes = useSelector(state => state.pokemonsAlphDes);
    const pokemonsAttackMin = useSelector(state => state.pokemonsAttackMin);
    const pokemonsAttackMax = useSelector(state => state.pokemonsAttackMax);

    const types = useSelector(state => state.types);

    if (pokemonsByOrigin.length > 0) pokemons = pokemonsByOrigin;
    if (pokemonsByType.length > 0) pokemons = pokemonsByType;
    if (pokemonsAlphAsc.length > 0) pokemons = pokemonsAlphAsc;
    if (pokemonsAlphDes.length > 0) pokemons = pokemonsAlphDes;
    if (pokemonsAttackMin.length > 0) pokemons = pokemonsAttackMin;
    if (pokemonsAttackMax.length > 0) pokemons = pokemonsAttackMax;

    const itemsPerPage = 12;

    const [items, setItems] = useState([].splice(0, itemsPerPage));
    const [currentPage, setCurrentPage] = useState(0);

    const totalData = pokemons.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsPerPage;

    const nextHandler = () => {
        if (firstIndex >= totalData) return;

        setItems([...pokemons].splice(firstIndex, itemsPerPage));

        setCurrentPage(nextPage);
    };

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPerPage;

        setItems([...pokemons].splice(firstIndex, itemsPerPage));

        setCurrentPage(prevPage);
    };

    const originHandler = (event) => {
        const value = event.target.value;

        if (value === "db") dispatch(orderByDb());

        if (value === "api") dispatch(orderByApi());
    };

    const typeHandler = (event) => {
        const value = event.target.value;

        dispatch(orderByType(value));
    };

    const alphHandler = (event) => {
        const value = event.target.value;

        if (value === "asc") dispatch(orderAlphAsc());

        if (value === "des") dispatch(orderAlphDes());
    };

    const attackHandler = (event) => {
        const value = event.target.value;

        if (value === "min") dispatch(orderAttackMin());
        
        if (value === "max") dispatch(orderAttackMax());
    };

    useEffect(() => {
        dispatch(getAllTypes());
        setItems([...pokemons].splice(0, itemsPerPage));
        setCurrentPage(0);
    }, [setItems, pokemons, itemsPerPage, setCurrentPage]);

    return (
        <div>

            <div className={style.filterContainerMain}>

            <div className={style.filterContainer}>
                <p className={style.filterText}>Ordenar por origen</p>
                <select name="orderOrigin" onChange={originHandler} className={style.selectFilter}>
                    <option>Seleccionar</option>
                    <option value="api">API</option>
                    <option value="db">Base de datos</option>
                </select>
            </div>

            <div className={style.filterContainer}>
                <p className={style.filterText}>Buscar por tipo</p>
                <select name="orderType" onChange={typeHandler} className={style.selectFilter}>
                    <option>Seleccionar</option>
                    {types.map((type, index) => {
                        return <option key={index} value={type.name}>{type.name[0].toUpperCase() + type.name.substring(1)}</option>
                    })}
                </select>
            </div>

            <div className={style.filterContainer}>
                <p className={style.filterText}>Ordenar alfabéticamente</p>
                <select name="orderAlph" onChange={alphHandler} className={style.selectFilter}>
                    <option>Seleccionar</option>
                    <option value="asc">Ascendente</option>
                    <option value="des">Descentente</option>
                </select>
            </div>

            <div className={style.filterContainer}>
                <p className={style.filterText}>Ordenar por ataque</p>
                <select name="orderAttack" onChange={attackHandler} className={style.selectFilter}>
                    <option>Seleccionar</option>
                    <option value="min">Mínimo</option>
                    <option value="max">Máximo</option>
                </select>
            </div>

            </div>

            {pokemons.length > 0 && pokemonsByName.length === 0 &&
            <div className={style.paginadoContainerTop}>
                <div className={style.buttonPaginadoContainerTop}>
                    <button className={style.buttonPrevTop} onClick={prevHandler} disabled={currentPage === 0 ? true : false}>Anterior</button>
                    <button className={style.buttonNextTop} onClick={nextHandler} disabled={firstIndex >= totalData ? true : false}>Siguiente</button>
                </div>
                <h3 className={style.paginadoTextTop}>Página {currentPage + 1}</h3>
            </div>}

            <CardsContainer items={items} />

            {pokemons.length > 0 && pokemonsByName.length === 0 &&
            <div className={style.paginadoContainerBottom}>
                <h3 className={style.paginadoTextBottom}>Página {currentPage + 1}</h3>
                <div className={style.buttonPaginadoContainerBottom}>
                    <button className={style.buttonPrevBottom} onClick={prevHandler} disabled={currentPage === 0 ? true : false}>Anterior</button>
                    <button className={style.buttonNextBottom} onClick={nextHandler} disabled={firstIndex >= totalData ? true : false}>Siguiente</button>
                </div>
            </div>}
        </div>
    );
};

export default Paginado;
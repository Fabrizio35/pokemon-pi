import axios from "axios";
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const CLEAN_POKEMON_DETAIL = "CLEAN_POKEMON_DETAIL";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";
export const CLEAN_POKEMONS_BY_NAME = "CLEAN_POKEMONS_BY_NAME";
export const ORDER_BY_DB = "ORDER_BY_DB";
export const ORDER_BY_API = "ORDER_BY_API";
export const CLEAN_POKEMONS_ORIGIN = "CLEAN_POKEMONS_ORIGIN";
export const ORDER_BY_TYPE = "ORDER_BY_TYPE";
export const CLEAN_POKEMONS_BY_TYPE = "CLEAN_POKEMONS_BY_TYPE";
export const ORDER_ALPH_ASC = "ORDER_ALPH_ASC";
export const CLEAN_ORDER_ALPH_ASC = "CLEAN_ORDER_ALPH_ASC";
export const ORDER_ALPH_DES = "ORDER_ALPH_DES";
export const CLEAN_ORDER_ALPH_DES = "CLEAN_ORDER_ALPH_DES";
export const ORDER_ATTACK_MIN = "ORDER_ATTACK_MIN";
export const CLEAN_ORDER_ATTACK_MIN = "CLEAN_ORDER_ATTACK_MIN";
export const ORDER_ATTACK_MAX = "ORDER_ATTACK_MAX";
export const CLEAN_ORDER_ATTACK_MAX = "CLEAN_ORDER_ATTACK_MAX";     
 
export const getAllPokemons = () => {
    return async function (dispatch) {
        const axiosInfo = await axios.get("http://localhost:3001/pokemons");
        const pokemons = axiosInfo.data;
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
    };
};

export const getPokemonsByName = (name) => {
    return async function (dispatch) {
        try {
            const axiosInfo = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            const pokemonsByName = axiosInfo.data;
            dispatch({ type: GET_POKEMONS_BY_NAME, payload: pokemonsByName });
        } catch (error) {
            dispatch({ type: GET_POKEMONS_BY_NAME, payload: [] });
        };
    }; 
};

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const axiosInfo = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemonById = axiosInfo.data;
        dispatch({ type: GET_POKEMON_BY_ID, payload: pokemonById });
    };
};

export const getAllTypes = () => {
    return async function (dispatch) {
        const axiosInfo = await axios.get("http://localhost:3001/types");
        const types = axiosInfo.data;
        dispatch({ type: GET_ALL_TYPES, payload: types });
    };
};

export const cleanPokemonDetail = () => {
    return { type: CLEAN_POKEMON_DETAIL };
};

export const cleanPokemons = () => {
    return { type: CLEAN_POKEMONS };
};

export const cleanPokemonsByName = () => {
    return { type: CLEAN_POKEMONS_BY_NAME }; 
};

export const orderByDb = () => {
    return { type: ORDER_BY_DB };
};

export const orderByApi = () => {
    return { type: ORDER_BY_API };
};

export const cleanPokemonsOrigin = () => {
    return { type: CLEAN_POKEMONS_ORIGIN };
};

export const orderByType = (type) => {
    return { type:  ORDER_BY_TYPE , payload: type}
};

export const cleanPokemonsByType = () => {
    return { type: CLEAN_POKEMONS_BY_TYPE };
};

export const orderAlphAsc = (alph) => {
    return { type: ORDER_ALPH_ASC }
};

export const cleanOrderAlphAsc = () => {
    return { type: CLEAN_ORDER_ALPH_ASC };
};

export const orderAlphDes = () => {
    return { type: ORDER_ALPH_DES };
};

export const cleanAlphDes = () => {
    return { type: CLEAN_ORDER_ALPH_DES };
};

export const orderAttackMin = () => {
    return { type: ORDER_ATTACK_MIN };
};

export const cleanOrderAttackMin = () => {
    return { type: CLEAN_ORDER_ATTACK_MIN };
};

export const orderAttackMax = () => {
    return { type: ORDER_ATTACK_MAX };
};

export const cleanOrderAttackMax = () => {
    return { type: CLEAN_ORDER_ATTACK_MAX };
};
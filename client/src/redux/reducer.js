import { 
    GET_ALL_POKEMONS,
    GET_POKEMONS_BY_NAME, 
    GET_POKEMON_BY_ID, 
    GET_ALL_TYPES,
    CLEAN_POKEMON_DETAIL,
    CLEAN_POKEMONS,
    CLEAN_POKEMONS_BY_NAME,
    ORDER_BY_DB,
    ORDER_BY_API,
    CLEAN_POKEMONS_ORIGIN,
    ORDER_BY_TYPE,
    CLEAN_POKEMONS_BY_TYPE,
    ORDER_ALPH_ASC,
    CLEAN_ORDER_ALPH_ASC,
    ORDER_ALPH_DES,
    CLEAN_ORDER_ALPH_DES,
    ORDER_ATTACK_MIN,
    CLEAN_ORDER_ATTACK_MIN,
    ORDER_ATTACK_MAX,
    CLEAN_ORDER_ATTACK_MAX,
} from "./actions";

const initialState = {
    pokemons: [],
    pokemonsByName: [],
    pokemonById: {},
    types: [],
    pokemonsByOrigin: [],
    pokemonsByType: [],
    pokemonsAlphAsc: [],
    pokemonsAlphDes: [],
    pokemonsAttackMin: [],
    pokemonsAttackMax: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS: 
            return { ...state, pokemons: action.payload };
        case GET_POKEMONS_BY_NAME:
            return { ...state, pokemonsByName: action.payload === [] ? [] : action.payload };
        case GET_POKEMON_BY_ID:
            return { ...state, pokemonById: action.payload };
        case GET_ALL_TYPES:
            return { ...state, types: action.payload };
        case CLEAN_POKEMON_DETAIL:
            return { ...state, pokemonById: {} };
        case CLEAN_POKEMONS:
            return { ...state, pokemons: [] };
        case CLEAN_POKEMONS_BY_NAME:
            return { ...state, pokemonsByName: [] };
        case ORDER_BY_DB:
            return { ...state, pokemonsByOrigin: [...state.pokemons].filter(elem => elem.created === true) };
        case ORDER_BY_API:
            return { ...state, pokemonsByOrigin: [...state.pokemons].filter(elem => elem.created === false) };
        case CLEAN_POKEMONS_ORIGIN:
            return { ...state, pokemonsByOrigin: [] };
        case ORDER_BY_TYPE:
            return { ...state, pokemonsByType: [...state.pokemons].filter(elem => elem.types.includes(action.payload)) };
        case CLEAN_POKEMONS_BY_TYPE:
            return { ...state, pokemonsByType: [] };
        case ORDER_ALPH_ASC:
            return { ...state, pokemonsAlphAsc: [...state.pokemons].sort((a, b) => {
                if (a.name == b.name) return 0;
                if (a.name < b.name) return -1;
                return 1;
            }) };
        case CLEAN_ORDER_ALPH_ASC:
            return { ...state, pokemonsAlphAsc: [] };
        case ORDER_ALPH_DES:
            return { ...state, pokemonsAlphDes: [...state.pokemons].sort((a, b) => {
                if (a.name == b.name) return 0;
                if (a.name > b.name) return -1;
                return 1;
            }) };
        case CLEAN_ORDER_ALPH_DES:
            return { ...state, pokemonsAlphDes: [] };
        case ORDER_ATTACK_MIN:
            return { ...state, pokemonsAttackMin: [...state.pokemons].sort((a, b) => {
                if (a.attack == b.attack) return 0;
                if (a.attack < b.attack) return -1;
                return 1;
            }) };
        case CLEAN_ORDER_ATTACK_MIN:
            return { ...state, pokemonsAttackMin: [] };
        case ORDER_ATTACK_MAX:
            return { ...state, pokemonsAttackMax: [...state.pokemons].sort((a, b) => {
                if (a.attack == b.attack) return 0;
                if (a.attack > b.attack) return -1;
                return 1;
            }) };
        case CLEAN_ORDER_ATTACK_MAX:
            return { ...state, pokemonsAttackMax: [] };
        default: 
            return { ...state };
    };
};

export default reducer;
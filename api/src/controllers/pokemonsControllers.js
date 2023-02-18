const { Pokemon, Type } = require("../db");
const axios = require("axios");

const cleanInfo = (obj) => {
    return {
        id: obj.id,
        name: obj.name,
        image: obj.sprites.back_default,
        hp: obj.stats[0].base_stat,
        attack: obj.stats[1].base_stat,
        defense: obj.stats[2].base_stat,
        speed: obj.stats[5].base_stat,
        height: obj.height,
        weight: obj.weight,
        types: obj.types.map(elem => elem.type.name),
        created: false,
    };
};

const getAllPokemonsByNameInDb = async (name) => {
    const dbResults = await Pokemon.findAll({ where: { name }, include: {
        model: Type,
        attributes: ["name"],
        through: {
            attributes: [],
        },
    } });

    return dbResults;
};

const getAllPokemonsByNameInApi = async (name) => {
    const results = [];
    try {
        const apiResultsRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
        const apiResults = cleanInfo(apiResultsRaw);
        results.push(apiResults);
        return results;
    } catch (error) {
        return results;
    };   
};

const getAllPokemons = async () => {

    const pokemonsRawApi = (await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=120")).data.results;

    const urls = pokemonsRawApi.map(elem => elem.url);

    const urlsRequest = urls.map(elem => axios.get(elem));

    const responseRaw = await Promise.all(urlsRequest);

    const response = responseRaw.map(elem => elem.data);

    const apiResult = response.map(elem => cleanInfo(elem));

    const dbResults = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }
    });

    return [...dbResults, ...apiResult];
};

const getPokemonById = async (id, flag) => {
    if (flag === "bdd") {
        const pokemon = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            }
        });

        return pokemon;
    } else {
        const pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;

        const pokemon = cleanInfo(pokemonRaw);

        return pokemon;
    };
};

const createPokemon = async (name, image, hp, attack, defense, speed, height, weight, typesId) => {
    const [newPokemon, created] = await Pokemon.findOrCreate({
        where: {name},
        defaults: {name, image, hp, attack, defense, speed, height, weight},
    });

    if (!created) throw new Error("No se puede crear pokemons con el mismo nombre");

    await newPokemon.addTypes(typesId);
    return newPokemon
};

module.exports = {
    createPokemon,
    getAllPokemonsByNameInDb,
    getAllPokemons,
    getAllPokemonsByNameInApi,
    getPokemonById
}
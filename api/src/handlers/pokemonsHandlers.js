const { createPokemon, 
    getAllPokemonsByNameInDb, 
    getAllPokemons,
    getAllPokemonsByNameInApi,
    getPokemonById, 
} = require("../controllers/pokemonsControllers");

const getAllPokemonsHandler = async (req, res) => {
    let { name } = req.query;

    try {
        if (name) {
            name = name.toLowerCase(); 
            const allPokemonsByNameInDb = await getAllPokemonsByNameInDb(name);
            const allPokemonsByNameInApi = await getAllPokemonsByNameInApi(name);
            const results = [...allPokemonsByNameInDb, ...allPokemonsByNameInApi];

            if (!results.length) throw new Error("Ningún pokemon coincide con la búsqueda");

            res.status(200).send(results);
        } else {
            const allPokemons = await getAllPokemons();
            res.status(200).send(allPokemons);
        };
    } catch (error) {
        res.status(404).json({error: error.message});
    };
};

const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;
    const flag = isNaN(id) ? "bdd" : "api";

    try {
        const pokemonById = await getPokemonById(id, flag);
        res.status(200).send(pokemonById);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

const createPokemonHandler = async (req, res) => {
    let { name, image, hp, attack, defense, speed, height, weight, typesId } = req.body;

    try {
        if (!name || !image || !hp || !attack || !defense) throw new Error("Faltan datos obligatorios");
        name = name.toLowerCase();
        const newPokemon = await createPokemon(name, image, hp, attack, defense, speed, height, weight, typesId);
        res.status(200).json({message: "Pokemon creado correctamente"});
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {
    getAllPokemonsHandler,
    getPokemonByIdHandler,
    createPokemonHandler,
}
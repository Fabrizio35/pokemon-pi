const { Router } = require("express");
const { getAllPokemonsHandler, getPokemonByIdHandler, createPokemonHandler } = require("../handlers/pokemonsHandlers");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllPokemonsHandler);
pokemonsRouter.get("/:id", getPokemonByIdHandler);
pokemonsRouter.post("/", createPokemonHandler);

module.exports = pokemonsRouter;
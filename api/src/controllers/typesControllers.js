const axios = require("axios");
const { Type } = require("../db");

const getAllTypes = async () => {
    const typesDb = await Type.findAll();
    if (typesDb.length) return typesDb;

    const typesApi = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
    const data = typesApi.map(elem => {
        return {
            name: elem.name
        };
    });
    
    const results = await Type.bulkCreate(data);
    return results;
};

module.exports = {
    getAllTypes,
};
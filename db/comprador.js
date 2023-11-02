const knex = require("./knex");

function createComprador(comprador) {
    return knex("comprador").insert(comprador);
};

function getAllCompradores() {
    return knex("comprador").select("*");
};

function deleteComprador(id) {
    return knex("comprador").where("idComprador", id).del();
};

function updateComprador(id, comprador) {
    return knex("comprador").where("idComprador", id).update(comprador);
};

function getComprador(id) {
    return knex("comprador").where("idComprador",id).select("*");
};

module.exports = {
    createComprador,
    getAllCompradores,
    deleteComprador,
    updateComprador,
    getComprador
}
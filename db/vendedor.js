const knex = require("./knex");

function createVendedor(vendedor) {
    return knex("vendedor").insert(vendedor);
};

function getAllVendedores() {
    return knex("vendedor").select("*");
};

function deleteVendedor(id) {
    return knex("vendedor").where("IDVendedor", id).del();
};

function updateVendedor(id, vendedor) {
    return knex("vendedor").where("IDVendedor", id).update(vendedor);
};

function getVendedor(id) {
    return knex("vendedor").where("IDVendedor",id).select("*");
};

module.exports = {
    createVendedor,
    getAllVendedores,
    deleteVendedor,
    updateVendedor,
    getVendedor
}

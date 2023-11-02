const knex = require("./knex");

function createTipoProducto(tipoProducto) {
    return knex("tipoProducto").insert(tipoProducto);
};

function getAllTipoProductos() {
    return knex("tipoProducto").select("*");
};

function deleteTipoProducto(id) {
    return knex("tipoProducto").where("idTipoProducto", id).del();
};

function updateTipoProducto(id, tipoProducto) {
    return knex("tipoProducto").where("idTipoProducto", id).update(tipoProducto);
};

function getTipoProducto(id) {
    return knex("tipoProducto").where("idTipoProducto",id).select("*");
};

module.exports = {
    createTipoProducto,
    getAllTipoProductos,
    deleteTipoProducto,
    updateTipoProducto,
    getTipoProducto
}

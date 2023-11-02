const knex = require("./knex");

function createProducto(producto) {
    return knex("producto").insert(producto);
};

function getAllProducto() {
    return knex("producto").select("*");
};

function getProducto(numeroVendedor, idComprador, idTipoProducto) {
    return knex("producto")
    .where({
      numeroVendedor: numeroVendedor,
      idComprador: idComprador,
      idTipoProducto: idTipoProducto,
    })
    .select("*");
};

function deleteProducto(numeroVendedor, idComprador, idTipoProducto) {
    return knex("producto")
      .where({
        numeroVendedor: numeroVendedor,
        idComprador: idComprador,
        idTipoProducto: idTipoProducto,
      })
      .del();
  }

  function updateProducto(numeroVendedor, idComprador, idTipoProducto, producto) {
    return knex("producto")
      .where({
        numeroVendedor: numeroVendedor,
        idComprador: idComprador,
        idTipoProducto: idTipoProducto,
      })
      .update(producto);
  }

module.exports = {
    createProducto,
    getAllProducto,
    getProducto,
    deleteProducto,
    updateProducto
}
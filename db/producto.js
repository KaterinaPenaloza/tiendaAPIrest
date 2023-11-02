const knex = require("./knex");

function createProducto(producto) {
    return knex("producto").insert(producto);
};

function getAllProducto() {
    return knex("producto").select("*");
};

function getProducto(IDVendedor, IDComprador, IDTipoProducto) {
    return knex("producto")
    .where({
      numeroVendedor: IDVendedor,
      idComprador: IDCComprador,
      idTipoProducto: IDTipoProducto,
    })
    .select("*");
};

function deleteProducto(IDVendedor, IDComprador, IDTipoProducto) {
    return knex("producto")
      .where({
        numeroVendedor: IDVendedor,
        idComprador: IDComprador,
        idTipoProducto: IDTipoProducto,
      })
      .del();
  }

  function updateProducto(IDVendedor, IDComprador, IDTipoProducto, producto) {
    return knex("producto")
      .where({
        numeroVendedor: IDVendedor,
        idComprador: IDComprador,
        idTipoProducto: IDTipoProducto,
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
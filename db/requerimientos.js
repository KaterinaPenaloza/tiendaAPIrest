const knex = require("./knex");

function requerimiento(idComprador) {
    return knex("comprador")
        .join('Producto', 'comprador.IDComprador', '=', 'Producto.IDComprador')
        .where('comprador.IDComprador', IDComprador)
        .select("comprador.nombreComprador", "Producto.precioCompra");
};

module.exports = {
    requerimiento
}

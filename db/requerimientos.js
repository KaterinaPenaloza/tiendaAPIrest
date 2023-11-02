const knex = require("./knex");

function requerimiento(idComprador) {
    return knex("comprador")
        .join('Producto', 'comprador.idComprador', '=', 'Producto.idComprador')
        .where('comprador.idComprador', idComprador)
        .select("comprador.nombreComprador", "Producto.precioCompra");
};

module.exports = {
    requerimiento
}

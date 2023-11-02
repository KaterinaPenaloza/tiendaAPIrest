const knex = require("knex");

const connectedKnex = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: 'pass',
        database: 'tienda'
    }
});

module.exports = connectedKnex;

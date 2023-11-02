const knex = require("knex");

const connectedKnex = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'tienda'
    }
});

module.exports = connectedKnex;

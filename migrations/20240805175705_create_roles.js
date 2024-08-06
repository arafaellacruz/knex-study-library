exports.up = function(knex) {
    return knex.schema.createTable('roles', (table) => {
        table.increments('id').primary();
        table.string('name', 150);  
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('roles');

};


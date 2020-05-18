
exports.up = function(knex) {
    return knex.schema.createTable('product', function(t) {
        t.increments('id').unique()
        t.string('thumbnail')
        t.string('title')
        t.string('description')
        t.integer('price')
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('product');
};

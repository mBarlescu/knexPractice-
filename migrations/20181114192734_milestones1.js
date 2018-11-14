
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.integer('famouss_people_id');
      table.foreign('famouss_people_id').references('famouss_people.id');
    })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones');
};

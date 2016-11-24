
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cachorro', table => {
      table.increments('cachorro_id');
      table.string('nome_cachorro');
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists('cachorro');
};

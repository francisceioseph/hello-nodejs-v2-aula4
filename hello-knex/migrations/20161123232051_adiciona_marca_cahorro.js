
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('cachorro', table => {
      table.string('marca_cachorro');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cachorro', table => {
      table.dropColumn('marca_cachorro');
  })
};

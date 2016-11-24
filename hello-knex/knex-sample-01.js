/**
 * Cria uma tabela para representar um convidado dentro do banco de dados.
 * Table Schema
 * convidado_id:   id do convidado no banco de dados
 * nome_convidado: nome do convidado.\
 * 
 * @author: Francis Souza
 */

'use strict';

const knex = require('./db_config');

knex.schema.createTable('convidado', table => {
    table.increments('convidado_id');
    table.string('nome_convidado');
})
.then(() => {
    console.log('Tabela convidado criada com sucesso...');
    process.exit(0);
})
.catch(error => {
    console.warn('Um erro aconteceu ao criar a tabela: ', error);
    process.exit(1);
});
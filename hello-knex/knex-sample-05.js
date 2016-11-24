'use strict';

const knex = require('./db_config');

knex('convidado').select()
.then(convidados => {
    console.log('id\tnome');
    convidados.forEach(convidado => {
        console.log(`${convidado.convidado_id}\t${convidado.nome_convidado}`);
    });

    process.exit(0);
})
.catch(error => {
    console.warn('Um erro aconteceu ao carregar convidados da base de dados: ', error);
});


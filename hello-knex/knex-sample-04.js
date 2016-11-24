'use strict';

const knex = require('./db_config');

let deleteConvidado = function(convidado_id) {
    knex('convidado').del()
    .where({
        convidado_id: convidado_id
    })
    .then(() => {
        console.log('Convidado deletado com sucesso... ');
        process.exit(0);
    })
    .catch(error => {
        console.log('Um erro aconteceu ao deletar convidado: ', error);
        process.exit(1);
    });
};

let convidado_id = process.argv[2];

if (convidado_id) {
    deleteConvidado(convidado_id);
}
else {
    console.warn('Argumentos insuficientes... Nada a ser feito');
    process.exit(1);
}
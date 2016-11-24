'use strict';

const knex = require('./db_config');

let updateConvidado = function(convidado_id, novo_nome) {
    knex('convidado').update({
        nome_convidado: novo_nome
    })
    .where({
        convidado_id: convidado_id
    })
    .then(updatedRecord => {
        console.log(`Convidado id: ${convidado_id} atualizado com sucesso...`);
        process.exit(0);
    })
    .catch(error => {
        console.log('Um erro aconteceu ao atualizar convidado: ', error);
        process.exit(1);
    });
};

let nome_convidado = process.argv[2];
let id_convidado = process.argv[3];

if (nome_convidado && id_convidado) {
    updateConvidado(id_convidado, nome_convidado);
}
else {
    console.warn('Argumentos insuficientes... Nada a ser feito');
    process.exit(1);
}
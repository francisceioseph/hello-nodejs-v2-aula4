/**
 * Insere um novo convidado na base de dados
 * O nome do convidado deve ser fornecido via linha de comando. 
 */
'use strict';

const knex = require('./db_config');

let inserirNovoConvidado = function(nomeConvidado) {
    knex('convidado').insert({
        nome_convidado: nomeConvidado
    }, 'convidado_id')
    .then(record => {
        console.log(`Convidado inserido com sucesso: [id: ${record[0]}]`);
        process.exit(0);
    })
    .catch(error => {
        console.warn('Um erro aconteceu ao inserir na tabela: ', error);
        process.exit(1);
    });
};

let nomeConvidado = process.argv[2];

if (nomeConvidado) {
    inserirNovoConvidado(nomeConvidado);
}
else {
    console.log('Não há nada a inserir no banco. Nada a ser feito');
    process.exit(0);
}
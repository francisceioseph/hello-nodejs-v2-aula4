'use strict';

const knex = require('./db_config');

let procurarConvidadosPeloNome = function(nome_convidado) {
    knex('convidado').select()
    .where({
        nome_convidado:nome_convidado
    })
    .then(convidados => {
        console.log('id\tnome');
        convidados.forEach(convidado => {
            console.log(`${convidado.convidado_id}\t${convidado.nome_convidado}`);
        });

        process.exit(0);
    })
    .catch(error => {
        console.warn('Um erro aconteceu ao carregar convidados da base de dados: ', error);
        process.exit(1);
    });
}

let nome_convidado = process.argv[2];

if (nome_convidado) {
    procurarConvidadosPeloNome(nome_convidado);
}
else {
    console.warn('Argumentos insuficientes... Nada a ser feito');
    process.exit(1);
}
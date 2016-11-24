"use strict"
const knex = require("./db_config");

let listarConvidados = function() {    
    let query = 'select * from convidado';
    
    knex.raw(query)
    .then(convidados => {
        convidados.forEach(convidado => {
            console.log(`${convidado.convidado_id}\t${convidado.nome_convidado}`);
        });
        process.exit(0);
    })
    .catch(error => {
        console.log('Erro ao listar convidados: ', error);
        process.exit(1);
    });
};

let atualizarConvidadoComRawQuery = function(id_convidado, nome_convidado){
    let query = 'update convidado set nome_convidado = :nome where convidado_id = :id';
    let params = {
        nome: nome_convidado,
        id: id_convidado
    };

    knex.raw(query, params)
    .then(() => {
        listarConvidados();
    })
    .catch(error => {
        console.log('Erro ao atualizar convidado: ', error);
        process.exit(1);
    });
}

let nome_convidado = process.argv[2];
let id_convidado = process.argv[3];

if (nome_convidado && id_convidado) {
    atualizarConvidadoComRawQuery(id_convidado, nome_convidado);
}
else {
    console.warn('Argumentos insuficientes... Nada a ser feito');
    process.exit(1);
}
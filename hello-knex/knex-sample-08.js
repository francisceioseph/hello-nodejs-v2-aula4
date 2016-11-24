'use strict';

const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); // olha a macumba..

let inserirCachorro = function(nome_cachorro){
    knex('cachorro').insert({
        nome_cachorro: nome_cachorro
    }, 'cachorro_id')
    .then(cachorro => {
        console.log(`Cachorro inserido com sucesso; id: ${cachorro[0]}`);
        process.exit(0);
    })
    .catch(error => {
        console.log('Um erro ocorreu ao inserir um novo cachorro: ', error);
        process.exit(1);
    });
};

let nome_cachorro = process.argv[2];

if (nome_cachorro) {
    inserirCachorro(nome_cachorro);
}
else {
    console.warn('Argumentos insuficientes... Nada a ser feito');
    process.exit(1);
}
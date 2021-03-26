const {Model} = require('objection');
const Knex=require('knex');

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'tatva_test'
    }
  });

  Model.knex(knex);

  module.exports=Model;
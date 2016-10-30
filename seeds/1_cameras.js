/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('cameras').del()
    .then(() => {
      return knex('cameras').insert([{
        id: 1,
        name: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 4,
        price: 369.99,
        on_sale: true
      },
      {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.0,
        on_sale: false
      },
      {
        id: 3,
        name: 'Nikon D810A',
        image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        on_sale: true
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cameras_id_seq', (SELECT MAX(id) FROM cameras));"
      );
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { title: `Ender's Game`, author: 'Orson Scott Card', ISBN: '9780812550702', checked_out: true},
        { title: `The Alchemist`, author: 'Paulo Coelho', ISBN: '9780061122415', checked_out: false},
        { title: `Ishmael`, author: 'Daniel Quinn', ISBN: '0553375407', checked_out: false},
        { title: `Ready Player One`, author: 'Ernest Cline', ISBN: '9780804190138', checked_out: false}


      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {id: 1, thumbnail: '"https://nightmarebucket.s3.us-east-2.amazonaws.com/IMG_7812.jpg', title: "filler", price: 45.00},
        {id: 2, thumbnail: "https://nightmarebucket.s3.us-east-2.amazonaws.com/IMG_7398.jpg", title: 'FILLER', price: 23.00},
      ]);
    });
};

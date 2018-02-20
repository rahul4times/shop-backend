const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
// Get all
router.get('/', function(req, res, next) {
  knex('pizza')
    .select()
    .then((data) => res.json(data));
  //res.render('index', { title: 'Express' });
});

// Get one
router.get('/:id', function(req, res, next){
  knex('pizza')
    .select()
    .where('id', req.params.id)
    .then((data) => res.json(data));
});

// Add to cart
router.patch('/cart/:id/add', function(req, res, next){
  knex('pizza')
  .returning('*')
  .update({in_cart: true})
  .where('id', req.params.id)
  .then((data) => res.json(data));
});

// Remove from cart
router.patch('/cart/:id/delete', function(req, res, next){
  knex('pizza')
    .returning('*')
    .update({in_cart: false})
    .where('id', req.params.id)
    .then((data)=> res.json(data));
});

// Delete permanent
router.delete('/:id', function(req, res, next){
  knex('pizza')
    .del()
    .where('id', req.params.id)
    .then(() => {
      knex('pizza')
      .select()
      .then((data) => res.json(data))
    });
});


module.exports = router;

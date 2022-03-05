const { Router } = require('express');
const Name = require('../models/Name');


const routes = Router();

routes.get('/', async (req, res) => {
  console.log('passed!')
  Name.find()
  .then(data => res.send(data))
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });
});

routes.post('/', async (req, res) => {
  const name = req.body.name;
  Name.create({name: name})
  .then(data => {
    res.status(200).send(data) // example sending data to client
   }) 
  .catch(err => {
    console.log(err)
    res.status(500).send(err)
  })
});

module.exports = routes;
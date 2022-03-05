const { Router } = require('express');
const Count = require('../models/Count');

const routes = Router();

routes.get('/', async (req, res) => {
  const num = req.body.num;
  const curCount = await Count.find();
  res.send(curCount.length > 0 ? { count : curCount[0].count } : { count : 0 } );
});

routes.post('/', async (req, res) => {
  const num = req.body.num;
  const curCount = await Count.find();
  if(curCount.length > 0) {
    const newCount = await Count.findOneAndUpdate({ }, {count: num})
    res.send({ count: newCount.count + 1 });
  } else {
    const newCount = await Count.create({ count: num });
    res.send({ count: newCount.count });
  }
});

module.exports = routes;
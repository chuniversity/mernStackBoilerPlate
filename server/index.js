const express = require('express');
const startMongo = require("./mongoConnect");

const Count = require('./models/Count');


const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '../client/public'));


//test route

app.get('/count', async (req, res) => {
  const num = req.body.num;
  const curCount = await Count.find();
  res.send(curCount.length > 0 ? { count : curCount[0].count } : { count : 0 } )
});

app.post('/count', async (req, res) => {
  const num = req.body.num;
  const curCount = await Count.find();
  if(curCount.length > 0) {
    const newCount = await Count.findOneAndUpdate({ count: num - 1}, {count: num});
    res.send({ count: newCount.count + 1 });
  } else {
    const newCount = await Count.create({ count: num });
    res.send({ count: newCount.count });
  }
});

app.post('/name', async (req, res) => {
  const name = req.body.name
});


const startServer = async () => {
  await startMongo()
  app.listen(4000, () => {
    console.log(`listening on port 4000`)
  });
}

startServer()

const express = require('express');
const startMongo = require("./mongoConnect");

const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '../client/public'));


//test route
app.post('/test', async (req, res) => {
  let num = req.body.num;
  console.log(num)
  res.send(num.toString())
});



const startServer = async () => {
  await startMongo()
  app.listen(4000, () => {
    console.log(`listening on port 4000`)
  });
}

startServer()

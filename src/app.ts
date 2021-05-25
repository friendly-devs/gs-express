import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello cc');
});

app.listen(8080, () => {
  console.log('App started in port 8080');
});

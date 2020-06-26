import express from 'express'
import Ope from './Ope';

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "Test", soma: new Ope().soma(2000, 15) });
});

app.listen(3000, () => {
  console.log("Run server");
});

import axios from "axios";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT;

// Подключение к БД
mongoose.connect(process.env.MONGO_URL as string);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/save_advt", (req, res) => {
  axios.get("http://").catch((err) => console.log(err));

  res.sendStatus(200);
});

app.listen(port, () =>
  console.log(`Autohunt server is listening on ${port}: ${new Date()}`)
);

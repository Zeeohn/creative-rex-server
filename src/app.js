const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: "*",
  })
);

app.options("*", cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  res.status(200).json("Server side *()*");
});

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not Found",
  });
});

module.exports = app;

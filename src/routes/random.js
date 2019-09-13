import express from "express";
import { generateNumber } from "../core/random";
const router = express.Router();

const RandomNumber = {
  Number: null
};

const RandomTruth = {
  Truth: null
};

router.get("/number", (req, res, next) => {
  RandomNumber.Number = generateNumber();
  res.send(RandomNumber);
  next();
});

router.get("/truth", (req, res, next) => {
  const num = generateNumber();
  RandomTruth.Truth = num >= 50 ? true : false;
  res.send(RandomTruth);
  next();
});

export default router;

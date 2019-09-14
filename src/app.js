import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import responseTime from "response-time";

import serverless from "serverless-http";

import indexRouter from "./routes/index";
import randomRouter from "./routes/random";

const app = express();

const URL_API = "/api";

app.use(
  responseTime((req, res, time) => {
    res.setHeader("X-Response-Time", `${time.toFixed(0)}ms`);
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use(`${URL_API}/`, indexRouter);
app.use(`${URL_API}/random`, randomRouter);

exports.handler = serverless(app);

//export default app;

import express from "express";
import bodyParser from "body-parser";

import indexRouter from "./routes/index.js";

const app = express();

app.use(bodyParser.json({ strict: false }));

// api v1
app.use('/', indexRouter);

export default app;

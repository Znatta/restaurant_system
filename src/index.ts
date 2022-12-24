import express from "express";
import { Request, Response } from "express";
require("dotenv").config();

const app = express();

app.get("/", (req: Request, res: Response) =>
  res.send("Default route is working.")
);

app.listen(process.env.PORT, () => {
  console.log(`Server running in http://localhost:${process.env.PORT}`);
});

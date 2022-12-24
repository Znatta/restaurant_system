import express from "express";
import { renderDefaultRoute } from "./route/default.route";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middleware();
    this.route();
  }

  middleware() {
    this.app.use(express.json());
  }

  route() {
    this.app.use("/", renderDefaultRoute);
  }
}

export default new App().app;

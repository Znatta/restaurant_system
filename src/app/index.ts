import express from "express";
import { renderTableRoute } from "./route/table.route";

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
    this.app.use("/api/table", renderTableRoute);
  }
}

export default new App().app;

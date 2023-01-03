import express from "express";
import { renderCardRoute } from "./route/card.route";
import { renderItemRoute } from "./route/item.route";
import { renderOrderRoute } from "./route/order.route";
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
    this.app.use("/api/card", renderCardRoute);
    this.app.use("/api/item", renderItemRoute);
    this.app.use("/api/order", renderOrderRoute);
  }
}

export default new App().app;

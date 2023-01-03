import { Router } from "express";
import { OrderController } from "../controller/order.controller";

const renderOrderRoute = Router();
const orderController = new OrderController();

renderOrderRoute.post("/create", orderController.create);
renderOrderRoute.get("/find/:id", orderController.findOne);
renderOrderRoute.get("/find", orderController.findMany);
renderOrderRoute.delete("/delete/:id", orderController.delete);
renderOrderRoute.get("/getItems/:id", orderController.getItemsInOrder);

export { renderOrderRoute };

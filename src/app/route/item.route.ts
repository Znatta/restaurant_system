import { Router } from "express";
import { ItemController } from "../controller/item.controller";

const renderItemRoute = Router();
const itemController = new ItemController();

renderItemRoute.post("/create", itemController.create);
renderItemRoute.get("/find", itemController.findMany);
renderItemRoute.get("/find/:id", itemController.findOne);
renderItemRoute.delete("/delete/:id", itemController.delete);

export { renderItemRoute };

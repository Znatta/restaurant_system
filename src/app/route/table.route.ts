import { Router } from "express";
import { TableController } from "../controller/table.controller";

const renderTableRoute = Router();
const tableController = new TableController();

renderTableRoute.post("/create", tableController.create);
renderTableRoute.get("/find/:id", tableController.findOne);
renderTableRoute.get("/find", tableController.findMany);

export { renderTableRoute };

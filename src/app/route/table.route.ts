import { Router } from "express";
import { TableController } from "../controller/table.controller";

const renderTableRoute = Router();
const tableController = new TableController();

renderTableRoute.post("/create", tableController.create);

export { renderTableRoute };

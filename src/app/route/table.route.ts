import { Router } from "express";
import { TableController } from "../controller/table.controller";

const renderTableRoute = Router();
const tableController = new TableController();

renderTableRoute.post("/create", tableController.create);
renderTableRoute.patch("/book/:id", tableController.book);
renderTableRoute.patch("/unbook/:id", tableController.unBook);
renderTableRoute.get("/find/:id", tableController.findOne);
renderTableRoute.get("/find", tableController.findMany);
renderTableRoute.delete("/delete/:id", tableController.delete);

export { renderTableRoute };

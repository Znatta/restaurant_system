import { Router } from "express";
import { DefaultController } from "../controller/default.controller";

const renderDefaultRoute = Router();
const defaultController = new DefaultController();

renderDefaultRoute.get("/", defaultController.handle);

export { renderDefaultRoute };

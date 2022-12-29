import { Router } from "express";
import { CardController } from "../controller/card.controller";

const renderCardRoute = Router();
const cardController = new CardController();

renderCardRoute.post("/create", cardController.create);

export { renderCardRoute };

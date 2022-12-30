import { Router } from "express";
import { CardController } from "../controller/card.controller";

const renderCardRoute = Router();
const cardController = new CardController();

renderCardRoute.post("/create", cardController.create);
renderCardRoute.patch("/updateCpf/:id", cardController.updateCpf);
renderCardRoute.get("/find", cardController.findMany);
renderCardRoute.get("/find/:id", cardController.findOne);
renderCardRoute.get("/findByCpf/:cpf", cardController.findOneByCpf);
renderCardRoute.delete("/delete/:id", cardController.delete);

export { renderCardRoute };

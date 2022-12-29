import { Request, Response } from "express";
import cardService from "../service/card.service";

export class CardController {
  public async create(req: Request, res: Response) {
    const card = await cardService.create();

    res.status(200).send(card);
  }
}

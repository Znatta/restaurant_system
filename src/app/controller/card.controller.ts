import { Request, Response } from "express";
import cardService from "../service/card.service";

export class CardController {
  public async create(req: Request, res: Response) {
    const card = await cardService.create();

    res.status(200).send(card);
  }

  public async updateCpf(req: Request, res: Response) {
    const { id } = req.params;
    const { cpf } = req.body;

    const updatedCard = await cardService.updateCPF(+id, cpf);

    res.status(200).send(updatedCard);
  }

  public async findMany(req: Request, res: Response) {
    const cards = await cardService.findMany();

    res.status(200).send(cards);
  }

  public async findOne(req: Request, res: Response) {
    const { id } = req.params;

    const card = await cardService.findOne(+id);

    res.status(200).send(card);
  }

  public async findOneByCpf(req: Request, res: Response) {
    const { cpf } = req.params;

    const card = await cardService.findOneByCpf(cpf);

    res.status(200).send(card);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deletedTableId = await cardService.delete(+id);

    res
      .status(200)
      .send({ message: `Card ${deletedTableId} deleted successfully!` });
  }
}

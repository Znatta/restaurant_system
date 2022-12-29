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

    try {
      const card = await cardService.findOne(+id);

      res.status(200).send(card);
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  public async findOneByCpf(req: Request, res: Response) {
    const { cpf } = req.params;

    try {
      const card = await cardService.findOneByCpf(cpf);

      res.status(200).send(card);
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedTableId = await cardService.delete(+id);

      res.status(200).send({
        message: `Card ${deletedTableId} deleted successfully!`
      });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }
}

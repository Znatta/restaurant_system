import { Request, Response } from "express";
import tableService from "../service/table.service";

export class TableController {
  public async create(req: Request, res: Response) {
    const { description } = req.body;

    const table = await tableService.create(description);

    res.status(200).send(table);
  }

  public async findOne(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const table = await tableService.findOne(+id);

      res.status(200).send(table);
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  public async findMany(req: Request, res: Response) {
    res.status(200).send(await tableService.findMany());
  }
}

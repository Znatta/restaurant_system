import { Request, Response } from "express";
import tableService from "../service/table.service";

export class TableController {
  public async create(req: Request, res: Response) {
    const { description, cardId } = req.body;

    const table = await tableService.create(description, +cardId);

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

  public async book(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await tableService.book(+id);
      res.status(200).send({ message: "Table booked successfully!" });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  public async unBook(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await tableService.unBook(+id);
      res.status(200).send({ message: "Table unbooked successfully!" });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const deletedTableId = await tableService.delete(+id);
      res
        .status(200)
        .send({ message: `Table ${deletedTableId} deleted successfully!` });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }
}

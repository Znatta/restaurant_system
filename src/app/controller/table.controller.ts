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

  public async reserve(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await tableService.reserve(+id);
      res.status(200).send({ message: "Table reserved successfully!" });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  public async unreserve(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await tableService.unreserve(+id);
      res.status(200).send({ message: "Table unreserved successfully!" });
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

import { Request, Response } from "express";
import { TableService } from "../service/table.service";

export class TableController {
  public async create(req: Request, res: Response) {
    const { description } = req.body;

    const table = await TableService.create(description);

    res.status(200).send(table);
  }
}

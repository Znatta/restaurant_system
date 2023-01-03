import { Item } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import itemService from "../service/item.service";

export class ItemController {
  public async create(req: Request, res: Response) {
    const itemToBeCreated: Item = req.body;

    try {
      const item = await itemService.create(itemToBeCreated);

      res.status(200).send(item);
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        res.status(400).send({ error: "Missing some fields in request body" });
    }
  }

  public async findMany(req: Request, res: Response) {
    const items = await itemService.findMany();

    res.status(200).send(items);
  }

  public async findOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const item = await itemService.findOne(+id);

      res.status(200).send(item);
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const deletedItemId = await itemService.delete(+id);

      res
        .status(200)
        .send({ message: `Item ${deletedItemId} deleted successfully!` });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }
}

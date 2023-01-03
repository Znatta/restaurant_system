import { Request, Response } from "express";
import orderService from "../service/order.service";

export class OrderController {
  public async create(req: Request, res: Response) {
    const createdOrder = await orderService.create();

    res.status(200).send(createdOrder);
  }

  public async findOne(req: Request, res: Response) {
    const { id } = req.params;

    const order = await orderService.findOne(+id);

    res.status(200).send(order);
  }

  public async findMany(req: Request, res: Response) {
    const orders = await orderService.findMany();

    res.status(200).send(orders);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deletedOrder = await orderService.delete(+id);

    res.status(200).send(deletedOrder);
  }
}

import { Request, Response } from "express";
import orderService from "../service/order.service";

export class OrderController {
  public async create(req: Request, res: Response) {
    const { cardId } = req.body;

    const createdOrder = await orderService.create(cardId);

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

  public async addItem(req: Request, res: Response) {
    const { id } = req.params;
    const { itemId, quantity } = req.body;

    const itemAdded = await orderService.addItem(+id, +itemId, +quantity);

    res.status(200).send(itemAdded);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deletedOrder = await orderService.delete(+id);
    res
      .status(200)
      .send({ message: `Order ${deletedOrder} deleted successfully!` });
  }
}
